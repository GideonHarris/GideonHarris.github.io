// grabbing the elements we will use in our script
const buttonVar = document.querySelector("button");

//our animations are slideCard and slideCardBack

// Our button click function 
buttonVar.addEventListener("click", slideSelectedCard());

function slideSelectedCard(){
    buttonVar.classList.add("animationjs");

    setTimeout(() => {
        
        buttonVar.classList.remove("animationjs");
    }, 1500);
};