
// 1. Welcome Message
function showMessage() {
    alert("Welcome to My Website!");
}

// 2. Change Heading Text
function changeHeading() {
    document.getElementById("heading").innerText =
        "JavaScript is Working Successfully!";
}

// 3. Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// 4. Form Validation
function validateForm() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;

    if (username === "" || email === "") {
        alert("Please fill in all fields!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// 5. Digital Clock
function updateClock() {
    let time = new Date().toLocaleTimeString();

    document.getElementById("clock").innerText = time;
}

setInterval(updateClock, 1000);
updateClock();

// 6. Simple Calculator
function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 + num2;

    document.getElementById("result").innerText =
        "Result: " + result;
}

// 7. Change Background Color
function changeColor() {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215)
        .toString(16).padStart(6, "0");
}

// 8. Show Current Date
function showDate() {
    document.getElementById("date").innerText =
        new Date().toDateString();
}
