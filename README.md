 # 📡 Smart RFID Attendance Management System

A full-stack web application that automates student attendance using RFID technology, integrated with a modern React frontend and a Node.js + SQLite backend.

---

## 🚀 Features

* 🔐 Role-based authentication (Student & Faculty)
* 📡 RFID-based automatic attendance marking
* 📊 Student dashboard with date-range filtering
* 📁 Export attendance data to Excel
* 🧠 Secure password hashing using bcrypt
* 🗄️ SQLite database for persistent storage
* ⚡ RESTful APIs built with Express.js

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* CSS (Custom UI + animations)

### Backend

* Node.js
* Express.js
* SQLite
* bcrypt.js

### Hardware

* ESP32
* RFID RC522 Module

---

## 📂 Project Structure

```
smart-rfid-attendance-system/
│
├── frontend/              # React Application
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/               # Node.js + SQLite Server
│   ├── index.js
│   ├── attendance.db
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/smart-rfid-attendance-system.git
cd smart-rfid-attendance-system
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
node index.js
```

Backend runs at:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

```
cd frontend
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🔑 API Endpoints

### Student

* POST `/api/student/signup`
* POST `/api/student/login`

### Faculty

* POST `/api/faculty/signup`
* POST `/api/faculty/login`

### Attendance

* POST `/api/attendance/mark`
* GET `/api/attendance?username=&start=&end=`

---

## 📊 How It Works

1. User signs up as Student or Faculty
2. Logs into the system
3. RFID card is scanned via ESP32
4. Backend records attendance in SQLite database
5. Student dashboard displays attendance records
6. Data can be filtered by date and exported

---

## 👨‍💻 Contributors

* Souvagya Karmakar – Section B – Roll 78
* Swapnil Sadhu – Section A
* Anirban Pal – Section B – Roll 10
* Sugata Nayak – Section B – Roll 86
* Ronit Mishra – Section B – Roll 58

---

## 📌 Future Improvements

* JWT Authentication
* Cloud database (MongoDB / Firebase)
* Real-time attendance updates
* Admin dashboard
* Attendance analytics & charts

---

## ⭐ Acknowledgements

This project was developed as part of a full-stack internship and demonstrates integration of IoT hardware with modern web technologies.
