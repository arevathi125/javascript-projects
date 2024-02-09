const processor = require('../processor.js');

describe("transmission processor", function() {

   //  TODO: put tests here
    test("takes a string returns an object", () =>{
        let result = processor("9701::<489584872710>");
        expect(typeof result).toBe("object");
    });

    test("returns -1 if '::' not found", ()=>{
      let result = processor("9701<489584872710>");
      expect(result).toBe(-1);
    });

    test("returns id in object", ()=>{
      let result = processor("9701::<489584872710>");
      expect(result.id).not.toBeUndefined();
    });

    test("converts id to a number", () =>{
      let result = processor("9701::<489584872710>");
      expect(result.id).toBe(9701);
    });

    test("returns rawData in object", ()=>{
      let result = processor("9701::<489584872710>");
      expect(result.rawData).not.toBeUndefined();
    });

    test("returns -1 for rawData if missing < at position 0", ()=>{
      let result = processor("9701::489584872710>");
    // let result = processor("9701::8729740349572>0912");
    //let result = processor("9701::4872<97403495720912");
    // let result = processor("9701::487297403495720912");
    // let result = processor("9701::<487297403495<720912>");
      expect(result.rawData).toBe(-1);
      //expect(result).toBe(-1);
    });

    test("returns -1 if id is not a number", () =>{
      let result = processor("9701::<489584872710>");
      expect(result.notNumberId).toBe(-1);
    });

    test("returns -1 if '::' found more than one", ()=>{
      let result = processor("9701::<489584872710>::894");
      expect(result).toBe(-1);
    });

    test("returns -1 for rawData if indide values present between< >", ()=>{
      let result = processor("9701::<489584872710>");
      expect(result.rawData).toBe(-1);
      });
 });