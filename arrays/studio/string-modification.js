const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
    let newStr = str.slice(3,str.length)+str.slice(0,3);
   //let newStr = str.slice(3,str.length).concat("Lau");
    console.log(newStr);
    
//Use a template literal to print the original and modified string in a descriptive phrase.
    console.log(`Original string is : \"${str}\" \nModified string is : \"${newStr}\"`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
       let userInput = input.question("Enter the number of letters to be relocated : ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
     if(userInput > str.length){
        //console.log(`Original string is : \"${str}\" \nModified string is : \"${newStr}\"`);
        console.log(`Error in the input.Original string is : \"${str}\" \nModified string is : \"${newStr}\"`);
     } else{
        let updateStr = str.slice(userInput,str.length)+str.slice(0,userInput);
        console.log(`Original string is : \"${str}\" \nModified string is : \"${updateStr}\"`);
       
     }