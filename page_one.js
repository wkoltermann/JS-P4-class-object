class Player 
{
    constructor (name,symbol){
        this.name= name;
        this.symbol= symbol;
        this.points= 0;
        this.gamesPlayed= 0;
    }

    addPoints(pointAmount){
        this.points+=pointAmount;
    }

    addGamesPlayed() {
        this.gamesPlayed += 1;
    }
}

const pOne= new Player("Henk","x");
const pTwo= new Player("Bert","o");

console.log(pOne);
console.log(pOne.name);
console.log(pTwo.symbol);

pOne.addPoints(30);
console.log(pOne.points);
console.log(pOne.gamesPlayed)
