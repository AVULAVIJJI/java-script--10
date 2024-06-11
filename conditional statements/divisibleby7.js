function isDivisibleBy7(number) {
    /**
     * This function checks if the given number is divisible by 7.
     *
     * @param {number} number - The number to be checked.
     * @returns {boolean} - True if the number is divisible by 7, False otherwise.
     **/
    return number % 7 === 0;
}

// Example usage
const number = ("Enter a number: ");
if (isDivisibleBy7(number)) {
    console.log(`${number} is divisible by 7.`);
} else {
    console.log(`${number} is not divisible by 7.`);
}
