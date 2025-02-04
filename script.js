const sendButton = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");
const themeToggleButton = document.getElementById("theme-toggle");
const bodyElement = document.body;

// Function to scroll to the bottom of the chat
function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to display a message in the chat
function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    scrollToBottom();
}

// Function to simulate typing animation for the bot
function typingIndicator() {
    const typingElement = document.createElement("div");
    typingElement.classList.add("bot-message", "typing-indicator");
    typingElement.textContent = "Bot is typing...";
    chatBox.appendChild(typingElement);
    scrollToBottom();

    // Remove typing indicator after 1.5 seconds
    setTimeout(() => {
        typingElement.remove();
    }, 1500);
}

// Function to handle user input and bot response
function handleUserInput() {
    const message = userInput.value.trim();
    if (message) {
        displayMessage(message, "user");
        userInput.value = "";
        typingIndicator();

        setTimeout(() => {
            let botResponse = getBotResponse(message);
            displayMessage(botResponse, "bot");
        }, 2000); // Simulate bot's thinking time
    }
}

// Simple bot responses
function getBotResponse(userMessage) {
    const responses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you?": "I'm just a bot, but I'm doing well! Thanks for asking.",
        "bye": "Goodbye! It was nice talking to you. :)",
        "name": "I'm a simple AI chatbot. I don't have a name, but you can call me Chatbot!",
        "default": "Sorry, I didn't understand that. Can you ask something else?"
    };

    // Return response based on user message
    return responses[userMessage.toLowerCase()] || responses["default"];
}

// Event listener for the send button
sendButton.addEventListener("click", handleUserInput);

// Event listener for Enter key press
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleUserInput();
    }
});

// Theme Toggle Button click event
themeToggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode");
    bodyElement.classList.toggle("light-mode");
    // Change theme button icon based on the mode
    if (bodyElement.classList.contains("dark-mode")) {
        themeToggleButton.textContent = "🌕"; // Moon icon for dark mode
    } else {
        themeToggleButton.textContent = "🌙"; // Sun icon for light mode
    }
    const sendButton = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");
const themeToggleButton = document.getElementById("theme-toggle");
const bodyElement = document.body;

// Function to scroll to the bottom of the chat
function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to get the current time in a readable format
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 12-hour format
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
}

// Function to display a message with a timestamp
function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
    
    // Create a container for the message
    const messageWrapper = document.createElement("div");
    messageWrapper.classList.add("message-wrapper");

    // Add message text
    const messageText = document.createElement("span");
    messageText.textContent = message;
    
    // Append the message text to the wrapper
    messageWrapper.appendChild(messageText);

    // Add timestamp below the message
    const timestamp = document.createElement("span");
    timestamp.classList.add("timestamp");
    timestamp.textContent = `Sent at ${getCurrentTime()}`;

    // Append message and timestamp to the message element
    messageElement.appendChild(messageWrapper);
    messageElement.appendChild(timestamp);  // Place timestamp below the message
    chatBox.appendChild(messageElement);
    scrollToBottom();
}

// Function to simulate typing animation for the bot
function typingIndicator() {
    const typingElement = document.createElement("div");
    typingElement.classList.add("bot-message", "typing-indicator");
    typingElement.textContent = "Bot is typing...";
    chatBox.appendChild(typingElement);
    scrollToBottom();

    // Remove typing indicator after 1.5 seconds
    setTimeout(() => {
        typingElement.remove();
    }, 1500);
}

// Function to handle user input and bot response
function handleUserInput() {
    const message = userInput.value.trim();
    if (message) {
        displayMessage(message, "user");
        userInput.value = "";
        typingIndicator();

        setTimeout(() => {
            let botResponse = getBotResponse(message);
            displayMessage(botResponse, "bot");
        }, 2000); // Simulate bot's thinking time
    }
}

// Simple bot responses
function getBotResponse(userMessage) {
    const responses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you?": "I'm just a bot, but I'm doing well! Thanks for asking.",
        "bye": "Goodbye! It was nice talking to you. :)",
        "name": "I'm a simple AI chatbot. I don't have a name, but you can call me Chatbot!",
        "default": "Sorry, I didn't understand that. Can you ask something else?"
    };

    // Return response based on user message
    return responses[userMessage.toLowerCase()] || responses["default"];
}

// Event listener for the send button
sendButton.addEventListener("click", handleUserInput);

// Event listener for Enter key press
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleUserInput();
    }
});

// Theme Toggle Button click event
themeToggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark-mode");
    bodyElement.classList.toggle("light-mode");
    // Change theme button icon based on the mode
    if (bodyElement.classList.contains("dark-mode")) {
        themeToggleButton.textContent = "🌕"; // Moon icon for dark mode
    } else {
        themeToggleButton.textContent = "🌙"; // Sun icon for light mode
    }
});

// Set default theme to light mode
document.body.classList.add("light-mode");

});

// Set default theme to light mode
document.body.classList.add("light-mode");
