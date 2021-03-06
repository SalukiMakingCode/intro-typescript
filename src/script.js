(function () {
    document.getElementById('guess-form').addEventListener("submit", compareUserGuess);
    function compareUserGuess(event) {
        event.preventDefault();
        var secretNumber = generateSecretNumber();
        // @ts-ignore
        var userNumber = document.getElementById('guess').value;
        if (secretNumber == userNumber) {
            alert("Awesome! You number " + userNumber + " was correct. You can be named many things, hungry not being one of them.");
        }
        else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }
    }
    function generateSecretNumber() {
        return getRandomArbitrary(1, 22);
    }
    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
})();
