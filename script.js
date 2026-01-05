const wand = document.getElementById("wand");
const btn = document.getElementById("spellBtn");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

// Mouse + touch support
function moveWand(clientX, clientY) {
  x = clientX;
  y = clientY;

  wand.style.left = x + "px";
  wand.style.top = y + "px";
  wand.style.transform = "rotate(20deg)";

  createSpark(x, y);
}

document.addEventListener("mousemove", e => {
  moveWand(e.clientX, e.clientY);
});

document.addEventListener("touchmove", e => {
  const t = e.touches[0];
  moveWand(t.clientX, t.clientY);
});

// Spark trail
function createSpark(x, y) {
  const s = document.createElement("div");
  s.className = "spark";
  s.style.left = x + "px";
  s.style.top = y + "px";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 1000);
}

// Spell explosion
function spellBurst(x, y) {
  for (let i = 0; i < 20; i++) {
    const b = document.createElement("div");
    b.className = "burst";
    b.style.left = x + "px";
    b.style.top = y + "px";
    b.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
    b.style.setProperty("--y", `${Math.random() * 200 - 100}px`);
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 800);
  }
}

btn.addEventListener("click", () => {
  spellBurst(x, y);
});
