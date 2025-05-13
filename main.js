
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const icon = document.getElementById('icon-path');

    const sun = "M12 4V2M12 22v-2M4.22 4.22l1.42 1.42M18.36 18.36l-1.42-1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l-1.42 1.42M16 12a4 4 0 11-8 0 4 4 0 018 0z";
    const moon = "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z";

    // Set theme based on localStorage or system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
      html.classList.add('dark');
      toggle.checked = true;
      icon.setAttribute("d", moon);
    } else {
      icon.setAttribute("d", sun);
    }

    // Listen to toggle
    toggle.addEventListener('change', () => {
      const isDark = toggle.checked;
      html.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      icon.setAttribute("d", isDark ? moon : sun);
    });
  });
  