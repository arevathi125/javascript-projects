let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function(){
      return Math.floor(Math.random()*11)
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function(){
      return Math.floor(Math.random()*11)
   }
};

let python = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,move: function(){
      return Math.floor(Math.random()*11)
   }
};

let cat = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,move: function(){
      return Math.floor(Math.random()*11)
   }
};

let lizard = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function(){
      return Math.floor(Math.random()*11)
   }
};

// After you have created the other object literals, add the astronautID property to each one.
 
  superChimpOne["astronautID"] = 1;
  salamander["astronautID"] = 2;
  python["astronautID"] = 3;
  cat["astronautID"] = 4;
  lizard["astronautID"] = 5;
    
//  console.log(superChimpOne);
//  console.log(salamander);
//  console.log(python);
//  console.log(cat);
//  console.log(lizard);
   
// Create an array to hold the animal objects.
  let crew = [superChimpOne,salamander,python,cat,lizard];

// Print out the relevant information about each animal.
   let crewReports = function(animal){
      return `   ${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
         }

   console.log(crewReports(crew[0]));
   console.log(crewReports(crew[1]));
   console.log(crewReports(crew[2]));
   console.log(crewReports(crew[3]));
   console.log(crewReports(crew[4]));

// Start an animal race!
  let fitnessTest = function(arr){
       let newArr =[];
       let numOfSteps ;
       let count ;
       for (let i = 0; i < arr.length; i++){
         numOfSteps = 0;
         count = 0;
         while (numOfSteps < 20){
            numOfSteps += arr[i].move();
            count++;
       }
       newArr.push(`${arr[i].name} took ${count} turns to take 20 steps.`);
       }
         return newArr;
  }

  console.log(fitnessTest(crew));