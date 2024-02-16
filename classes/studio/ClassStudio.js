//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
     class CrewCandidate{
    constructor(name, mass, scores = []){
          this.name = name;
          this.mass = mass;
          this.scores = scores;
    }

      addScore(newScore){
        return this.scores.push(newScore);
       }

       average(){
        let sum = 0;
        let avg = 0;
        let length = this.scores.length;
          for(var item in this.scores){
            sum += this.scores[item];
            avg = Math.round(sum / length * 10) / 10;
              }
          return avg;
           }

       status(){
          if (this.average() >= 90){
             return "Accepted";
            }
            else if (this.average() >= 80){
                return "Reserved";
            }
            else if (this.average() >= 70){
                return "Probationary";
            }
            else {
                return "Rejected";
            }
        }
        
       }
        
    let candidate1 = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
    let candidate2 = new CrewCandidate('Merry Maltese', 135, [93, 88, 97]);
    let candidate3 = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

    let candidates = [candidate1, candidate2, candidate3];

    console.log(`name : ${candidate1.name}, mass : ${candidate1.mass}, scores : [${candidate1.scores}]`);
    console.log(`name : ${candidate2.name}, mass : ${candidate2.mass}, scores : [${candidate2.scores}]`);
    console.log(`name : ${candidate3.name}, mass : ${candidate3.mass}, scores : [${candidate3.scores}]`);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
  console.log(candidate1.addScore(83));
  console.log(candidate1.scores);

   console.log(candidate2.average());
   
   for(let i = 0; i < candidates.length; i++){
    console.log( `${candidates[i].name} earned an average test score of ${candidates[i].average()}% and has a status of ${candidates[i].status()}.`);
   }

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

    let reserveCount = 0;
      
    while (candidate3.status() !== "Reserved"){
        candidate3.addScore(100);
        reserveCount++;
    }

    console.log(candidate3.scores);
    console.log(`${candidate3.name} took ${reserveCount} to reach Reserve status`);
    console.log(candidate3.status());

    let acceptCount = 0;
      
    while (candidate3.status() !== "Accepted"){
        candidate3.addScore(100);
        acceptCount++;
    }

    console.log(candidate3.scores);
    console.log(`${candidate3.name} took ${acceptCount} to reach Accept status`);
    console.log(candidate3.status());