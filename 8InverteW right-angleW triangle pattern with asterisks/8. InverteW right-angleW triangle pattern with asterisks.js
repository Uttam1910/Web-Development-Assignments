function printInvertedRightTriangle(i) {
    // Outer loop for rows
    for (let row = i; row >= 1; row--) {
        // Inner loop for columns
        for (let col = 1; col <= row; col++) {
            process.stdout.write("*"); // Print asterisk without newline
        }
        console.log(); // Move to the next line after each row
    }
}

// Example usage:
let numRows = 6;
printInvertedRightTriangle(numRows);
