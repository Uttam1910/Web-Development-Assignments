// Customer account object
let customerAccount = {
    name: "John Doe",
    balance: 1000,

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposit successful! New balance: Rs. ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    },

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawal successful! New balance: Rs. ${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds for withdrawal.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    }
};

// Example usage:
// Depositing money
customerAccount.deposit(500);  // Should print: Deposit successful! New balance: Rs. 1500

// Withdrawing money
customerAccount.withdraw(200);  // Should print: Withdrawal successful! New balance: Rs. 1300

// Attempting to withdraw more than the balance
customerAccount.withdraw(1500);  // Should print: Insufficient funds for withdrawal.

// Attempting to deposit a non-positive amount
customerAccount.deposit(-100);  // Should print: Deposit amount must be positive.

// Attempting to withdraw a non-positive amount
customerAccount.withdraw(-50);  // Should print: Withdrawal amount must be positive.
