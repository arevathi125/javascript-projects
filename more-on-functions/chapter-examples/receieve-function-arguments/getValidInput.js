const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
     
// let isValidInput = function(input){
//   if (input.slice(0,1) === "a"){
//     return true;
//   }
//   return false;
// }
// TODO 2: write a validator 
// that ensures input is a vowel

let isValidInput = function(input){
  if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u"){
    return true;
  }
  return false;
}

// Be sure to test your code!
console.log(getValidInput('Enter your input : ',isValidInput));