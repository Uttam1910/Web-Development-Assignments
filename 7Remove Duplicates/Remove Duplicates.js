function removeDuplicates(cart) {
    // Create a new Set to store unique items
    let uniqueItems = new Set(cart);
    
    // Convert the Set back to an array
    let uniqueCart = Array.from(uniqueItems);
    
    return uniqueCart;
}


let customerCart = ["apple", "banana", "orange", "banana", "grape", "apple"];
let uniqueCart = removeDuplicates(customerCart);
console.log("Original Cart:", customerCart);
console.log("Cart without Duplicates:", uniqueCart);
