document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM Loaded');
      addClickListener(`.close`, hideModal);
      initializeGame();
      toggleScene(title);
    },
);
