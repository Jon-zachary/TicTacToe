// instead of having a bunch of variables in the global scope I create a
// game object here
const game = {
  // inProgress, currentPlayer, & board play the same roles here as
  // they do in the other versions
  inProgress: true,
  currentPlayer: 'X',
  moveCount: 0,
  // we pre-set these to 0-8 so they aren't equal to one another
  board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  // the checkWinner method does what we did in lecture but it also
  // sets the inner html of a paragraph element to display who won
  // the game
  checkWinner: function() {
     console.log(this.moveCount)
    if (((this.board[0] === this.board [1]) && this.board[1] === this.board[2])
      || ((this.board[3] === this.board [4]) && this.board[4] === this.board[5])
      || ((this.board[6] === this.board [7]) && this.board[7] === this.board[8])
      || ((this.board[0] === this.board [3]) && this.board[3] === this.board[6])
      || ((this.board[1] === this.board [4]) && this.board[4] === this.board[7])
      || ((this.board[2] === this.board [5]) && this.board[5] === this.board[8])
      || ((this.board[0] === this.board [4]) && this.board[4] === this.board[8])
      || ((this.board[2] === this.board [4]) && this.board[4] === this.board[6])) {
        document.querySelector('#winner').innerHTML = `${this.currentPlayer} has won!`;
        this.inProgress = false;

      } else if(this.moveCount===9){
         document.querySelector('#winner').innerHTML = `It's a tie`;
        this.inProgress = false;
      }
  },
}
const cells = document.querySelectorAll('.row div');

// here we use a forEach loop instead of a simple for loop.
// note that we can pass the callback an index argument, that
// variable holds the index of the item in the array that the loop
// is currently iterating with
// // can you convert the arrow function back to a regular function?
cells.forEach((cell, index) => {
  cell.addEventListener('click', function playCell() {
    game.moveCount +=1;
    // here we have one if-else
    if (game.inProgress) {
      // the next three lines should look familiar
      cell.innerHTML = game.currentPlayer;
      game.board[index] = game.currentPlayer;
      game.checkWinner();
      
      // here we use the ternary operator to set the currentPlayer value
      // according to what currentPlayer currently is
      // in english this says something like "if game.currentPlayer is
      // X, then set game.currentPlayer to O, but if it's an O, set it
      // to X"
      game.currentPlayer = game.currentPlayer === 'X' ? 'O' : 'X';

      // after a cell is played remove the event listener so that the
      // cell can't be played again.
      cell.removeEventListener('click', playCell);
    } else {
      alert(`Game's over!`);
    }
  });
});
