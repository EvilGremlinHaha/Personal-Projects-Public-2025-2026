// Select toggle button
const toggleButton = document.getElementById('mode-toggle');

// Function to set theme
function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        toggleButton.textContent = 'Switch to Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        toggleButton.textContent = 'Switch to Light Mode';
        localStorage.setItem('theme', 'dark');
    }
}

// Event listener for toggle button
toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});

// Load theme from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('dark'); // default to dark mode
    }
});
