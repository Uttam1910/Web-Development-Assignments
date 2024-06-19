function countVowels(input) {
    // Convert the input to lowercase to make the check case-insensitive
    input = input.toLowerCase();
    
    // Define a string of vowels for checking
    const vowels = "aeiou";
    
    // Initialize the vowel count to 0
    let vowelCount = 0;
    
    // Iterate through each character in the input
    for (let char of input) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    
    // Return the vowel count
    return vowelCount;
}


let userInput = "Rajesh Kumar";  
console.log(`Number of vowels in "${userInput}": ${countVowels(userInput)}`); 

userInput = "Aryabhata";  
console.log(`Number of vowels in "${userInput}": ${countVowels(userInput)}`); 

userInput = "Zyxwvuts";  
console.log(`Number of vowels in "${userInput}": ${countVowels(userInput)}`); 

userInput = "Hello World";  
console.log(`Number of vowels in "${userInput}": ${countVowels(userInput)}`); 
