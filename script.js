document.addEventListener('DOMContentLoaded', (event) => {
  // Function to display the emotion
  function displayEmotion(imgPath, emotionText) {
      const emotionDisplay = document.getElementById('emotion-display');
      
      // emotion item container
      const emotionItem = document.createElement('div');
      emotionItem.classList.add('emotion-item');
      
      // image element
      const imgElement = document.createElement('img');
      imgElement.src = imgPath;
      imgElement.alt = emotionText;

      // text element
      const textElement = document.createElement('span');
      textElement.textContent = emotionText;

      // new elements to the emotion item container
      emotionItem.appendChild(imgElement);
      emotionItem.appendChild(textElement);
      emotionDisplay.appendChild(emotionItem);
  }


  // backspace and clear button container
  document.getElementById('backspace-button').addEventListener('click', function() {
    const displayContainer = document.getElementById('emotion-display');
    if (displayContainer.lastElementChild) {
      displayContainer.removeChild(displayContainer.lastElementChild);
    }
  });

  document.getElementById('clear-button').addEventListener('click', function() {
    const displayContainer = document.getElementById('emotion-display');
    while (displayContainer.children.length > 2) {  
        displayContainer.removeChild(displayContainer.lastChild);
    }
  });


  // attach event listeners to emotion buttons
  const emotionButtons = document.querySelectorAll('.button');
  emotionButtons.forEach(button => {
      button.addEventListener('click', () => {
          const imgPath = button.querySelector('img').src;
          const emotionText = button.querySelector('span').textContent;
          displayEmotion(imgPath, emotionText);
      });
  });
});
