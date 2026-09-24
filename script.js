const topBtn = document.getElementById("topBtn");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// --------------------------------------------------
// BACK TO TOP
// --------------------------------------------------

topBtn.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth",
});
});

// --------------------------------------------------
// THEME TOGGLE
// --------------------------------------------------

themeToggle.addEventListener("click", () => {

if (body.classList.contains("dark")) {

```
body.classList.remove("dark");
body.classList.add("light");

themeToggle.textContent = "Dark mode";

localStorage.setItem("theme", "light");
```

} else {

```
body.classList.remove("light");
body.classList.add("dark");

themeToggle.textContent = "Light mode";

localStorage.setItem("theme", "dark");
```

}

});

// --------------------------------------------------
// LOAD SAVED THEME
// --------------------------------------------------

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

body.classList.remove("dark");
body.classList.add("light");

themeToggle.textContent = "Dark mode";

} else {

body.classList.remove("light");
body.classList.add("dark");

themeToggle.textContent = "Light mode";

}
