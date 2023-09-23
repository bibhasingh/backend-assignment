const markInput = (boxNumber, choice, player) => {
    document.querySelector(`.box${boxNumber}`).innerHTML = `<h1>${choice}</h1>`;
    document.querySelector(`.box${boxNumber}`).style.textAlign = 'center';

    document.querySelector('.player').textContent = `Player ${player}`;
};

export default markInput;
