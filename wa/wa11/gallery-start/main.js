const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageFiles = ['./images/pic1.png','./images/pic2.jpeg','./images/pic3.jpeg','./images/pic4.jpeg','./images/pic5.jpeg'];

/* Declaring the alternative text for each image file */
const altText = ['Image1','Image2','Image3','Image4','Image5'];

/* Looping through images */

for (let i = 0; i < imageFiles.length; i++){

const newImage = document.createElement('img');
newImage.setAttribute('src', imageFiles[i]);
newImage.setAttribute('alt', altText[i]);
thumbBar.appendChild(newImage);

newImage.addEventListener("click", () => 
{displayedImage.setAttribute('src', imageFiles[i]);
 displayedImage.setAttribute('alt', altText[i])});
}
/* Wiring up the Darken/Lighten button */


btn.addEventListener("click", () => {
    const className = btn.getAttribute('class');
    if (className === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})