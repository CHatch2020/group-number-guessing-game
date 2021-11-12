let guessArray = []; // end guessArray

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
  evaluateGuesses(targetNum);
  res.send(evaluatedArray);
}); // end get /guesses

app.post('/guesses', (req, res) => {
  console.log('in post /guesses');
  guessArray.push(req.body);
  console.log(guessArray);
  res.sendStatus(201);
}); // end post /guesses



app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
}); // end listen on PORT

function randomNum(min,max) {
  return randomNumberGenerator(min,max)
}; // end randomNum

let evaluatedArray = [];
let targetNum = randomNum(1, 25);

function evaluateGuesses(targetNum){
  console.log(targetNum);
  // create a new array to store the data plus the strings
  evaluatedArray = [];
  for (let round of guessArray){
    let evaluatedRound = {
      playerOne: `${round.PlayerOne}`,
      playerTwo: `${round.PlayerTwo}`,
      playerThree: `${round.PlayerThree}`,
      playerFour: `${round.PlayerFour}`,
    };
    //Check Player One
    if (Number(round.playerOne) === targetNum){
      evaluatedRound.playerOne = `${round.playerOne}: Winner!`;
    } else if (Number(round.playerOne) > targetNum){
      evaluatedRound.playerOne = `${round.playerOne}: Too High`;
    } else if (Number(round.playerOne) < targetNum){
      evaluatedRound.playerOne = `${round.playerOne}: Too Low`;
    };
    //Check Player Two
    if (Number(round.playerTwo) === targetNum){
      evaluatedRound.playerTwo = `${round.playerTwo}: Winner!`;
    } else if (Number(round.playerTwo) > targetNum){
      evaluatedRound.playerTwo = `${round.playerTwo}: Too High`;
    } else if (Number(round.playerTwo) < targetNum){
      evaluatedRound.playerTwo = `${round.playerTwo}: Too Low`;
    };
    //Check Player Three
    if (Number(round.playerThree) === targetNum){
      evaluatedRound.playerThree = `${round.playerThree}: Winner!`;
    } else if (Number(round.playerThree) > targetNum){
      evaluatedRound.playerThree = `${round.playerThree}: Too High`;
    } else if (Number(round.playerThree) < targetNum){
      evaluatedRound.playerThree = `${round.playerThree}: Too Low`;
    };
    //Check Player Four
    if (Number(round.playerFour) === targetNum){
      evaluatedRound.playerFour = `${round.playerFour}: Winner!`;
    } else if (Number(round.playerFour) > targetNum){
      evaluatedRound.playerFour = `${round.playerFour}: Too High`;
    } else if (Number(round.playerFour) < targetNum){
      evaluatedRound.playerFour = `${round.playerFour}: Too Low`;
    };
    // push the new data to the evaluatedRound
    evaluatedArray.push(evaluatedRound);
  }
  console.log(guessArray);
  console.log(evaluatedArray);
};
