// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Use browser default preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Apply theme on page load
if (prefersDark) {
  body.classList.add('dark-mode');
  icon.className = 'fa fa-sun-o';
  themeToggle.setAttribute('aria-label', 'Switch to light mode');
  themeToggle.setAttribute('aria-pressed', 'true');
} else {
  body.classList.add('light-mode');
  icon.className = 'fa fa-moon-o';
  themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  themeToggle.setAttribute('aria-pressed', 'false');
}

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    // Switch to light mode
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    icon.className = 'fa fa-moon-o';
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    themeToggle.setAttribute('aria-pressed', 'false');
  } else {
    // Switch to dark mode
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    icon.className = 'fa fa-sun-o';
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
    themeToggle.setAttribute('aria-pressed', 'true');
  }
});
