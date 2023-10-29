/**
 * Text Length
 * @param {string} text
 * @return {number} text length
 */
function length(text) {
  return text.length;
}

/**
 * No space string
 * @param {string} text
 * @return {string} no space string
 */
function noSpaceString(text) {
  return text.replaceAll(' ', '');
}

const initializeGame = () => {
  addClickListener(`continueButton`, () => {
    const input = document.getElementById(`nameInput`);
    if (length(noSpaceString(input.value)) === 0) {
      showModal('名前を入力してください');
    } else {
      toggleScene(title);
      toggleScene(base);
    }
  });
};
