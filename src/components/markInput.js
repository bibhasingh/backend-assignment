import winner from '../utils/winner.js';

const boxArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let currentPlayer = 0;
let winGame = 0;

const markInput = (boxNumber) => {
    if (!boxArr[boxNumber] && !winGame) {
        if (!currentPlayer) {
            document.querySelector(`.box${boxNumber}`).innerHTML = '<h1>X</h1>';
            document.querySelector('.player').textContent = 'Player2';
            boxArr[boxNumber] = 'X';
            winGame = winner(boxArr, currentPlayer, winGame);
            currentPlayer = 1;
        } else {
            document.querySelector(`.box${boxNumber}`).innerHTML = '<h1>O</h1>';
            document.querySelector('.player').textContent = 'Player1';
            boxArr[boxNumber] = 'O';
            winGame = winner(boxArr, currentPlayer, winGame);
            currentPlayer = 0;
        }
    } else {
        console.log('please enter in blank box');
    }

    console.log(boxArr);
};

export default markInput;
