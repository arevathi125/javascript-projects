 // 1. makeLine(size) function
    function makeLine(size){
    let line = "";
    for (let i = 0; i < size; i++){
    line += "#";
        }
    return line;
 }

 // Line function calling
//console.log(makeLine(5));  

// 2. makeSquare(size) function
   function makeSquare(size){
      let square = "";
     for (let i = 0; i < size; i++){
        square +=(makeLine(size) + "\n");
         }
     return square.slice(0,-1);
       }
       
   // Square function calling
   //console.log(makeSquare(5));

// 3. makeRectangle(width, height) function
  function makeRectangle(width, height){
     let recatngle = "";
     for (let i = 0; i < height; i++){
        recatngle += (makeLine(width) + '\n');
     }
     return recatngle.slice(0,-1);
  }
   
  // Rectangle function calling
   //console.log(makeRectangle(5, 3));

  // 4. makeDownWardStairs(height) function
  function makeDownWardStairs(height){
     let stairs = "";
     for (let i = 0; i < height; i++){
        stairs += (makeLine(i+1) + '\n');
     }
     return stairs.slice(0,-1);
  }

  // MakeDownWardStairs function calling
  // console.log(makeDownWardStairs(5));

  // 5. makeSpaceLine(numSpaces, numChars) funcion

  function makeSpaceLine(numSpaces, numChars){
      let spaceLine = "";
      spaceLine = spaceLine.padStart(numSpaces,' ')+makeLine(numChars)+spaceLine.padEnd(numSpaces,' ');
        return spaceLine;
        }

  //MakeSpaceLine function calling
  // console.log(makeSpaceLine(3,5));

  // 6. makeIsoscelesTriangle(height) function
  function makeIsoscelesTriangle(height){
     let triangle = "";
     for (let i = 0; i < height; i++){
        triangle += (makeSpaceLine(height -i -1 , 2 * i + 1) + "\n");
            }
            return triangle.slice(0,-1);
  }

  //MakeIsoscelesTriangle(height) function calling
   //console.log(makeIsoscelesTriangle(5));

   // makeDiamond(height) function
     function makeDiamond(height){
         return diamond = makeIsoscelesTriangle(height).split('').reverse().join('');
       
              }

   //MakeDiamond(height) function calling
   //console.log(makeDiamond(5));

   //Bonus Mission
   // 1. makeLine(size) function
   function makeLine(size, char = '#'){
    let line = "";
    for (let i = 0; i < size; i++){
    line += char;
        }
    return line;
 }

   // Line function calling
     console.log(makeLine(5)); 
    //console.log(makeLine(5,'$'));  


