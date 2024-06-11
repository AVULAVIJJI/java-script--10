function findMinimumNumber(num1, num2) {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

// Example usage:
let number1 = 10;
let number2 = 20;

let minimumNumber = findMinimumNumber(number1, number2);
console.log("The least number is: " + minimumNumber);
