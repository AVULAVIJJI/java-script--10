function findLeastNumber(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

// Example usage:
let number1 = 10;
let number2 = 5;
let number3 = 8;

let leastNumber = findLeastNumber(number1, number2, number3);
console.log("The least number is: " + leastNumber);