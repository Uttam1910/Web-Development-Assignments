function printNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        
        // Check if the number is divisible by 3 but not by 2
        if (num % 3 === 0 && num % 2 !== 0) {
            console.log(num);
        } else {
            continue; // Skip to the next iteration if not divisible by 3 or divisible by 2
        }
    }
}

// Example usage:
let numbers = [9, 12, 15, 18, 21, 24, 27];
printNumbers(numbers);
