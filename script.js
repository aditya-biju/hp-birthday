gsap.from(".magic-text", {
  opacity: 0,
  y: -50,
  duration: 2,
  ease: "power2.out"
});

gsap.from(".sub-text", {
  opacity: 0,
  y: 20,
  delay: 1,
  duration: 1
});

document.querySelector(".spell-btn").addEventListener("click", () => {
  gsap.to("body", {
    backgroundColor: "#1a0033",
    duration: 0.5,
    yoyo: true,
    repeat: 1
  });

  alert("✨ May your year be full of magic ✨");
});
const container = document.getElementById("magic-particles");

for (let i = 0; i < 40; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.animationDelay = Math.random() * 6 + "s";
  particle.style.animationDuration = 4 + Math.random() * 4 + "s";
  container.appendChild(particle);
}

