(function() {
    let guessForm=document.getElementById('guess-form');
    guessForm?.addEventListener("submit", compareUserGuess);

    function compareUserGuess (event : Event) {
        event.preventDefault();

        const secretNumber : number = generateSecretNumber();

        // @ts-ignore
        const userNumber: HTMLInputElement = document.getElementById('guess').value as HTMLInputElement;

        if (Number(userNumber) === secretNumber) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        } else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }

    function generateSecretNumber() {
        return getRandomArbitrary(1, 22);
    }

    function getRandomArbitrary(min : number, max : number) {
        return Math.round(Math.random() * (max - min) + min);
    }
})();