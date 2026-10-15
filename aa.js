const button = document.getElementById("changeColor");
const colorCode = document.getElementById("colorCode");

button.addEventListener("click", function () {

    const randomColor = Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, "0");

    const hexColor = "#" + randomColor.toUpperCase();

    document.body.style.backgroundColor = hexColor;

    colorCode.textContent = hexColor;

});

