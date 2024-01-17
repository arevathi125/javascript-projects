//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
 // console.log(`${language.slice(0,1)}${language.slice(4,5)}`)
   console.log(language.slice(0,1) + language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
  console.log(language.substring(0,1)+language.substring(4,5));

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
     let j =  language[0];
     let s =  language[4];  
console.log(`The abbreviation for '${language}' is '${j}${s}'.`) ;    

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log("The abbreviation for "+"'"+language+"'"+" is '"+language.charAt(0)+language.charAt(4)+"'.");

  //Part Three section Two
console.log(language.charAt(language.indexOf('J'))+language.charAt(language.indexOf('S')));

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let word1 = notTitleCase.substring(0,5);
let word2 = notTitleCase.substring(6,10);
console.log(word1.charAt(0).toUpperCase()+word1.substring(1,6)+" "+word2.charAt(0).toUpperCase()+word2.substring(1,4));

//console.log(`${notTitleCase.replace('t',(notTitleCase.slice(0,1)).toUpperCase()).slice(0,5)}${notTitleCase.replace('c',(notTitleCase.slice(6,7)).toUpperCase()).slice(6,10)}`);