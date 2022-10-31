const generatedNumber = Math.floor(Math.random() * 10) + 1;
const messageText = document.getElementById("prompt");

    console.log('Generated Number:', generatedNumber);

   


const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    guessedNumber = parseInt(enterGuess.value)

    console.log('Guessed Number:', guessedNumber);


    if (generatedNumber === guessedNumber) {
        messageText.innerText = "WINNER!";
    }else if (generatedNumber >= guessedNumber) {
        messageText.innerText = "Guess Higher!";;
    }else if (generatedNumber <= guessedNumber) {
        messageText.innerText = "Guess Lower!";;
    }
      
}) 

const buttonReload = document.getElementById("reload");
buttonReload.addEventListener('click', function(refreshPage) {
    location.reload();
})

