const winner = (boxArr, currentPlayer, winGame) => {
    if (
        (boxArr[0] &&
            boxArr[1] &&
            boxArr[2] &&
            boxArr[0] === boxArr[1] &&
            boxArr[1] === boxArr[2]) ||
        (boxArr[3] &&
            boxArr[4] &&
            boxArr[5] &&
            boxArr[3] === boxArr[4] &&
            boxArr[4] === boxArr[5]) ||
        (boxArr[6] &&
            boxArr[7] &&
            boxArr[8] &&
            boxArr[6] === boxArr[7] &&
            boxArr[7] === boxArr[8]) ||
        (boxArr[0] &&
            boxArr[3] &&
            boxArr[6] &&
            boxArr[0] === boxArr[3] &&
            boxArr[3] === boxArr[6]) ||
        (boxArr[1] &&
            boxArr[4] &&
            boxArr[7] &&
            boxArr[1] === boxArr[4] &&
            boxArr[4] === boxArr[7]) ||
        (boxArr[2] &&
            boxArr[5] &&
            boxArr[8] &&
            boxArr[2] === boxArr[5] &&
            boxArr[5] === boxArr[8]) ||
        (boxArr[0] &&
            boxArr[4] &&
            boxArr[8] &&
            boxArr[0] === boxArr[4] &&
            boxArr[4] === boxArr[8]) ||
        (boxArr[2] &&
            boxArr[4] &&
            boxArr[6] &&
            boxArr[2] === boxArr[4] &&
            boxArr[4] === boxArr[6])
    ) {
        winGame = 1;
        document.querySelector('.player').textContent = `Player ${
            currentPlayer + 1
        } won 🎉 `;
        const el = document.getElementsByClassName('box');
        for (let i = 0; i < el.length; i++) {
            el[i].style.backgroundColor = 'rgb(230, 219, 6)';
        }
    } else if (boxArr.every((item) => item !== 0)) {
        winGame = 1;
        document.querySelector('.player').textContent = 'Game Draw 💥';
        const el = document.getElementsByClassName('box');
        for (let i = 0; i < el.length; i++) {
            el[i].style.backgroundColor = 'gray';
        }
    }
    return winGame;
};
export default winner;
