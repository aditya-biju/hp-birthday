const wand = document.getElementById("wand");
const button = document.getElementById("spellBtn");
const nameText = document.getElementById("name");
const candleContainer = document.getElementById("candles");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

/* Wand movement */
function moveWand(px, py) {
  x = px;
  y = py;

  wand.style.left = px + "px";
  wand.style.top = py + "px";
  wand.style.transform = "rotate(15deg)";

  createSpark(px, py);
}

document.addEventListener("mousemove", e => {
  moveWand(e.clientX, e.clientY);
});

document.addEventListener("touchmove", e => {
  const t = e.touches[0];
  moveWand(t.clientX, t.clientY);
});

/* Spark trail */
function createSpark(px, py) {
  const s = document.createElement("div");
  s.className = "spark";
  s.style.left = px + "px";
  s.style.top = py + "px";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 1000);
}

/* Fireworks */
function fireworks(px, py) {
  for (let i = 0; i < 30; i++) {
    const f = document.createElement("div");
    f.className = "firework";
    f.style.left = px + "px";
    f.style.top = py + "px";
    f.style.setProperty("--x", `${Math.random() * 300 - 150}px`);
    f.style.setProperty("--y", `${Math.random() * 300 - 150}px`);
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 900);
  }
}

/* Floating candles */
for (let i = 0; i < 12; i++) {
  const c = document.createElement("div");
  c.className = "candle";
  c.style.left = Math.random() * 100 + "vw";
  c.style.top = Math.random() * 60 + "vh";
  c.style.animationDelay = Math.random() * 4 + "s";
  candleContainer.appendChild(c);
}

/* Button click */
button.addEventListener("click", () => {
  nameText.classList.add("show");
  fireworks(x, y);
});
