const calculateTotalCost = (cart) => {
    return cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
};

// Example usage:
const customerCart = [
    { unitPrice: 100, quantity: 2 },
    { unitPrice: 200, quantity: 1 },
    { unitPrice: 50, quantity: 5 },
];

const totalCost = calculateTotalCost(customerCart);
console.log("Total Cost:", totalCost, "Rs.");
