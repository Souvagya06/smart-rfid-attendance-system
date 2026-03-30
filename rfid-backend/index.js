console.log("NEW BACKEND LOADED");
const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(express.json());

// ================= DATABASE =================
const db = new sqlite3.Database("./attendance.db", (err) => {
  if (err) {
    console.error("Database error:", err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

// Create tables
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS faculties (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `);
});

// ================= STUDENT SIGNUP =================
app.post("/api/student/signup", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  db.get(
    `SELECT * FROM students WHERE username = ?`,
    [username],
    async (err, row) => {
      if (err) return res.status(500).json({ message: "Database error" });

      if (row) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      db.run(
        `INSERT INTO students (username, password) VALUES (?, ?)`,
        [username, hashedPassword],
        (err) => {
          if (err) return res.status(500).json({ message: "Insert error" });

          res.json({ success: true });
        }
      );
    }
  );
});

// ================= FACULTY SIGNUP =================
app.post("/api/faculty/signup", async (req, res) => {
  const { username, password } = req.body;

  db.get(
    `SELECT * FROM faculties WHERE username = ?`,
    [username],
    async (err, row) => {
      if (err) return res.status(500).json({ message: "Database error" });

      if (row) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      db.run(
        `INSERT INTO faculties (username, password) VALUES (?, ?)`,
        [username, hashedPassword],
        (err) => {
          if (err) return res.status(500).json({ message: "Insert error" });

          res.json({ success: true });
        }
      );
    }
  );
});

// ================= STUDENT LOGIN =================
app.post("/api/student/login", (req, res) => {
  const { username, password } = req.body;

  db.get(
    `SELECT * FROM students WHERE username = ?`,
    [username],
    async (err, user) => {
      if (err || !user) {
        return res.status(401).json({ success: false });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ success: false });
      }

      res.json({ success: true });
    }
  );
});

// ================= FACULTY LOGIN =================
app.post("/api/faculty/login", (req, res) => {
  const { username, password } = req.body;

  db.get(
    `SELECT * FROM faculties WHERE username = ?`,
    [username],
    async (err, user) => {
      if (err || !user) {
        return res.status(401).json({ success: false });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ success: false });
      }

      res.json({ success: true });
    }
  );
});

// ================= SERVER =================
app.listen(5000, () => {
  console.log("Backend running on port 5000 (SQLite)");
});
