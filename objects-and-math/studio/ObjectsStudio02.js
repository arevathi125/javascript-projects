// Code your orbitCircumference function here:
     
     function orbitCircumference(radius){
          let circumference = 0;
         return circumference = Math.round(2*Math.PI*radius);   
     }

// Code your missionDuration function here:
      
       function missionDuration(numOfOrbits,orbitRadius = 2000, orbitalSpeed = 28000){
        let distance = numOfOrbits*(orbitCircumference(orbitRadius));
        let time = distance / orbitalSpeed;
        //console.log(time);
        time =  Math.round(time *100) / 100;
      //  console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);
        return time;
       }

        console.log(missionDuration(5));

// Copy/paste your selectRandomEntry function here:
        
     let selectRandomEntry = function(idArray){
     let index = Math.floor(Math.random()*idArray.length);
     return idArray[index];
       };

// Code your oxygenExpended function here:
        
       function oxygenExpended(candidate){
          let duration = missionDuration(3);
          let oxygenUsed = Math.round(candidate.o2Used(duration)*1000) / 1000;
          //return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenUsed} kg of oxygen.`;
          return oxygenUsed;
       }

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];

  let randomCandidate = selectRandomEntry(crew);
  console.log(randomCandidate);

 //console.log(oxygenExpended(randomCandidate));

  console.log(oxygenExpended(randomCandidate, 2500, 30000));

  //Bonus Part

    let oxygenArray = [];
    for(item in crew){
      oxygenArray.push(oxygenExpended(crew[item]));
    }

    console.log("Oxygen Array : ",oxygenArray);

  function minNumberInArray(arr){
    let minValue = arr[0];
    for(let item of arr){
      if (item < minValue){
        minValue = item;
      }
    }
    return minValue;
  }

    console.log(`Smallest Oxygen consumption is ${minNumberInArray(oxygenArray)}`)

