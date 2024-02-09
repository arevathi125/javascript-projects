// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  
  test("returns organization value is 'nonprofit'", () => {
    expect(launchcode.launchcode.organization).toBe("nonprofit");
  });

  test("returns executiveDirector value is 'Jeff'", () => {
    expect(launchcode.launchcode.executiveDirector).toBe("Jeff");
  });

  test("returns percentageCoolEmployees value is 100", () => {
    expect(launchcode.launchcode.percentageCoolEmployees).toBe(100);
  });

  test("returns programsOffered is ", () => {
    let programsOffered = ["Web Development", "Data Analysis", "Liftoff"];
    programsOffered.push(programsOffered.length);
    expect(programsOffered.length).toBe(4);
   // expect(programsOffered).toContain(3);
  });

  test("When passed a number that is ONLY divisible by 2, return 'Launch!'", () => {
    let result = launchcode.launchcode.launchOutput(2);
    expect(result).toBe('Launch!');
  });

  test("When passed a number that is ONLY divisible by 3, return 'Code!'", () => {
    let result = launchcode.launchcode.launchOutput(9);
    expect(result).toBe('Code!');
  });

  test("When passed a number that is ONLY divisible by 5, return 'Rocks!'", () => {
    let result = launchcode.launchcode.launchOutput(5);
    expect(result).toBe('Rocks!');
  });

  test("When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'", () => {
    let result = launchcode.launchcode.launchOutput(6);
    expect(result).toBe('LaunchCode!');
  });

  test("When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'", () => {
    let result = launchcode.launchcode.launchOutput(15);
    expect(result).toBe('Code Rocks!');
  });

  // test("When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'", () => {
  //   let result = launchcode.launchcode.launchOutput(10);
  //   expect(result).toBe('Launch Rocks!');
  // });

  test("When passed a number that is divisible by 2 AND 5, return 'Launch Rocks! (CRASH!!!!)'", () => {
    let result = launchcode.launchcode.launchOutput(10);
    expect(result).toBe('Launch Rocks! (CRASH!!!!)');
  });

  test("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'", () => {
    let result = launchcode.launchcode.launchOutput(30);
    expect(result).toBe('LaunchCode Rocks!');
  });

  test("When passed a number that is NOT divisible by 2, 3, AND 5, return 'Rutabagas! That doesn't work.'", () => {
    let result = launchcode.launchcode.launchOutput(-1);
    expect(result).toBe("Rutabagas! That doesn't work.");
  });


});