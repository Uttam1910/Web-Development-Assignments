function findHighestMarks(marks) {
    // Initialize the highest marks with the first element of the array
    let highestMarks = marks[0];

    // Iterate through the array to find the highest marks
    for (let i = 1; i < marks.length; i++) {
        // Use the ternary operator to update highestMarks
        highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
    }

    // Display the highest marks in the console
    console.log(`The highest marks scored by any student in the class are: ${highestMarks}`);
}

// Example usage:
let marks = [85, 92, 69, 99, 95];
findHighestMarks(marks); // Outputs: The highest marks scored by any student in the class are: 95
