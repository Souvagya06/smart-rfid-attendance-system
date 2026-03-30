
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const togglePassword = document.getElementById("togglepassword");
const toggleConfirmPassword = document.getElementById("toggleconfirmpassword");
const signupForm = document.getElementById("signupForm");
togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        password.type = "password";
        togglePassword.textContent = "👁️";
    }
});
toggleConfirmPassword.addEventListener("click", () => {
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        toggleConfirmPassword.textContent = "🙈";
    } else {
        confirmPassword.type = "password";
        toggleConfirmPassword.textContent = "👁️";
    }
});
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        return;
    }

    alert("Signup successful!");
});
