function calculateBill(costPerDish, numberOfPeople) {
    // Calculate the total bill
    let totalBill = costPerDish * numberOfPeople;

    // Calculate the bill per person
    let billPerPerson = totalBill / numberOfPeople;

    // Create an object to store the results
    let billDetails = {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };

    // Return the object containing the bill details
    return billDetails;
}

// Example usage:
let costPerDish = 500; // Cost of each dish in Rs.
let numberOfPeople = 4; // Number of people sharing the dish
let bill = calculateBill(costPerDish, numberOfPeople);
console.log("Total Bill:", bill.totalBill, "Rs.");
console.log("Bill per Person:", bill.billPerPerson, "Rs.");
