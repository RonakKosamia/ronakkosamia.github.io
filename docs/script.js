AOS.init({ duration: 800, once: true });

function setParticlesColor() {
  const color = document.body.classList.contains("dark") ? "#ffffff" : "#007acc";
  particlesJS("particles-js", {
    particles: {
      number: { value: 60 },
      color: { value: color },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: color,
        opacity: 0.4,
        width: 1
      },
      move: { enable: true, speed: 2 }
    }
  });
}

document.getElementById("toggle-theme").onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "");
  setParticlesColor();
};

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}
setParticlesColor();

