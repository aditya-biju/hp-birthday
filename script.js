/* LUMOS INTRO */
alert("Magic Loaded ✨");

console.log("Magic Loaded");

window.onload = () => {
  setTimeout(() => {
    document.getElementById("lumos").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 3000);
};

setInterval(() => {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = Math.random() * window.innerWidth + "px";
  p.style.top = window.innerHeight + "px";
  document.body.appendChild(p);

  setTimeout(() => p.remove(), 3000);
}, 100);

