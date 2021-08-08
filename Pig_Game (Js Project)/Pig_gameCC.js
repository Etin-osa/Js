/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


More info on message queue 1:44:23,
*/

var scores, currentScores, activePlayer, gamePlaying;

inIt();

//Coding challenge when the dice rolls a double six (1)
//Taking the figures of dice in (the last variable called inside the btn-roll addEventListener)
var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function () {
    //Things to do in this function
    if (gamePlaying) {
        // 1) create
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2) display the result of dice
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'Imgs/dice-' + dice + '.png';


        var dice1 = Math.floor(Math.random() * 6) + 1;

        // 2) display the result of dice
        var diceDom = document.querySelector('.dice-1');
        diceDom.style.display = 'block';
        diceDom.src = 'Imgs/dice-' + dice1 + '.png';

        //for second dice

        //Condition on rolling the dice
        if (dice === 6 && lastDice === 6) { //CC (1)
            //score equals 0
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

            //new player
            nextPlayer();
        } else if (dice !== 1 && dice1 !== 1) {
            //add current score and dice
            currentScores += dice + dice1;
            //print the round score
            document.querySelector('#current-' + activePlayer).textContent = currentScores;
        } else {
            //Condition for activeplayer
            nextPlayer();
        }

        //taking the last dice number and storing it in the place we created the variable (line. 18)
        lastDice = dice; //CC (1)
    }
});


document.querySelector('.btn-hold').addEventListener('click', function () {
    //Things to do in this function
    if (gamePlaying) {
        // 1) Add the current score to the global score
        scores[activePlayer] += currentScores;

        // 2) Make it show on the screen
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // For Coding Challenge CC (2)
        var input = document.querySelector('.final-score').value;
        var winningScore;

        //Undefined, 0, null, or (empty string) --> '' are coerced to false
        //if the input is true(if there is a value) the winningScore should equal the input variable in this Js(because remember it actually equals the value of the input(element) in html)
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
        //If it Get's pass 100
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});


document.querySelector('.btn-new').addEventListener('click', inIt)

function inIt() {
    scores = [0, 0];
    currentScores = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

    gamePlaying = true;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}







function nextPlayer() {
    //Condition for activeplayer
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    //Putting the current score to start from 0 
    currentScores = 0;

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    //Hide the image
    // document.querySelector('.dice').style.display = 'none';
    // document.querySelector('.dice-1').style.display = 'none';

    //Change the active class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //Change of active class
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
}





