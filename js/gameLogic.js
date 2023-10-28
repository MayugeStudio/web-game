/**
 * Text Length
 * @param {string} text
 * @return {number} text length
 */
const length = text => text.length;

/**
 * No space string
 * @param {string} text
 * @return {string} no space string
 */
const noSpaceString = text => text.replaceAll(' ', '');

// Variables
let currentScene = 'title';

const initializeGame = () => {
  addClickListener(`continueButton`, () => {
    const input = document.getElementById(`nameInput`);
    if (length(noSpaceString(input.value)) === 0) {
      showModal('名前を入力してください');
    }
  });
};
