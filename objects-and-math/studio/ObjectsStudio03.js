// Code your crewMass function here:

    function crewMass(crewMember){
      let totalMass = 0;

      for (let i = 0; i < crewMember.length; i++){
        if (crewMember[i].species === 'dog' || crewMember[i].species === 'cat'){
        totalMass += crewMember[i].mass + 200;
        }
        else{
          totalMass += crewMember[i].mass + 100;
        }
      }
      return Math.round(totalMass*10) / 10;
    }

// Code your fuelRequired function here:

     function fuelRequired(crewMass , unCrewMass = 75000){
      let fuelAmount = (crewMass+unCrewMass)*9.5;
      return Math.ceil(fuelAmount);
     }

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 
 let crewTotalMass = crewMass(crew);
 let totalFuel = fuelRequired(crewTotalMass);
 console.log(`The mission has a launch mass of ${crewTotalMass} kg and requires ${totalFuel} kg of fuel.`);