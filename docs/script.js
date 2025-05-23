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
    gm: "At General Motors, I led the MyBrand infotainment app across 20+ vehicle platforms, including EVs, enabling OTA diagnostics, dynamic theming, and integrated OnStar services. I architected and delivered Kotlin/Rust SDKs, real-time data sync via Firebase & Kafka, and GraphQL APIs for vehicle health, subscriptions, EV routing, and navigation. I also developed the Super Cruise Navigation App, using HERE Maps and charger telemetry streams. Led team of 5+ engineers, standardized security (OAuth 2.0, JWT), introduced Prometheus/Grafana observability, and migrated RxJava to Kotlin Coroutines + Flow for performance and lifecycle-aware state handling.",
    capone: "At Capital One, I led the AtWork App — a critical Android/iOS platform used by 1000s of employees. Delivered full parity across mobile platforms using Jetpack Compose, MotionLayout, and Swift modules. Architected StateFlow-based reactive UI patterns, centralized error and retry handling, and reduced backend load using GraphQL + Ktor optimization. I created NLP-powered PeopleFinder, integrated Firebase + AWS Lambda, and mentored engineers on KMP, CI/CD (Jenkins, Fastlane), and Kotlin best practices. Partnered with HR, security, and infra to align code delivery with internal compliance, authentication protocols, and deployment strategy.",
    medtronic: "At Medtronic, I lead the architecture and delivery of Kotlin Multiplatform-based mobile applications for regulated healthcare devices, enabling BLE sensor communication, HIPAA-compliant data handling, and SwiftUI-compatible shared code across Android and iOS. I focus on patient therapy workflows, Bluetooth device integration, and secure offline caching for medical telemetry.",
    cariad: "At Cariad USA (Volkswagen Group), I led next-gen SDV infotainment app development across Audi, VW, and Porsche brands. Delivered OTA update integration, cross-brand Compose-based UI frameworks, and modular navigation architecture. Built shared SDKs with GraphQL, KMP, and Firebase. Oversaw BLE-driven UX triggers and vehicle personalization settings syncing.",
    wmata: "At Washington Metro (WMATA), I developed the Bus Stop Editor — a mobile-first cross-platform app for field teams to update transit location data. Integrated real-time ESRI GIS, Cordova + Angular frontend, and Node.js REST APIs for managing stop metadata, vehicle telemetry, and routing updates. Enhanced backend via Golang-based transit schedulers, optimized data pipelines, and enabled high-frequency live GPS sync. Improved data freshness by 35%, optimized cache layers, and enabled internal teams to push location updates via web and mobile tools. Designed mobile experience using Sketch, enabled modular scaling for future city extensions.",
    foodcrave: "At FoodNearU, I led the TriValley Food Delivery app — a real-time, location-aware React Native app deployed on Android & iOS. Integrated Google Maps, Redux, real-time order tracking, and payment flows (Stripe, Google Pay). I built the entire app using React Native, Angular, and Cordova, enabled restaurant APIs, dynamic couponing, and caching. UI was built for high retention and reliability, reducing app response time by 25%. Coordinated frontend/backend dev in a lean team, pushed rapid MVP release, and scaled codebase to handle 3K+ daily users."
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

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "");
});
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

