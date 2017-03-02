import Player from './modules/Player';

let activePlayer, gamePlaying;
let playerArray = [];

// document.querySelector('.btn-roll').addEventListener('click', function () {
//     if (gamePlaying) {
//         // 1. Rolls dice - get random number
//         var dice = Math.floor(Math.random() * 6) + 1;
//
//         // 2. display the result
//         var diceDOM = document.querySelector('.dice');
//         diceDOM.style.display = 'block';
//         diceDOM.src = 'dice-' + dice + '.png';
//
//         // 3. Update the roundScore IF the rolled number was NOT a 1
//         if (dice !== 1) {
//             // Add score to roundScore
//             document.querySelector('#current-' + activePlayer).textContent = '';
//         } else {
//             // next player
//             nextPlayer();
//         }
//     }
// });

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // document.getElementById('current-0').textContent = '0';
    // document.getElementById('current-1').textContent = '0';
    //
    // document.querySelector('.player-0-panel').classList.toggle('active');
    // document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.dice').style.display = 'none';
}

const createPlayer = (number, s) => new Player(number, s);

const init = function () {
    playerArray.push(createPlayer(1, 'Quirin'));
    playerArray.push(createPlayer(2, 'Oka'));

    activePlayer = 0;
    gamePlaying = true;

    const currentPlayer = playerArray[activePlayer];

    currentPlayer.greet();
    // document.write(`${currentPlayer.diceCount} currentPlayer.diceCount` + '<br>');


    // document.getElementById('nutrition-0').textContent += currentPlayer.food;

    currentPlayer.food = currentPlayer.diceCount - currentPlayer.food;
    // document.write(currentPlayer.food + '<br>');
    //
    // document.write(currentPlayer.achievementShower());
    // currentPlayer.buildMonument(0);
    // document.write(currentPlayer.monumentLogger(0));

    console.log(playerArray);
};

init();