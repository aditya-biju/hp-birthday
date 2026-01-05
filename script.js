/* INTRO TRANSITION */
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}, 4000);

/* MAGIC PARTICLES */
setInterval(() => {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 3000);
}, 150);

/* SPELL EFFECT */
function castSpell() {
  document.body.style.background = "white";

  setTimeout(() => {
    document.body.style.background = "";
  }, 150);
}
