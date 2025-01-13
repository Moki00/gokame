// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav ul");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }
});

// toggle dark mode
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Set initial mode
  const savedTheme = localStorage.getItem("theme") || "dark";
  body.classList.toggle("light-mode", savedTheme === "light");
  toggleButton.textContent =
    savedTheme === "light" ? "Dark Mode" : "Light Mode";

  toggleButton.addEventListener("click", () => {
    const isLightMode = body.classList.toggle("light-mode");
    toggleButton.textContent = isLightMode ? "Dark Mode" : "Light Mode";

    // Save preference to localStorage
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  });
});
