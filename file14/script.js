document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        displayMessage(userInput, 'user');
        document.getElementById('user-input').value = '';
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            displayMessage(botResponse, 'bot');
        }, 1000);
    }
}

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.textContent = message;
    document.getElementById('chat-box').appendChild(messageElement);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function getBotResponse(userInput) {
    const responses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you": "I'm just a bot, but I'm doing great! Thanks for asking.",
        "bye": "Goodbye! Have a great day!"
    };
    return responses[userInput.toLowerCase()] || "I'm sorry, I didn't understand that.";
}
