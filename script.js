const topBtn = document.getElementById("topBtn");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Back to top
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    themeToggle.textContent = "Dark mode";
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    themeToggle.textContent = "Light mode";
  }
});

// Simple interaction for the button (optional)
const notifyBtn = document.getElementById("notify-btn");

if (notifyBtn) {
  notifyBtn.addEventListener("click", () => {
    alert("Thanks for your interest! New projects will be added soon.");
  });
}
