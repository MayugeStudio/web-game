/**
 * Add ClickListener
 * @param {string} elementId
 * @param {() => void} callback
 */
function addClickListener(elementId, callback) {
  const element = document.getElementById(elementId);
  if (element) {
    element.addEventListener('click', callback);
  }
}
