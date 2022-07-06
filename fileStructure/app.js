console.log("My app.js file is attached.")

class Tamagotchi {
    constructor(name){
        this.name = name;
        this.age = 0
        this.energy = 3;
        this.hunger = 3;
        this.excitement = 3;
    }
    plusAge (someNum) {
        this.age += someNum;
    }
    plusEnergy (someNum) {
        this.energy += someNum;
    }
    minusEnergy (someNum) {
        this.energy -= someNum;
    }
    plusHunger (someNum) {
        this.hunger += someNum;
    }
    minusHunger (someNum) {
        this.hunger -= someNum;
    }
    plusExcitement (someNum) {
        this.excitement += someNum;
    }
    minusExcitement (someNum) {
        this.excitement -= someNum;
    }

}