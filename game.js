
//A prompt appears asking the user to select a number 
let maximum = parseInt(prompt(`Set the maximum number`));
//This number will e used as the maximum number to possibly be selected
//The parseInt() method is used to be able to take the string of the number entered and turn it into an Int

//while there has been no number entered or the number is a Zero the prompt will keep appearing until a valid number is entered
while(!maximum){
    maximum = parseInt(prompt(`Please enter a valid number`));
}

//a variable with the randomly generated number is created
const targetNum = Math.floor(Math.random() * maximum) + 1;
//This is done by using the Math.random() method multiplied by the user input, the result of that number is then rounded to the nearest whole number and one is added to it.

//I log the maximum variable for testing purposes
console.log(`You entered ${maximum}`)
//I log the targetNum variable for testing purposes
console.log(`The randomly Generated target number is ${targetNum}`)
//These are only logged within the console so they will not be visible to the average user

//A new prompt is presented asking the user to guess the random number
let guess = prompt(`Please enter a guess`);
//And a variable to count each time a prompt is presented to reference the guesses made
let attempts = 1;

//This is what tests the user input
//While the user input gets parsed to an int and is not equivalent to the targetNum variable
while (parseInt(guess) !== targetNum){
    //I test if the secret code to exit the game has been entered
    if(guess === `q`)break;
    //If not then the attempts gets incremented
    attempts++;
    //and if the guess is higher then the target number then a new prompt gets displayed
    if(guess > targetNum){
        guess = prompt(`Guess is too high, Try again`);
    }
    //The same if the guess is too low
    else{
        guess = prompt(`Guess is too low, Try again`)
    }
}

//Just a antagonizing message for the user to keep trying
if(guess === `q`){
    console.log(`Quitter`)
}

//if he user has selected the correct number then a winning message gets displayed along with the amount of attempts it took them to get it correct.  
console.log(`Winner`);
console.log(`it took you ${attempts} guesses to get the correct number`);


