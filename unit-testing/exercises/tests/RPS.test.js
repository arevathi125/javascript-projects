const whoWon = require('../RPS.js');

describe("whoWon", function(){

    test(" if both choose the same option then returns 'TIE!'", () => {
        let result = whoWon('rock' , 'rock');
        expect(result).toBe('TIE!');
     });

     test(" if player1 ='rock' & player2 ='paper' then returns 'Player 2 wins!'", () => {
        let result = whoWon('rock' , 'paper');
        expect(result).toBe('Player 2 wins!');
     });

     test(" if player1 ='paper' & player2 ='scissors' then returns 'Player 2 wins!'", () => {
        let result = whoWon('paper','scissors');
        expect(result).toBe('Player 2 wins!');
     });

     test(" if player1 ='scissors' & player2 ='rock' then returns 'Player 2 wins!'", () => {
        let result = whoWon('scissors' , 'rock');
        expect(result).toBe('Player 1 wins!');
     });
});