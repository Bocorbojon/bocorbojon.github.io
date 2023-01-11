const myPage = document.querySelector("html"); // variable to store a reference to the whole page, the <html> element

const headingTexts = ["Porcupine Tree", "Best album"];
var i = 0;
document.querySelector("h1").addEventListener("click", () => {
    let myHeading = document.querySelector("h1");
    i = (i == 1) ? 0 : 1;
    myHeading.textContent = headingTexts[i]; // changing text every time the heading is clicked on
});


const imgs = ["images/lightbulb1.jpg", "images/lightbulb2.jpg"]; // image path array
const myImage = document.querySelector("#album-cover"); // reference to the image element
const restoreButton = document.querySelector("#restore-btn"); // reference to button
var j = 0;
var counter = 0;
// Event listener on the front cover to change it to the back cover
myImage.addEventListener("click", () => {
    j = (j == 1) ? 0 : 1;
    myImage.setAttribute("src", imgs[j]); // change src attribute
    counter++;
    if (counter === 10) { // if we clicked the image 10 times
        myImage.style.display = "none"; // hiding the image
        restoreButton.style.display = "block"; // showing the button
        counter = 0; // resetting the counter
    }
});
// Event listener on the button to show the front cover again
restoreButton.addEventListener("click", () => {
    restoreButton.style.display = "none"; // hiding the button
    myImage.style.display = "block"; // showing the image again
    myImage.setAttribute("src", imgs[0]); // set src of the image to the front cover
});

const changeUserButton = document.querySelector("#btn-change-user");
function setUsername() {
    let myName = prompt("Enter your name.");
    if (myName) {
        localStorage.setItem("name", myName);
        changeUserButton.innerText = `Hello, ${myName}. Click to change username.`;
    }
}
changeUserButton.addEventListener("click", setUsername);

if (!localStorage.getItem("name"))
    setUsername();
else {
    let storedName = localStorage.getItem("name");
    changeUserButton.innerText = `Hello, ${storedName}. Click to change username.`;
}



