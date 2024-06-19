function calculateRentalCost(daysRented, carType) {
    let rentalCostPerDay;

    // Determine rental cost per day based on car type
    switch (carType.toLowerCase()) {
        case "economy":
            rentalCostPerDay = 4000;
            break;
        case "midsize":
            rentalCostPerDay = 10000;
            break;
        case "luxury":
            rentalCostPerDay = 20000;
            break;
        default:
            return "Invalid car type. Please choose Economy, Midsize, or Luxury.";
    }

    // Calculate total rental cost
    let totalRentalCost = rentalCostPerDay * daysRented;

    // Return the total rental cost
    return totalRentalCost;
}

// Example usage:
let days = 5;
let car = "midsize";
let totalCost = calculateRentalCost(days, car);
console.log(`Total rental cost for ${car} car rented for ${days} days: Rs. ${totalCost}/-`);
