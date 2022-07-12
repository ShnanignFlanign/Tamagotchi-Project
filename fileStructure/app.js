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
        // tamaInfoUpdate(this);
        // tamaStatChecker(this);
    }
    feedPet () {
        this.hunger -= 1;
        this.energy += 0.5;
        // tamaInfoUpdate(this);
        // tamaStatChecker(this);
    }
    exercisePet () {
        this.strength += 1;
        this.hunger += 2;
        this.energy -= 2;
        // tamaInfoUpdate(this);
        // tamaStatChecker(this);
    }
    readToPet () {
        this.intellect += 1;
        this.excitement -= 1;
        // tamaInfoUpdate(this);
        // tamaStatChecker(this);
    }
    lightsOff () {
        this.energy += 2;
        // tamaInfoUpdate(this);
        // tamaStatChecker(this);
    }
    ageUp () {
        this.age += 1;
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

//checking pet stats
tamaStatChecker = (pet) => {
    if(pet.excitemt <= 0 || pet.hunger >= 10 || pet.energy <=0){
        theBody.remove(theMain)
        alert("Your pet died! Refresh the page to try again.")
    }
}

//changes styling on page
lightChecker = () => {
    if(lightsButton.dataset.toggle === 'on'){
        lightsButton.dataset.toggle = 'off';
        theBody.dataset.style = 'dark';
        console.log(lightsButton.dataset.toggle)
        console.log(theBody.dataset.style)
    }
    else if(lightsButton.dataset.toggle ==='off'){
        lightsButton.dataset.toggle = 'on';
        theBody.dataset.style = 'light';
        console.log(lightsButton.dataset.toggle)
        console.log(theBody.dataset.style)
    }
}
//chooses correct function on player's click
funcFinder = (e) => {
    if(e.target !== e.currentTarget){    
        if(e.target.id === 'play'){
            newTama.playWithPet()
        }
        else if(e.target.id === 'feed'){
            newTama.feedPet()
        }
        else if(e.target.id === 'exercise'){
            newTama.exercisePet()
        }
        else if(e.target.id === 'read'){
            newTama.readToPet()
        }
        else if(e.target.id === 'lights'){
            newTama.lightsOff()
            lightChecker()
        }
        tamaInfoUpdate(newTama)
        tamaStatChecker(newTama)}
}
//the body element in var
const theBody = document.querySelector('#seenPage')

//main element
const theMain = document.querySelector('main')

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


//need tick/time passing function
//need update name function
// need age increase function
//need animations for each age and function to pick correct one
//rules portion (since number stats are different that in OG assignment)

//instantiating tamagotchi object upon loading
let newTama = new Tamagotchi ('');
tamaInfoUpdate(newTama)

buttonContainer.addEventListener('click', funcFinder)
