/* esline-env browser */
let coinFlip;
let choice = parseInt(prompt('Enter the number of times to flip'));
for (let i = 0; i < choice; i++) {
  coinFlip = Math.round(Math.random());
  if (coinFlip === 0) {
      window.console.log("Heads");
  } else {
      window.console.log("Tails")
  }
}