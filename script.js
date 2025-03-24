const divElem = document.getElementsByClassName("button");

divElem.addEventListener("click", moveCard);

function moveCard(){
    if (divElem.classList[0] === "slideCard"){
        divElem.classList.remove("slideCard");
        divElem.classList.add("slideCardBack");
      } else {
        divElem.classList.remove("slideCardBack");
        divElem.classList.add("slideCard");
      }
}
