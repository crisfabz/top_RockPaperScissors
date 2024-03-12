const hand = ['ROCK', 'PAPER', 'SCISSOR']

//Function for the AI to get random number between 1-3
function getIndex() {
  return Math.floor(Math.random() * 3)
}

//Let computer have a hand
let computerHand = hand[getIndex()].toLowerCase()

//player hand
function player() {
  let playerHand = prompt('Please choose between rock,paper or scissor.')

  return playerHand
}

let playerHand = player().toLowerCase()

//Function to duel player1=computer and player2=human
function duel(player1, player2) {
  if (
    (player1 == 'rock' && player2 == 'scissor') ||
    (player1 == 'paper' && player2 == 'rock') ||
    (player1 == 'scissor' && player2 == 'paper')
  ) {
    return 'Player 1 wins!'
  } else if (player1 == player2) {
    return 'Draw!'
  } else {
    return 'Player 2 wins!'
  }
}
console.log(getIndex())
console.log('player 1:' + computerHand)
console.log('player 2:' + playerHand)
console.log(duel(computerHand, playerHand))
