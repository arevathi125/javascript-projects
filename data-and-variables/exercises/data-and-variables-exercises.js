// Declare and assign the variables below
let nameOfTheShuttle = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToTheMoonKm = 384400;
const milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof nameOfTheShuttle);
 console.log(typeof shuttleSpeedMph);
 console.log(typeof distanceToMarsKm);
 console.log(typeof distanceToTheMoonKm);
 console.log(typeof milesPerKilometer);

// Calculate a space mission below
// 1. calculating miles to mars
 let milesToMars = distanceToMarsKm * milesPerKilometer;

 // 2. calculating hours 
 let hoursToMars = milesToMars / shuttleSpeedMph;

 // 3. calculating days
 let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(nameOfTheShuttle+" will take "+daysToMars+" days to reach Mars.");

// Calculate a trip to the moon below
// 1. calculating miles to mars
let milesToMoon = distanceToTheMoonKm * milesPerKilometer;

// 2. calculating hours 
let hoursToMoon = milesToMoon / shuttleSpeedMph;

// 3. calculating days
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(nameOfTheShuttle+" will take "+daysToMoon+" days to reach Moon.");