let guessArray = [
  {playerOne: 'GuessOne'},
  {playerTwo: 'GuessTwo'},
  {playerThree: 'GuessThree'},
  {playerFour: 'GuessFour'}
]; // end guessArray

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

let randomNumberGenerator = require('./modules/randomNumber.js');

// GET & POST Routes go here
app.get('/guesses', (req, res) => {
  console.log('in get /guesses');
  res.send(guessArray);
}); // end get /randomNumber

app.post('/guesses', (req, res) => {
  console.log('in post /guesses');
  console.log('req.body', req.body);
  guessArray.push(req.body);
  res.sendStatus(201);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
