const buttonVar = document.querySelector("new-quote button");
buttonVar.addEventListener("click", function(){
    getQuote();
});

function getQuote(){
    console.log("balls");
};

const endPoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";