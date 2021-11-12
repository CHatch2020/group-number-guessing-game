$(document).ready(handleReady);

let count = 0;

function handleReady() {
  console.log("jquery is loaded!");
  $('#submitButton').on('click', submitGuesses);
};

function renderGuesses(){
  $.ajax({
    method: 'GET',
    url: '/guesses'
  }).then((res) => {
    console.log('response', res);
    
    $('#playerGuess').empty();

    for (let guess of res) {
      $('#playerGuess').append(`
      <li>Player 1: ${guess.playerOne}</li>
      <li>Player 2: ${guess.playerTwo}</li>
      <li>Player 3: ${guess.playerThree}</li>
      <li>Player 4: ${guess.playerFour}</li>
      <p><button id="delete">Delete</button></p>
      <hr>
      `)
    }
  }).catch((error) => {
    console.log('error', error);
  })
}; // end renderGuesses

function submitGuesses() {
let guessRound = {
  playerOne: $('#player1').val(),
  playerTwo: $('#player2').val(),
  playerThree: $('#player3').val(),
  playerFour: $('#player4').val()
};
$.ajax({
  method: 'POST',
  url: '/guesses',
  data: guessRound
}).then((res) => {
  console.log('It worked');
  renderGuesses();
  clearInputs();
}).catch((error) => {
  console.log('FAILED');
})
countRounds();
}; // end submitGuesses

function clearInputs(){
  $('#player1').val('');
  $('#player2').val('');
  $('#player3').val('');
  $('#player4').val('');
}; // end clearInputs

function countRounds() {
  let guessCounter = count += 1;
  let holdGuessCount = $('#guessCount');
  holdGuessCount.empty();
  holdGuessCount.append(guessCounter);
}; // end countRounds
