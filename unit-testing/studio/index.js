
let launchcode = {
    organization : "nonprofit",
    executiveDirector : "Jeff",
    percentageCoolEmployees : 100,
    programsOffered : ["Web Development", "Data Analysis", "Liftoff"],
   // launchOutput(number){return String; }
   launchOutput(number) {
    if( number % 2 === 0 && number % 3 === 0 && number % 5 === 0){
    return 'LaunchCode Rocks!';
   }

else if( number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0){
    return "Rutabagas! That doesn't work.";
}

else if( number % 2 === 0 && number % 3 === 0){
    return 'LaunchCode!';
}

// else if (number % 2 === 0 && number % 5 === 0){
//     return 'Launch Rocks!';
// }

else if (number % 2 === 0 && number % 5 === 0){
    return 'Launch Rocks! (CRASH!!!!)';
}

else if (number % 3 === 0 && number % 5 === 0){
    return 'Code Rocks!';
}

else if( number % 2 === 0){
    return 'Launch!';
}

else if( number % 3 === 0){
    return 'Code!';
}

else if( number % 5 === 0){
    return 'Rocks!';
}
}
}

// let finalObj = {
//     "number % 2 === 0 && number % 5 === 0" : 'Launch Rocks! (CRASH!!!!)',
//     "number % 2 === 0" : 'Launch!',
//     "number % 3 === 0" :  'Code!',
//     "number % 5 === 0" :  'Rocks!'
// };

// function launchOutput(number){
//     let str1 = '';

//     for (i in finalObj){
//         let temp = [];
//         temp = i.split(' ').splice(1,4);
//          temp.unshift(number);
//         let temp1= temp.join(' ');
//          if(eval(temp1))
//          str1 = finalObj[i];
//          //return finalObj[i];
//       //console.log(finalObj[i]);
//     }
//     return str1;
// }


//Received array: ["Web Development", "Data Analysis", "Liftoff", 3]

module.exports = {
    launchcode : launchcode,
   }
