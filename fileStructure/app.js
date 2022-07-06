console.log("My app.js file is attached.")

class Tamagotchi {
    constructor(name){
        this.name = name;
        this.age = 0
        this.energy = 3;
        this.hunger = 3;
        this.excitement = 3;
        this.intellect = 0;
        this.strength = 0;
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
    plusIntellect (someNum) {
        this.intellect += someNum;
    }
    minusIntellect (someNum) {
        this.intellect -= someNum;
    }
    plusStrength (someNum) {
        this.strength += someNum;
    }
    minusStrength (someNum) {
        this.strength -= someNum;
    }
}

const playWithPet = (pet) => {
    console.log("we're playing")
    pet.plusExcitement(1)
    pet.plusHunger(1)
    pet.minusEnergy(1)
}

const readToPet = (pet) => {
    pet.plusIntellect(1)
    pet.minusExcitement(1)
}

const feedPet = (pet) => {
    pet.minusHunger(1)
    pet.plusEnergy(0.5)
}

const exercisePet = (pet) => {
    pet.plusStrength(1)
    pet.plusHunger(2)
    pet.minusEnergy(2)
}

//death/loss conditions:
//   energy goes to zero
//   excitement goes to zero
//   hunger goes to 10

//interactions list: 

// toggle lights (lights off let tamagotchi sleep, increases energy)
// feed pet (decreases hunger, marginally increases energy)
// play w/ pet (increases excitement, decreases energy, increases hunger)

// optional/potential interactions:
// read to pet (increases intellect, decreases excitement)
// exercise (increases strength, increases hunger, decreases energy)

//static things:
//hunger increases over time
//excitement decreases over time
//energy decreases over time (toggling lights off reverses effects)
// age increases over time (at a slower rate than every other status)
//    tamagotchi evolves at age 5 and 10

//general notes for conditions:
// sleep state/animation when lights off
// restrict ability to feed/play with/read to pet when sleep state active
