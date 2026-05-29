

// Console log with business name
console.log("Style-Shift Journal");

// Select element using getElementById
const businessTitle = document.getElementById("Style-Shift Journal");

// Confirm it is NOT null
console.log(businessTitle);

// Variable + console log
let ownerName = "Jordan";
console.log(Ethan);

// Select button and text
const button = document.getElementById("changeButton");
const statusText = document.getElementById("statusText");

// Function
function changeMessage() {
    statusText.textContent = "Evolve your aesthetic!";
    statusText.style.color = "green";
}

// addEventListener
button.addEventListener("click", changeMessage);