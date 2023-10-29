/**
 * Toggle Scene
 * @param {HTMLElement} scene
 */
function toggleScene(scene) {
  const display = window.getComputedStyle(scene, null).display;
  scene.style.display = (display === 'none' || display === '') ? 'block' : 'none';
}
