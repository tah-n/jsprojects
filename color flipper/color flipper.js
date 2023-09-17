const colors = ["red", "green", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    const randNum = randomNum();
    document.body.style.backgroundColor = colors[randNum];
    color.textContent = colors[randNum];
})

function randomNum() {
    return Math.floor(Math.random() * colors.length);
}
