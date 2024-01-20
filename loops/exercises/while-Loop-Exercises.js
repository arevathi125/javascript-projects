//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
   const input = require('readline-sync');

     let fuel_level = 0;
     let numberOfAstronauts = 0;
     let shuttleAltitude = 0;
     
/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
      
  fuel_level = input.question("Enter the starting fuel level : ");
  fuel_level = Number(fuel_level);

  while ( fuel_level <= 5000 || fuel_level > 30000){
    fuel_level = input.question("Invalid input.Enter the starting fuel level : ");
    fuel_level = Number(fuel_level);
   }
  
//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
         
      numberOfAstronauts = input.question("Enter the number of astronauts : ");
      numberOfAstronauts = Number(numberOfAstronauts);
    
        while ( numberOfAstronauts <= 0 || numberOfAstronauts >= 7){
          numberOfAstronauts = input.question("Invalid input. Enter the number of astronauts : ");
          numberOfAstronauts = Number(numberOfAstronauts);
        }
     
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
      
     while ( fuel_level - 100 * numberOfAstronauts >= 0){
      shuttleAltitude = shuttleAltitude + 50;
      fuel_level = fuel_level - 100 * numberOfAstronauts;
        }
      
/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
    
   let output = `The shuttle gained an altitude of  ${shuttleAltitude} km.`;
   
    if ( shuttleAltitude >= 2000){
     output = output + "Orbit achieved!";
   }
   else {
     output = output + "Failed to reach orbit.";
   }

   console.log(output);