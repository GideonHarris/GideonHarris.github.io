
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



const storyText = "It was 94 fahrenheit outside, so :insertx: started running. When they got to :inserty:, they gambled away their life savings, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: can lift 300 pounds, and Gideon didn't know how to finish this story."

const insertX = ["Cheif Keef",
"Tyler, the Creator",
"Nardwuar"];

const insertY = ["O-Block",
"Chicago",
"the hills"];

const insertZ = [
"tripped and ate it",
"boofed it",
"did nothing; he just laughed"];
let newStory = storyText;
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);

randomize.addEventListener('click', result);



function result() {


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(400/14);
    let temperature =  Math.round((94 - 32) * (5/9));
    weight = weight +"stone";
    temperature = temperature + "centigrade";
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);


  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


