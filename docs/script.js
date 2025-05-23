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

function showJob(job) {
  const textMap = {
    gm: "At General Motors, I led the MyBrand infotainment app across 20+ vehicles, built Compose UIs, migrated legacy Java to Kotlin, and delivered OTA-ready SDKs.",
    capone: "At Capital One, I led Android Compose modernization for the AtWork App suite, scaled Jenkins pipelines, and built secure GraphQL-based purchase flows.",
    wmata: "At WMATA, I developed cross-platform transit tools, integrated GIS with Ionic mobile apps, and enabled live bus stop editing across internal fleets.",
    foodcrave: "At FoodCrave, I engineered the food delivery backend, React Native mobile app, real-time updates, and secure payment flows with optimized performance."
  };
  document.getElementById('job-text').innerText = textMap[job] || '';
}
