const wand = document.getElementById("wand");
const btn = document.getElementById("spellBtn");
const nameText = document.getElementById("name");
const overlay = document.getElementById("letterOverlay");
const letter = document.getElementById("letter");
const seal = document.getElementById("seal");
const letterText = document.getElementById("letterText");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

// Move wand + sparks
document.addEventListener("mousemove", e => {
  x = e.clientX;
  y = e.clientY;
  wand.style.left = x + "px";
  wand.style.top = y + "px";

  const s = document.createElement("div");
  s.className = "spark";
  s.style.left = x + "px";
  s.style.top = y + "px";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 1000);
});

// Fireworks
function fireworks() {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;

  for (let i = 0; i < 40; i++) {
    const f = document.createElement("div");
    f.className = "firework";
    f.style.left = cx + "px";
    f.style.top = cy + "px";
    f.style.setProperty("--x", `${Math.random() * 300 - 150}px`);
    f.style.setProperty("--y", `${Math.random() * 300 - 150}px`);
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1000);
  }
}

// Spell button
btn.addEventListener("click", () => {
  nameText.classList.add("show");
  fireworks();
  setTimeout(() => overlay.classList.add("show"), 700);
});

// Typing letter
const message = `On this magical day, I just wanted to remind you how special you are.

May your life be filled with happiness, confidence, and joy.

Always believe in magic — because you are magic ✨

Happy Birthday 💖`;

let i = 0;

function typeText() {
  if (i < message.length) {
    letterText.innerHTML += message[i] === "\n" ? "<br>" : message[i];
    i++;
    setTimeout(typeText, 35);
  }
}

// Seal click
seal.addEventListener("click", () => {
  letter.classList.add("open");
  letterText.innerHTML = "";
  i = 0;
  typeText();
});
