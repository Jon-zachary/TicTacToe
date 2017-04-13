class Game {
  constructor(moveCount,player1Name,player2Name,gameState,won){
    this.moveCount = moveCount;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.gameState = gameState;
    this.won;
  }

  init(){
    this.player1Name = prompt("Please enter your name player 1:\n");
    this.player2Name = prompt("Please enter your name player 2:\n");
    this.moveCount = 0;
    this.gameState = [];
    this.won = false;
    let name1 = document.querySelector('#name1');
    let name2 = document.querySelector('#name2');
    name1.innerHTML = this.player1Name+' :X';
    name1.style.color = '#F58A4B';
    name1.style.textShadow='2px 2px 2px grey';
    name2.innerHTML = this.player2Name+' :O';
    name2.style.color = 'black';

  }
  whoseTurn(){
      if(this.moveCount % 2 === 1){
        name1.style.color = '#F58A4B';
        name1.style.textShadow = '2px 2px 2px grey'
        name2.style.color='black';
          } else {
        name2.style.color = '#F58A4B';
        name2.style.textShadow = '2px 2px 2px grey'
        name1.style.color='black'
          }
        }

  move(){
    let targ = event.target;
    let boxnum = targ.id;
    if(this.gameState[boxnum] === undefined){
    if(this.moveCount % 2 === 0){
      targ.innerHTML = 'X'
      targ.style.color='red'
      this.gameState[boxnum] = 1;
    }else
      {
      targ.innerHTML = 'O';
      this.gameState[boxnum] = 0;
      }
    }
  else{
    alert('Stop your filthy cheating!!!')
    this.moveCount -= 1;
  }
    this.whoseTurn();
    this.moveCount += 1;
    this.isWon();
    this.announceResult();
  }
  isWon(){
    let win1 = this.gameState[1]+this.gameState[2]+this.gameState[3];
    let win2 = this.gameState[4]+this.gameState[5]+this.gameState[6];
    let win3 = this.gameState[7]+this.gameState[8]+this.gameState[9];
    let win4 = this.gameState[1]+this.gameState[4]+this.gameState[7];
    let win5 = this.gameState[2]+this.gameState[5]+this.gameState[8];
    let win6 = this.gameState[3]+this.gameState[6]+this.gameState[9];
    let win7 = this.gameState[1]+this.gameState[5]+this.gameState[9];
    let win8 = this.gameState[3]+this.gameState[5]+this.gameState[7];
    if(win1 === 3 || win1===0){this.won=true;}
    if(win2 === 3 || win2===0){this.won=true;}
    if(win3 === 3 || win3===0){this.won=true;}
    if(win4 === 3 || win4===0){this.won=true;}
    if(win5 === 3 || win5===0){this.won=true;}
    if(win6 === 3 || win6===0){this.won=true;}
    if(win7 === 3 || win7===0){this.won=true;}
    if(win8 === 3 || win8===0){this.won=true;}
    }

    announceResult(){
      if((this.moveCount % 2 === 0) && (this.won===true)){
        alert(this.player2Name + ' has won!!!');
        }
      else if((this.moveCount % 2 !== 0 ) && (this.won===true)){
        alert(this.player1Name+ ' has won!!!');
        } else if(this.moveCount===9 && this.won===false){
          alert('The game is a tie!!!');
        }
      }

    }


game = new Game();
game.init();

let gameMove = function(){
  game.move()
}


let boxes = document.querySelectorAll('.box');
for(box of boxes){
  box.addEventListener('click', gameMove);
}

