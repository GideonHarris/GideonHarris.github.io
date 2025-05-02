// grabbing the things we need from our html 
const buttonVar = document.querySelector(".inputButton");

//declaring all of our variables we will use
let count1 = 0;
let count2 = 0;
let goal1 = randomNum();
let goal2 = randomNum();


//looking for the lable we want to change
var lableToChange = document.querySelector("label");

// Our button click function 
buttonVar.addEventListener("click", function(){
    //let newNumber = changeTheirNumber(theirNumber);
    let inputVar = document.getElementById("userInput");
    let value = inputVar.value;
    
    
    if (count1 < goal1){
        inputVar.value = fuckingWithThem(value);
        count1++;
    }
    else{
        thatsNotYourNumber(count2, goal2);
        //clearing the number
        inputVar.value = "";
        count2++;
    };    
});


function fuckingWithThem(Value){
    
    buttonVar.textContent = "Confirm";
    fuckedValue = Number(Value);
    fuckedValue = fuckedValue + exponentials(10, random(0,8));
    // 8 because I don't want an accidental 11 digit phone number
    lableToChange.textContent = "Please confirm your number " + fuckedValue + " is your number";
    return fuckedValue.toString();
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