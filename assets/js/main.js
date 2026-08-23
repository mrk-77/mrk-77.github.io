(() => {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "light") root.classList.add("light");

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      root.classList.toggle("light");
      localStorage.setItem("theme", root.classList.contains("light") ? "light" : "dark");
    });
  }

  const menu = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");
  if (menu && nav) {
    menu.addEventListener("click", () => nav.classList.toggle("open"));
  }
})();
