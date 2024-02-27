// Write your JavaScript code here.
function init () {
    const missionAbort = document.getElementById("missionAbort");
    const landing = document.getElementById("landing");
    const takeoff = document.getElementById("takeoff");

    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
   
     altitude = 0;
     rocket.style.top = '0px';
     rocket.style.down = '0px';
     rocket.style.left = '0px';
     rocket.style.right = '0px';

    takeoff.addEventListener('click',event =>{
     if (window.confirm("Confirm that the shuttle is ready for takeoff?")){
         flightStatus.innerHTML = 'Shuttle in flight.';
         shuttleBackground.style.backgroundColor = "blue";
         spaceShuttleHeight.innerHTML = 10000;
        }
    });

    landing.addEventListener('click',event =>{
       window.alert("The shuttle is landing. Landing gear engaged.")
          flightStatus.innerHTML = "The shuttle has landed.";
          shuttleBackground.style.backgroundColor = "green";
          spaceShuttleHeight.innerHTML = 0;
     });

     missionAbort.addEventListener('click', event =>{
        if (window.confirm("Confirm that you want to abort the mission?")){
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
           }
     });

     up.addEventListener('click', event =>{
        rocket.setAttribute("style","up:10px;");
        //  rocket.style.top = (parseInt(rocket.style.top) - 10) + 'px';
        //  console.log(rocket.style.top);
         altitude +=  10000;
       spaceShuttleHeight.innerHTML = altitude;
     });

     down.addEventListener('click', event =>{
        rocket.style.down = (parseInt(rocket.style.down) + 10) +'px';
        console.log(rocket.style.down);
        altitude -=  10000;
        spaceShuttleHeight.innerHTML = altitude;
     });

     right.addEventListener('click', event =>{
         rocket.style.right = (parseInt(rocket.style.right) + 10) + 'px';
         console.log( rocket.style.right);
     });

     left.addEventListener('click', event =>{
    //    let positionString = rocket.style.left;
    //    console.log(positionString);
    //     let positionNum = parseInt(positionString.slice(0,-2));
    //    console.log(positionNum);
    //    rocket.style.left = (positionNum - 10) + 'px';
    //    rocket.style.left = 0;
    //    console.log(parseInt(rocket.style.left));
       rocket.style.left = (parseInt(rocket.style.left) - 10) + 'px';
       console.log(parseInt(rocket.style.left));
   
     });

     }

// Remember to pay attention to page loading!
  window.addEventListener("load", init);