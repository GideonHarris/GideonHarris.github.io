// grabbing the things we need from our html 
const buttonVar = document.querySelector("inputButton");
var message = document.getElementById("message");

//declaring all of our variables we will use
let count = 0;
let goal = randomNum();


buttonVar.addEventListener("click", function(){
    thatsNotYourNumber(count, goal);
});

const thingsToSay = ["lol no shot thats your number, please try again", "nah, I don't believe you", "Just type it in again", "wait hold on I forgot try again", "What?", "wait, lemme grab a pen, enter it again", "Wait I swear that is my number, try again", "I think you're lying", "Eat shit, try agian"];


//our funcitons to randomly generate how many times they are going to have to enter in their number 

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function randomNum() {
    return random(0, 50);
    // 50 because I am cruel
  };

function thatsNotYourNumber(Count, Goal){
    let ramdomMessage = thingsToSay[random(0, thingsToSay.length - 1)];
    if (Count === 0){
        
    }
    else if(Count === Goal){

    }
    else{

    };
};