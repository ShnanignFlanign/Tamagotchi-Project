console.log("My app.js file is attached.")
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

//object class declaration
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
// basic callback game functions with methods
const playWithPet = (pet) => {
    console.log("we're playing")
    pet.plusExcitement(1)
    pet.plusHunger(1)
    pet.minusEnergy(1)
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
const readToPet = (pet) => {
    pet.plusIntellect(1)
    pet.minusExcitement(1)
}
//above functions stored in array
const tamaToPlayerInt = [playWithPet, feedPet, exercisePet, readToPet]

// need to do toggle light function

//buttons stored in js vars
const buttonContainer = document.querySelector('.buttonContainer')

const playButton = document.querySelector('#play');
const feedButton = document.querySelector('#feed');
const exerciseButton = document.querySelector('#exercise');
const readButton = document.querySelector('#read');
const lightsButton = document.querySelector('#lights');

//tamagotchi stats stored in js vars
const statList = document.querySelector('.tamagotchiStats')

const tamaName = document.querySelector('#name')
const tamaAge = document.querySelector('#age')
const tamaEnergy = document.querySelector('#energy')
const tamaHunger = document.querySelector('#hunger')
const tamaExcitement = document.querySelector('#excitement')
const tamaIntellect = document.querySelector('#intellect')
const tamaStrength = document.querySelector('#strength')

//function that updates HTML to reflect object values
tamaInfoUpdate = (pet) => {
    tamaName = "Name: " + pet.name;
    tamaAge = "Age: " + pet.name;
    tamaEnergy = "Energy: " + pet.energy;
    tamaHunger = "Hunger: " + pet.hunger;
    tamaExcitement = "Excitement: " + pet.excitement;
    tamaIntellect = "Intellect: " + pet.intellect;
    tamaStrength = "Strength: " + pet.strength;
}

// need a function that creates tamagotchi object when player sets a name

//need a function that statically affects tamagotchi stats
//  maybe that function has a condional that checks if lights are on or off??