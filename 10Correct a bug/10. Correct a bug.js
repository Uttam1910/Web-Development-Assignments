function fixCartQuantities(cart) {
    // Create a new array to store corrected quantities
    let correctedCart = [];

    // Iterate through the original cart array
    for (let i = 0; i < cart.length; i++) {
        // Double the quantity of each item and add to the corrected cart array
        correctedCart.push(cart[i] * 2);
    }

    // Return the corrected cart array
    return correctedCart;
}

// Example usage:
let cart = [2, 4, 1, 3];
let correctedCart = fixCartQuantities(cart);
console.log("Original Cart:", cart);
console.log("Corrected Cart:", correctedCart);
