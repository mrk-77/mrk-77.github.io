(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("siteNav");
  const media = window.matchMedia("(prefers-color-scheme: light)");

  const setTheme = (theme) => {
    const light = theme === "light";
    root.classList.toggle("light", light);
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(light));
      themeToggle.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
      const icon = themeToggle.querySelector("span");
      if (icon) icon.textContent = light ? "☀" : "☾";
    }
  };

  const storedTheme = localStorage.getItem("theme");
  setTheme(storedTheme || (media.matches ? "light" : "dark"));

  themeToggle?.addEventListener("click", () => {
    const next = root.classList.contains("light") ? "dark" : "light";
    localStorage.setItem("theme", next);
    setTheme(next);
  });

  const closeMenu = () => {
    nav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open menu");
  };

  menuToggle?.addEventListener("click", () => {
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle?.focus();
    }
  });

  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.08 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
})();
