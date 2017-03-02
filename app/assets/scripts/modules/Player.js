import $ from 'jquery';
import ThrowDice from './ThrowDice';

class Player {
    constructor(number, name) {
        this.playerNumber = number;
        this.playerName = name;
        this.diceCount = 3;
        this.cities = [];
        this.monuments = [{
            name: 'Great Wall',
            stones: 0,
            finished: false
        },{
            name: 'Pyramid',
            stones: 0,
            finished: false
        }];
        this.food = 3;
        this.goods = [0, 0, 0, 0, 0];
        this.minusPoints = 0;
        this.achievements = [{
            name: 'Führungskraft',
            researched: false
        }, {
            name: 'Schiffsbau',
            researched: false
        }];

        //dom selector
        this.playerContainerName = `.player-${this.playerNumber}`;
        this.currentPlayerDiv = $('.currentPlayer');
        this.rollBtn = $('.btn__roll');
        this.dices = $(`${this.playerContainerName} .dice`);

        //basic functions to build UI
        this.greet();

        //handle events e.g. button presses
        this.events();

        this.throwDice = new ThrowDice();
    }

    greet() {
        this.currentPlayerDiv.text(`Current player name is ${this.playerName} and I am player #${this.playerNumber}`);
    }

    events() {
        this.rollBtn.click(this.rollDice.bind(this));

        let self = this;
        this.dices.each(function() {
            $(this).click(self.toggleDice.bind(this));
        });
    }

    toggleDice() {
        $(this).toggleClass('dice--disabled');
    }

    rollDice() {
        console.log(this.diceCount);
        this.throwDice.setDicesVisible(this.diceCount);
        let self = this;
        setTimeout(function () {
            self.diceCount = 4;
            self.throwDice.setDicesVisible(self.diceCount);
        }, 2000);

    }

    buildMonument(idx) {
        console.log(`Monument #${idx} is finished: ${this.monuments[idx].finished}`);
        this.monuments[idx].finished = true;
    }
}

Player.prototype.monumentLogger = (idx) => this.monuments[idx].name + this.monuments[idx].finished;
Player.prototype.achievementShower = () => this.achievements[0].researched;

export default Player;