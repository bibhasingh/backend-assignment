import winner from '../utils/winner.js';
import markInput from './markInput.js';
const boxArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let currentPlayer = 0;
let winGame = 0;

const handleInput = (boxNumber) => {
    if (boxNumber) {
        if (!boxArr[boxNumber] && !winGame) {
            if (!currentPlayer) {
                markInput(boxNumber, 'X', 2);
                boxArr[boxNumber] = 'X';
                winGame = winner(boxArr, currentPlayer, winGame);
                currentPlayer = 1;
            } else {
                markInput(boxNumber, 'O', 1);
                boxArr[boxNumber] = 'O';
                winGame = winner(boxArr, currentPlayer, winGame);
                currentPlayer = 0;
            }
        } else {
            console.log('please enter in blank box');
        }
    } else {
        for (let i = 0; i < boxArr.length; i++) {
            boxArr[i] = 0;
        }
        currentPlayer = 0;
        winGame = 0;
    }

    console.log(boxArr);
};

export default handleInput;
