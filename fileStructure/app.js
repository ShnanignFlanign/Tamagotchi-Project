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

//death/loss conditions:
//   energy goes to zero
//   excitement goes to zero
//   hunger goes to 10

//interactions list: 
// toggle lights (lights off let tamagotchi sleep, increases energy)
// feed pet (decreases hunger)
// play w/ pet (increases excitement)

//static things:
//hunger increases over time
//excitement decreases over time
//energy decreases over time (toggling lights off reverses effects)
// age increases over time (at a slower rate than every other status)

//general notes for conditions:
// sleep state/animation when lights off
// restrict ability to feed/play with pet when sleep state active
