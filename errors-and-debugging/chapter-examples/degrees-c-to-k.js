const input = require('readline-sync');

let degreesC = Number(input.question('Temp in degrees C: '));
//console.log(degreesC);
let degreesK = degreesC + 273.15;

console.log('Degrees K:', degreesK);
