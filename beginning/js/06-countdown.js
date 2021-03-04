/* esline-env browser */


let number = parseInt(prompt('Enter a number to count down'));
// let i = number;
// do {
//     console.log(i); 
//     i--;
// } while (i >= 0);

for (let i = number; i > 0; i--) {
  if (i === 0) {
    console.log(i); 
    break;
  }
}