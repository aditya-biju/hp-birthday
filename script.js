const wand = document.getElementById("wand");
const button = document.getElementById("spellBtn");
const nameText = document.getElementById("name");

let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;

/* Move Wand */
function moveWand(x, y) {
  posX = x;
  posY = y;

  wand.style.left = x + "px";
  wand.style.top = y + "px";
  wand.style.transform = "rotate(15deg)";

  createSpark(x, y);
}

/* Mouse */
document.addEventListener("mousemove", (e) => {
  moveWand(e.clientX, e.clientY);
});

/* Touch */
document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  moveWand(touch.clientX, touch.clientY);
});

/* Spark Trail */
function createSpark(x, y) {
  const spark = document.createElement("div");
  spark.className = "spark";
  spark.style.left = x + "px";
  spark.style.top = y + "px";
  document.body.appendChild(spark);

  setTimeout(() => {
    spark.remove();
  }, 1000);
}

/* Spell Burst */
function spellBurst(x, y) {
  for (let i = 0; i < 25; i++) {
    const burst = document.createElement("div");
    burst.className = "burst";
    burst.style.left = x + "px";
    burst.style.top = y + "px";
    burst.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
    burst.style.setProperty("--y", `${Math.random() * 200 - 100}px`);
    document.body.appendChild(burst);

    setTimeout(() => {
      burst.remove();
    }, 800);
  }
}

/* Button Click */
button.addEventListener("click", () => {
  spellBurst(posX, posY);
  nameText.classList.add("show");
});
