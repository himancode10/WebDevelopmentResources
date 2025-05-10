document.addEventListener('DOMContentLoaded', () => {
    const openPromptBtn = document.getElementById('openPromptBtn');
    const promptBox = document.getElementById('promptBox');
    const closePromptBtn = document.getElementById('closePromptBtn');
    const submitBtn = document.getElementById('submitBtn');
    const userNameInput = document.getElementById('userName');
  
    // Open the prompt box
    openPromptBtn.addEventListener('click', () => {
      promptBox.style.display = 'block';
      userNameInput.focus();
    });
  
    // Close the prompt box
    closePromptBtn.addEventListener('click', () => {
      promptBox.style.display = 'none';
    });
  
    // Submit the input
    submitBtn.addEventListener('click', () => {
      const userName = userNameInput.value.trim();
      if (userName) {
        alert(`Hello, ${userName}!`);
        promptBox.style.display = 'none';
      } else {
        alert('Please enter your name.');
      }
    });
  
    // Close prompt box if clicked outside
    window.addEventListener('click', (event) => {
      if (event.target === promptBox) {
        promptBox.style.display = 'none';
      }
    });
  });
  