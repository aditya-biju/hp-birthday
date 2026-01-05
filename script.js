/* LUMOS INTRO */
setTimeout(() => {
  document.getElementById("lumos").style.display = "none";
  document.getElementById("content").style.display = "block";
}, 3500);

/* FLOATING MAGIC */
setInterval(() => {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 2 + Math.random() * 2 + "s";
  document.body.appendChild(p);

  setTimeout(() => p.remove(), 4000);
}, 120);

/* SPELL EFFECT */
function castSpell() {
  document.body.style.background = "white";

  setTimeout(() => {
    document.body.style.background = "";
  }, 150);

  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = 50 + Math.random() * 10 - 5 + "vw";
    document.body.appendChild(p);

    setTimeout(() => p.remove(), 3000);
  }
}
