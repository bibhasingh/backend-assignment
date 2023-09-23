import resetGame from '../handlers/resetGame.js';

const reset = () => {
    document.querySelector('.btn').addEventListener('click', resetGame);
};

export default reset;
