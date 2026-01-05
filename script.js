const wand = document.getElementById("wand");
const button = document.getElementById("spellBtn");
const nameText = document.getElementById("name");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

/* Move wand */
function moveWand(px, py) {
  x = px;
  y = py;

  wand.style.left = px + "px";
  wand.style.top = py + "px";
  wand.style.transform = "rotate(15deg)";

  createSpark(px, py);
}

document.addEventListener("mousemove", (e) => {
  moveWand(e.clientX, e.clientY);
});

document.addEventListener("touchmove", (e) => {
  const t = e.touches[0];
  moveWand(t.clientX, t.clientY);
});

/* Spark trail */
function createSpark(px, py) {
  const spark = document.createElement("div");
  spark.className = "spark";
  spark.style.left = px + "px";
  spark.style.top = py + "px";
  document.body.appendChild(spark);

  setTimeout(() => spark.remove(), 1000);
}

/* Fireworks */
function fireworks(px, py) {
  for (let i = 0; i < 35; i++) {
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

/* Button click */
button.addEventListener("click", () => {
  nameText.classList.add("show");
  fireworks(x, y);
});
