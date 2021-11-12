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
  checkValues();
  res.send(guessArray);
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

let target = randomNum(1, 25);


function checkValues() {
console.log(target);


  for (let round of guessArray) {
    if (Number(round.playerOne) === target) {
      round.playerOne = `${round.playerOne} : Yay, You WIN!`
    } else if(Number(round.playerOne) > target) {
      round.playerOne = `${round.playerOne} : Ope, too high!`
    } else {
      round.playerOne = `${round.playerOne} : Darn, too low!`
    };

    if (Number(round.playerTwo) === target) {
      round.playerTwo = `${round.playerTwo} : Yay, You WIN!`
    } else if(Number(round.playerTwo) > target) {
      round.playerTwo = `${round.playerTwo} : Ope, too high!`
    } else {
      round.playerTwo = `${round.playerTwo} : Darn, too low!`
    };

    if (Number(round.playerThree) === target) {
      round.playerThree = `${round.playerThree} : Yay, You WIN!`
    } else if(Number(round.playerThree) > target) {
      round.playerThree = `${round.playerThree} : Ope, too high!`
    } else {
      round.playerThree = `${round.playerThree} : Darn, too low!`
    };

    if (Number(round.playerFour) === target) {
      round.playerFour = `${round.playerFour} : Yay, You WIN!`
    } else if(Number(round.playerFour) > target) {
      round.playerFour = `${round.playerFour} : Ope, too high!`
    } else {
      round.playerFour = `${round.playerFour} : Darn, too low!`
    };
  }; // end loop
}; // end checkValues
