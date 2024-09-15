let isNumberGuessed = false;
        let attempts = 0;
        let guessNumber = 0;
        let randomNum = 0;

        const message =  document.getElementById('resultMessage');
        const guessInput = document.getElementById('userGuess');
        const guessButton = document.getElementById('guessButton');
        const generateButton = document.getElementById('generateButton')

        generateButton.addEventListener('click', () => {
            randomNum = Math.floor(Math.random() * 100) + 1;
            guessButton.disabled = false;
            guessNumber = 0;
            attempts = 0;
    
            document.getElementById('randomNumber').textContent = `Random Number Generated`;
            document.getElementById('guessSection').style.display = 'block';
            message.textContent = '';
            guessInput.value = '';
        }); 

        guessButton.addEventListener('click', () => {
            guessNumber = parseInt(guessInput.value);

            if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
                message.textContent = 'Please enter a valid number between 1 and 100.';
                return;
            }

            attempts++;


            if(randomNum === guessNumber){
                isNumberGuessed = true;
                guessButton.disabled = true;
                message.textContent = `Congratulations! You guessed the number in ${attempts} attempt(s)`;
                return;
            } else if(randomNum > guessNumber){
                message.textContent = `Attempt: ${attempts} - Try Higher`;
            } else {
                message.textContent = `Attempt: ${attempts} - Try Lower`;
            } 
        

            if(attempts === 10){
                message.textContent = `You have reached the maximum number of attempts. The number was ${randomNum}`;
            }
        });