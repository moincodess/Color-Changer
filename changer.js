
const colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "#181818"];
const name = document.getElementById("colorName");
function colorChanger() {


    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    document.body.style.backgroundColor = randomColor;
    colorName.textContent = `Current-Color: ${randomColor}`;

}

const button = document.getElementById("changeBtn");

button.addEventListener("click", function () {
    console.log("clicked");
    colorChanger();

})

console.log(button);