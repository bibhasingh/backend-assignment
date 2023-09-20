/**
 * Adds a click event listener to the button specified in the `dom` module.
 * When the button is clicked, the `sumHandler` function is invoked to perform
 * the sum calculation and update the display accordingly.
 *
 * @function
 * @example
 * sumListener(); // Binds the sumHandler function to the button's click event
 */

// import dom from '../dom.js';
import proInput from '../handlers/proInput.js';

const userInput = () => {
    for (let i = 0; i < 9; i++) {
        document.querySelector(`.box${i}`).addEventListener('click', proInput);
    }
};

export default userInput;
