$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
  $('#submitButton').on('click', submitGuesses);
};

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
  
}).catch((error) => {
  console.log('FAILED');
})
}; // end submitGuesses

function clearInputs(){
  $('#player1').val('');
  $('#player2').val('');
  $('#player3').val('');
  $('#player4').val('');
}; // end clearInputs