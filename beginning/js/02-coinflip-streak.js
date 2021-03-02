/* esline-env browser */

let coinFlip;
let i = 1;
do {
  coinFlip = Math.round(Math.random());
  if (coinFlip === 0) {
      window.console.log('Heads');     
  }
  i++; 
} while (coinFlip === 0); 
window.console.log('Tails');

