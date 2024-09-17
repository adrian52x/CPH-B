// Greet the user based on the time of day
window.addEventListener('DOMContentLoaded', () => {
    const duckLogo = document.getElementById('logo');
    const duckMessage = document.getElementById('duckMessage');

    duckLogo.addEventListener('mouseover', () => {
        duckLogo.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        let greeting = 'Good ';
        if (currentHour < 12) {
            greeting += 'morning';
        } else if (currentHour < 18) {
            greeting += 'afternoon';
        } else {
            greeting += 'evening';
        }
        duckMessage.textContent = `${greeting}! -- Mr. Duck is here to help you solve your problems.`;
        duckMessage.classList.remove('hidden');
    });
    
    duckLogo.addEventListener('mouseout', () => {
        duckMessage.classList.add('hidden');
        duckLogo.style.boxShadow = 'none';
    });
});

// Function to save the message to the database
function saveMessageToDB(message) {
    fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message }),
        mode: 'no-cors'
    })
    .then(response => {
        if (response) {
            console.log('Message saved to database');
        } else {
            console.error('Failed to save message to database');
        }
    })
    .catch(error => {
        console.error('Error saving message to database:', error);
    });
}

// Function to retrieve messages from the database and update the message list
function retrieveMessagesAndUpdateList() {
    // Retrieve messages from the database
    fetch('http://localhost:3000/messages')
        .then(response => response.json())
        .then(data => {
            
            // Process the retrieved messages
            const messages = data;
            
            updateMessageList(messages);
        })
        .catch(error => {
            console.error('Error retrieving messages from the database:', error);
        });
}

// Function to update the message list in the DOM
function updateMessageList(messages) {
    const messageList = document.getElementById('messageList');
    messageList.innerHTML = '';
    messages.forEach((message) => {
        
        const li = document.createElement('li');
        li.textContent = message.message;
        messageList.appendChild(li);
    });
}

// Event listener for the send button
const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', () => {
    const problemInput = document.getElementById('problemInput');
    const message = problemInput.value;
    saveMessageToDB(message);
    problemInput.value = '';
    retrieveMessagesAndUpdateList();
});


// Call the function to retrieve messages and update the list
// Event listener for the load event
window.addEventListener('load', () => {
    retrieveMessagesAndUpdateList();
});






// // Retrieve messages from LocalStorage
// let messages = JSON.parse(localStorage.getItem('messages')) || [];

// // Function to add a message to the array and update the DOM
// function addMessage(message) {
//     messages.push(message);
//     localStorage.setItem('messages', JSON.stringify(messages));
//     updateMessageList();
// }

// // Function to update the message list in the DOM
// function updateMessageList() {
//     const messageList = document.getElementById('messageList');
//     messageList.innerHTML = '';
//     messages.forEach((message) => {
//     const li = document.createElement('li');
//     li.textContent = message;
//     messageList.appendChild(li);
//     });
// }

// // Event listener for the send button
// const sendButton = document.getElementById('sendButton');
// sendButton.addEventListener('click', () => {
//     const problemInput = document.getElementById('problemInput');
//     const message = problemInput.value;
//     addMessage(message);
//     problemInput.value = '';
// });

// // Event listener for the load event
// window.addEventListener('load', () => {
//     updateMessageList();
// });