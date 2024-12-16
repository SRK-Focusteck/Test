// Function to reverse a string
function reverseString(str) {
    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }
    return str.split("").reverse().join("");
}

// Example usage
const input = "Hello, World!";
const reversed = reverseString(input);
console.log("Reversed String:", reversed); // Output: !dlroW ,olleH
