// Function to find the greatest of two numbers
function findGreatest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Main program
// Taking two numbers as input from the user
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

// Checking if the user canceled the prompt
if (num1 === null || num2 === null) {
    alert("User cancelled the input.");
} else {
    // Finding the greatest number
    const greatest = findGreatest(num1, num2);

    // Printing the result
    console.log(`The greatest number between ${num1} and ${num2} is ${greatest}.`);
    alert(`The greatest number between ${num1} and ${num2} is ${greatest}.`);
}
