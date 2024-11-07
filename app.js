/*-------------------------------- Constants --------------------------------*/
let board = ['X', '', '', '', 'O', '', '', '', '']
let turn
let winner
let tie
/*---------------------------- Variables (state) ----------------------------*/
const squareEls = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const messageEl = document.querySelector('#message')
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  board = ['', '', '', '', '', '', '', '', '']
  turn = 'X'
  winner = false
  tie = false
  // render()
}
const render = () => {
  updateBoard()
  updateMessage()
}

const updateBoard = () => {
  board.forEach((square, index) => {
    document.querySelector(`#square${index}`).textContent = square
  })
}

const updateMessage = () => {
  if (winner === false && tie === false) {
    messageEl.textContent = `The turn is for player ${turn}`
  } else if (winner === false && tie === true) {
    messageEl.textContent = `The game ended tie!!!`
  } else {
    messageEl.textContent = `Congrats ${turn} you won!!!`
  }
}
/*----------------------------- Event Listeners -----------------------------*/
