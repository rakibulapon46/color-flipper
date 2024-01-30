const colors = ["red", "green", "rgb(133,122, 200)", "aqua", "crimson", "#f5a825"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function (event) {
  // get random number 0-3
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

document.getElementById("simple").href = "index.html";
document.getElementById("hex").href = "hex.html";