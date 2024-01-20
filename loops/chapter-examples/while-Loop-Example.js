// let i = 0;

// while (i < 51) {
//   console.log(i);
//   i++;
// }

/* //Reversing a string with while loop
let str = "blue";
let reversed = " ";
let i = 0; 

while ( i < str.length){
  reversed = str[i] + reversed;
      i++;
}
console.log(reversed);  */

/* //input validation for positve numbers
 const input = require('readline-sync');
 let number = input.question('Please enter a Positive number : ');
 number = Number(number);

 while ( number <= 0){
  number = input.question('Invalid input. Please enter a positive number:');
  number = Number(number);
 }  */

 /* let n = 10;
let answer = 1;

while (n > 0) {
   answer = answer + n;
   n = n + 1;
}

console.log(answer);  */

//while - break
let numbers = [ 10,11,12,22,43,44];
let searchVal = 42;
let i = 0;

while (i < numbers.length) {
   if (numbers[i] === searchVal) {
      break;
   }
   i++;
}

if (i < numbers.length) {
   console.log("The value", searchVal, "was located at index", i);
} else {
   console.log("The value", searchVal, "is not in the array.");
}
