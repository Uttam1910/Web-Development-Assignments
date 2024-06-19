function capitalizeFirstLetter(name) {
    // Check if the first letter is lowercase
    let modifiedName = (name.charAt(0) >= 'a' && name.charAt(0) <= 'z') 
        ? name.charAt(0).toUpperCase() + name.slice(1) 
        : name;
    
    // Return the modified name
    return modifiedName;
}


let userName = "alakh";
console.log(capitalizeFirstLetter(userName)); 

userName = "Vishwa";
console.log(capitalizeFirstLetter(userName));
userName = "suresh";
console.log(capitalizeFirstLetter(userName)); 