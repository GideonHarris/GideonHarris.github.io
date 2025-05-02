// grabbing the things we need from our html 
const buttonVar = document.querySelector(".inputButton");

var theirNumber = document.querySelector(".inputNumber").value;

//declaring all of our variables we will use
let count = 0;
let goal = randomNum();
let weGotThem = 1;

//looking for the lable we want to change
var lableToChange = document.querySelector("label");

// Our button click function 
buttonVar.addEventListener("click", function(){
    //let newNumber = changeTheirNumber(theirNumber);
    if (weGotThem === 1){
        lableToChange.textContent = "Please confirm your number " + theirNumber + " is your number";
        buttonVar.textContent = "Confirm";
    }
    //theirNumber.textContent = newNumber;
    //thatsNotYourNumber(count, goal);
    
    else{

    };

    //clearing the number
    //theirNumber.value = "";
    count++;
});


function fuckingWithThem(){

};

const thingsToSay = ["lol no shot thats your number, please try again", "Wait no I think that's my number, try again","nah, I don't believe you", "Just type it in again", "wait hold on I forgot, try again", "What? Try again", "wait, lemme grab a pen, enter it again", "Wait I swear that is my number, try again", "I think you're lying, please enter your REAL number", "Eat shit, try agian", "Meow. Try again."];


//our funcitons to randomly generate how many times they are going to have to enter in their number 

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function randomNum() {
    return random(0, 10);
  };

function exponentials(base, power){
    let result = base ** power;
    return result;
}

//function to change the user's number
function changeTheirNumber(TheirNumber){
    let changedNumber = Number(TheirNumber);
    changedNumber = changedNumber + 1000;
    // limit of 9 on the random generator so that we never have an 11 digit number 
    
    return changedNumber;
    
};


//our main function that rights our new message 
function thatsNotYourNumber(Count, Goal){
    let randomMessage = thingsToSay[random(0, thingsToSay.length - 1)];
    if (Count === 0){
        lableToChange.textContent = "Sorry, something went wrong. Please enter your number again:";
    }
    else if(Count === Goal){
        //our button dissapears when its done
        lableToChange.textContent = "Oh ok that is your number, thanks.";
        buttonVar.style.display = "none";
    }
    else{
        lableToChange.textContent = randomMessage;
    };
};