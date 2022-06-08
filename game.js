
let maximum = parseInt(prompt(`Set the maximum number`));


while(!maximum){
    maximum = parseInt(prompt(`Please enter a valid number`));
}

const targetNum = Math.floor(Math.random() * maximum) + 1; 
console.log(`You entered ${maximum}`)
console.log(`The randomly Generated target number is ${targetNum}`)

let guess = prompt(`Please enter a guess`);
let attempts = 1;
while (parseInt(guess) !== targetNum){
    if(guess === `q`)break;

    attempts++;

    if(guess > targetNum){
        guess = prompt(`Guess is too high, Try again`);
    }
    else{
        guess = prompt(`Guess is too low, Try again`)
    }
}

if(guess === `q`){
    console.log(`Quitter`)
}

console.log(`Winner`);
console.log(`it took you ${attempts} guesses to get the correct number`);


