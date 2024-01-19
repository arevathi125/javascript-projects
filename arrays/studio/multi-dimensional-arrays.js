let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
     food = food.split(",").sort();
     console.log(food);
     equipment = equipment.split(",").sort();
     console.log(equipment);    
     pets = pets.split(",").sort();
     console.log(pets);
     sleepAids = sleepAids.split(",").sort();
     console.log(sleepAids);

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
     let cargoHold = [];
     cargoHold.push(food,equipment,pets,sleepAids);
     console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
      cargoHold = cargoHold.slice(0,3);
      console.log(cargoHold);

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
    const input = require('readline-sync');
    let info = input.question("Please enter a cabinet no: ");

  if(info < 0 || info > 2){
     console.log('Required cabinet is not present .Please enter a valid cabinet no');
     return;
   } else {
     const cabinetNames = cargoHold[info];
     cabinetNames.forEach(function(name) {
     console.log(name);
  });
 }

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
    const inputCabinetItem = require('readline-sync');
    let cabinetNo = inputCabinetItem.question("Please enter a cabinet no: ");

if(cabinetNo < 0 || cabinetNo > 2){
     console.log('Required cabinet is not present .Please enter a valid cabinet no');
     return;
} else {
   const cabinetNames = cargoHold[cabinetNo];
   cabinetNames.forEach(function(name) {
   console.log(name);
  });

 let item = inputCabinetItem.question("Please enter a item for the selected cabinet: ");
 let checkItem = cabinetNames.includes(item.toLowerCase());
 if(checkItem){
     console.log('Cabinet '+cabinetNo+' does contain '+item);
 } else {
     console.log('Cabinet '+cabinetNo+' does not contain '+item);
 }
 }