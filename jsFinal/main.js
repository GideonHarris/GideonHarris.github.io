// grabbing the things we need from our html 
const buttonVar = document.querySelector("inputButton");
var message = document.getElementById("message");

//declaring all of our variables we will use
let count = 0;
let goal = randomNum();

//looking for the lable we want to change
var lableToChange = document.querySelector("label");

// Our button click function 
buttonVar.addEventListener("click", function(){
    thatsNotYourNumber(count, goal);
    count++;
});

const thingsToSay = ["lol no shot thats your number, please try again", "Wait no I think that's my number, try again","nah, I don't believe you", "Just type it in again", "wait hold on I forgot, try again", "What? Try again", "wait, lemme grab a pen, enter it again", "Wait I swear that is my number, try again", "I think you're lying, please enter your REAL number", "Eat shit, try agian", "Meow. Try again."];


//our funcitons to randomly generate how many times they are going to have to enter in their number 

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function randomNum() {
    return random(0, 50);
    // 50 because I am cruel
  };


//our main function that rights our new message 
function thatsNotYourNumber(Count, Goal){
    let randomMessage = thingsToSay[random(0, thingsToSay.length - 1)];
    if (Count === 0){
        lableToChange.innerHTML = "Sorry, something went wrong. Please enter your number again:";
    }
    else if(Count === Goal){
        lableToChange.innerHTML = "Oh ok that is your number, thanks.";
    }
    else{
        lableToChange.innerHTML = randomMessage;
    };
};