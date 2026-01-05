const wand = document.getElementById("wand");
const button = document.getElementById("spellBtn");
const nameText = document.getElementById("name");
const overlay = document.getElementById("letterOverlay");
const letter = document.querySelector(".letter");
const seal = document.getElementById("waxSeal");
const letterText = document.getElementById("letterText");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

/* Wand movement */
function moveWand(x, y) {
  mouseX = x;
  mouseY = y;

  wand.style.left = x + "px";
  wand.style.top = y + "px";
  wand.style.transform = "rotate(15deg)";
  createSpark(x, y);
}

document.addEventListener("mousemove", e => {
  moveWand(e.clientX, e.clientY);
});

document.addEventListener("touchmove", e => {
  const t = e.touches[0];
  moveWand(t.clientX, t.clientY);
});

/* Spark trail */
function createSpark(x, y) {
  const spark = document.createElement("div");
  spark.className = "spark";
  spark.style.left = x + "px";
  spark.style.top = y + "px";
  document.body.appendChild(spark);
  setTimeout(() => spark.remove(), 1000);
}

/* Fireworks */
function fireworks() {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;

  for (let i = 0; i < 60; i++) {
    const f = document.createElement("div");
    f.className = "firework";
    f.style.left = cx + "px";
    f.style.top = cy + "px";

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 300 + 50;

    f.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    f.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1200);
  }
}

/* Button click */
button.addEventListener("click", () => {
  nameText.classList.add("show");
  fireworks();
  setTimeout(() => overlay.classList.add("show"), 800);
});

/* Typing letter */
const message = `On this magical day, I just wanted to remind you how special you are.

Your kindness, smile, and energy make the world brighter.

May this year bring happiness, confidence, and unforgettable moments.

Always believe in magic — because you are magic ✨

Happy Birthday 💖`;

let index = 0;

function typeLetter() {
  if (index < message.length) {
    letterText.innerHTML += message[index] === "\n" ? "<br>" : message[index];
    index++;
    setTimeout(typeLetter, 35);
  } else {
    letterText.classList.remove("typing-cursor");
  }
}

/* Wax seal click */
seal.addEventListener("click", () => {
  letter.classList.add("open");
  letterText.innerHTML = "";
  letterText.classList.add("typing-cursor");
  index = 0;
  setTimeout(typeLetter, 400);
});
