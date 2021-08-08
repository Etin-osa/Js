/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his CURRENT score
- BUT, if the player rolls a 1, all his CURRENT score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his CURRENT score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


More info on message queue 1:44:23,
*/

reset();

var currentScore, activePlayer, cPlayer, gamePlaying;


document.querySelector('.btn-roll').addEventListener('click', function() {

     if (gamePlaying) {
          // display Image
          var random = Math.floor(Math.random() * 6) + 1;
          var diceImg = document.querySelector('.dice');
          diceImg.style.display = 'block';
          diceImg.src = 'Imgs/dice-' + random + '.png';
     
     
          // Adding current score   
          if (random !== 1) {
               currentScore += random;
               document.querySelector('#current-' + activePlayer).innerHTML = currentScore;
          } else {
               next()
          }
     }

})


document.querySelector('.btn-hold').addEventListener('click', function() {
     cPlayer[activePlayer] += currentScore;
     document.querySelector('#score-' + activePlayer).innerHTML = cPlayer[activePlayer];

     var listener = document.querySelector('.final-score').value;
     var check;

     if (listener) {
          check = listener;
     } else {
          check = 30
     }
     
     if (cPlayer[activePlayer] >= check) {
          currentScore = 0;
          document.querySelector('.dice').style.display = 'none';
          document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
          document.querySelector('#name-' + activePlayer).innerHTML = 'Winner';
          document.querySelector('#current-' + activePlayer).innerHTML = currentScore;
          gamePlaying = false;
     } else {
          next();
     }
})

document.querySelector('.btn-new').addEventListener('click', reset)

function next() {
     currentScore = 0;
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     document.querySelector('.dice').style.display = 'none';
     document.querySelector('#current-0').innerHTML = 0;
     document.querySelector('#current-1').innerHTML = 0;
     document.querySelector('#current-' + activePlayer).innerHTML = currentScore;

     if (activePlayer === 1) {
          document.querySelector('.player-0-panel').classList.remove('active');
          document.querySelector('.player-1-panel').classList.add('active');
     } else {
          document.querySelector('.player-1-panel').classList.remove('active');
          document.querySelector('.player-0-panel').classList.add('active');
     }
}

function reset() {
     currentScore = 0;
     activePlayer = 0;
     gamePlaying = true;
     cPlayer = [0, 0];
     document.getElementById('current-0').innerHTML = 0;
     document.getElementById('current-1').innerHTML = 0;
     document.getElementById('score-0').innerHTML = 0;
     document.querySelector('.player-0-panel').classList.remove('winner');
     document.querySelector('.player-1-panel').classList.remove('winner');
     document.querySelector('.player-1-panel').classList.remove('active');
     document.querySelector('.player-0-panel').classList.add('active');
     document.querySelector('#name-0').innerHTML = 'Player 1';
     document.querySelector('#name-1').innerHTML = 'Player 2';
     document.getElementById('score-1').innerHTML = 0;
     document.querySelector('.dice').style.display = 'none';
}
