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

function checkValues() {
  for (let round of guessArray) {
    if (round.playerOne === randomNumberGenerator) {
      round.playerOne = `${round.playerOne} : Yay, You WIN!`
    } else if(round.playerOne > randomNumberGenerator) {
      round.playerOne = `${round.playerOne} : Ope, too high!`
    } else {
      round.playerOne = `${round.playerOne} : Darn, too low!`
    };

    if (round.playerTwo === randomNumberGenerator) {
      round.playerTwo = `${round.playerTwo} : Yay, You WIN!`
    } else if(round.playerTwo > randomNumberGenerator) {
      round.playerTwo = `${round.playerTwo} : Ope, too high!`
    } else {
      round.playerTwo = `${round.playerTwo} : Darn, too low!`
    };

    if (round.playerThree === randomNumberGenerator) {
      round.playerThree = `${round.playerThree} : Yay, You WIN!`
    } else if(round.playerThree > randomNumberGenerator) {
      round.playerThree = `${round.playerThree} : Ope, too high!`
    } else {
      round.playerThree = `${round.playerThree} : Darn, too low!`
    };

    if (round.playerFour === randomNumberGenerator) {
      round.playerFour = `${round.playerFour} : Yay, You WIN!`
    } else if(round.playerFour > randomNumberGenerator) {
      round.playerFour = `${round.playerFour} : Ope, too high!`
    } else {
      round.playerFour = `${round.playerFour} : Darn, too low!`
    };
  }; // end loop
}; // end checkValues
