AOS.init({ duration: 800, once: true });

particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    color: { value: "#3b82f6" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#3b82f6",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 2 }
  }
});

function showJob(jobId) {
  const jobText = {
    gm: "Led MyBrand architecture for 20+ vehicle platforms, introduced KMP-based SDKs, integrated Firebase + GraphQL, and scaled OTA deployment across flagship GM models.",
    capone: "Modernized Capital One's AtWork App with Compose, CI/CD, GraphQL, and enterprise auth; improved security and developer velocity.",
    wmata: "Developed GIS-based hybrid tools for WMATA using Ionic, Angular, and real-time map APIs for internal transit team operations.",
    foodcrave: "Led FoodNearU mobile app with real-time delivery tracking, React Native UI, and integrated Stripe payments + location SDKs."
  };

  document.getElementById('job-text').innerText = jobText[jobId];

  // Highlight selected logo
  const logos = document.querySelectorAll('.logo-row img');
  logos.forEach(img => img.classList.remove('selected'));
  document.getElementById(jobId).classList.add('selected');
}

// Default selection
window.onload = () => {
  showJob('gm');
};
