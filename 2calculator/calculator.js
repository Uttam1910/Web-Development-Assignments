function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return;  // Exit the function if the operator is invalid
    }

    console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);
}

// Example usage:
calculator(10, 5, '+');  // Outputs: The result of 10 + 5 is: 15
calculator(10, 5, '-');  // Outputs: The result of 10 - 5 is: 5
calculator(10, 5, '*');  // Outputs: The result of 10 * 5 is: 50
calculator(10, 5, '/');  // Outputs: The result of 10 / 5 is: 2
calculator(10, 5, '%');  // Outputs: Invalid operator
