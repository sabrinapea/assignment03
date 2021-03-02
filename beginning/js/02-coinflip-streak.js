/* esline-env browser */

let coinFlip;
let i = 0;
do {
  coinFlip = Math.round(Math.random());
  if (coinFlip === 0) {
      window.console.log('Heads ' + 'number of times you got heads is:' + i); 
      break;
  }
  i++; 
} while (coinFlip === 1); 
window.console.log('Tails');

