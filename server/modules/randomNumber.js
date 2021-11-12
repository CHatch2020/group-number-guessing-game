function randomNumber() {
  return Math.floor(Math.random() * (1 + 25 - 1) + 1);
};

module.exports = randomNumber;