// Get the container element
const container = document.getElementById('number-list');

// Loop through numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    // Create a new div element for each number
    const div = document.createElement('div');
    div.classList.add('number');
    div.textContent = i;
    
    // Check if the number is even or odd and apply the appropriate class
    if (i % 2 === 0) {
        div.classList.add('even');
    } else {
        div.classList.add('odd');
    }
    
    // Add an event listener to highlight the number when clicked
    div.addEventListener('click', () => {
        // Remove highlight from all other divs
        const allDivs = document.querySelectorAll('.number');
        allDivs.forEach((div) => {
            div.classList.remove('highlight');
        });
        
        // Add highlight to the clicked div
        div.classList.add('highlight');
    });

    // Append the new div to the container
    container.appendChild(div);
}
