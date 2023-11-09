let randomNumber = Math.random();
let result;
let guess = 'heads' || 'tails';

if (randomNumber < 0.5) {
  result = 'headas';
} else {
  result = 'tails';
}

if (guess === result) {
  console.log('you win!');  
} else {
  console.log('you lose!');
}