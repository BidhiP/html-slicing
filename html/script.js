// JavaScript code in script.js

// Array to store names
const namesArray = [];

// Get elements from the DOM
const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("name");
const addNameButton = document.getElementById("addName");
const nameList = document.getElementById("nameList");

// Function to update the displayed array
function updateArrayDisplay() {
    nameList.innerHTML = "";
    namesArray.forEach(name => {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        nameList.appendChild(listItem);
    });
}

// Event listener for the "Add" button
addNameButton.addEventListener("click", () => {
    const newName = nameInput.value.trim(); // Remove leading and trailing whitespace

    if (newName) {
        // Check if the name is not already in the array
        if (!namesArray.includes(newName)) {
            namesArray.push(newName);
            updateArrayDisplay();
        }

        nameInput.value = ""; // Clear the input field
    }
});

// Prevent form submission on Enter key press
nameForm.addEventListener("submit", (e) => {
    e.preventDefault();
});
