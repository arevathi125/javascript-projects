// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

    const input = require('readline-sync');

function divide(numer, denom){
    // result = numer / denom;
   if (denom === 0){
    throw Error('Attempted to divide by zero.');
   }
    return numer / denom; 
}

console.log(divide(5, 0));

//    numerator = input.question("Enter the numerator value : ");
//    denominator = input.question("Enter the denominator value : ");

  // console.log(divide(numerator , denominator));

