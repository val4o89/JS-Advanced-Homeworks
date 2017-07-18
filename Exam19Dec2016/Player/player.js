class Player {
    constructor(nickName){
        if(typeof nickName !== 'string'){
            throw new TypeError('You madafaka!')
        }
        this.nickName = nickName;
        this.scoreList = [];

        return this;
    }

    addScore(score) {
        if(!isNaN(score) && score !== null){
            this.scoreList.push(+score);
            this.sortedScores();
        }

        return this;
    }

    get scoreCount() {
        return this.scoreList.length;
    }

    get highestScore() {
        return this.scoreList[0];
    }

    sortedScores() {
        return this.scoreList.sort(function (a, b) {
            if(a > b){
                return -1;
            } else {
                return 1;
            }
        })
    }

    get topFiveScore() {
        this.sortedScores();
        return this.scoreList.slice(0, 5);
    }

    toString() {
        return `${this.nickName}: [${this.scoreList}]`;
    }
}

let peter = new Player("Peter");
peter.addScore(undefined);
peter.addScore(null);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
peter.addScore(450);
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
console.log();
let maria = new Player("Maria");
    maria.addScore(350)
    maria.addScore(779)
    maria.addScore(180);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);