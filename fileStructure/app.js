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
// basic game methods
    playWithPet () {
        console.log("we're playing")
        this.excitement += 1;
        this.hunger += 1;
        this.energy -= 1;
        tamaInfoUpdate(this)
    }
    feedPet () {
        this.hunger -= 1;
        this.energy += 0.5;
        tamaInfoUpdate(this)
    }
    exercisePet () {
        this.strength += 1;
        this.hunger += 2;
        this.energy -= 2;
        tamaInfoUpdate(this)
    }
    readToPet () {
        this.intellect += 1;
        this.excitement -= 1;
        tamaInfoUpdate(this)
    }
    
}

//function that updates HTML to reflect object values
tamaInfoUpdate = (pet) => {
    tamaName.innerText = "Name: " + pet.name;
    tamaAge.innerText = "Age: " + pet.name;
    tamaEnergy.innerText = "Energy: " + pet.energy;
    tamaHunger.innerText = "Hunger: " + pet.hunger;
    tamaExcitement.innerText = "Excitement: " + pet.excitement;
    tamaIntellect.innerText = "Intellect: " + pet.intellect;
    tamaStrength.innerText = "Strength: " + pet.strength;
}

//above functions stored in array
// const tamaFuncArr = [playWithPet(), feedPet(), exercisePet(), readToPet()];

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




// need a function that creates tamagotchi object when player sets a name

//need a function that statically affects tamagotchi stats
//  maybe that function has a condional that checks if lights are on or off??

//instantiating tamagotchi object upon loading
let newTama = new Tamagotchi ('');
tamaInfoUpdate(newTama)

//testing
playButton.addEventListener('click', () =>{newTama.playWithPet()});
feedButton.addEventListener('click', () =>{newTama.feedPet()});
exerciseButton.addEventListener('click', () =>{newTama.exercisePet()});
readButton.addEventListener('click', () =>{newTama.readToPet()});
