/**
 * Show the modal.
 * @param {string} text
 */
function showModal(text) {
  modalMessage.textContent = text;
  modal.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
}
