// Rješanje od zadataka skupine 6
/* 
let randomNumber = Math.random();
let result;
let guess = 'heads';

if (randomNumber < 0.5) {
  result = 'heads';
} else {
  result = 'tails';
}
*/

/*
if (guess === result) {
  console.log('you win!');  
} else {
  console.log('you lose!');
}
ili isto rješenje daje:
guess === result ? 'you win' : 'you lose';
*/

// Rješenje zadataka od skupine 8:


const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0
};


function playGame(guess) {
  const randomNumber = Math.random();
  const result = randomNumber < 0.5 ? 'heads' : 'tails';
  
  console.log(guess === result ? 'you win' : 'you lose');

  if (guess === result) {
    score.wins++;
  } else {
    score.losses++;
  }

  console.log(score);

  // Spremamo score u  localStorage
  localStorage.setItem('score', JSON.stringify(score));

}


  

