const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    let discount = originalPrice - discountedPrice;
    let discountPercentage = (discount / originalPrice) * 100;
    return discountPercentage.toFixed(2); // Round to two decimal places
};


let originalPrice = 500;
let discountedPrice = 400;

let discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`Discount Percentage: ${discountPercentage}%`);
