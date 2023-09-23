import handleInput from '../components/handleInput.js';

const resetGame = () => {
    console.log('resetCliked');
    for (let i = 0; i < 9; i++) {
        document.querySelector(`.box${i}`).textContent = '';
    }
    document.querySelector('.player').textContent = 'Player 1';
    const el = document.getElementsByClassName('box');
    for (let i = 0; i < el.length; i++) {
        el[i].style.backgroundColor = 'rgb(11, 137, 159)';
    }
    handleInput('');
};
export default resetGame;
