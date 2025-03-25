// Dark mode functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const moonIcon = document.getElementById('moonIcon');
    const sunIcon = document.getElementById('sunIcon');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        moonIcon.classList.add('d-none');
        sunIcon.classList.remove('d-none');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        moonIcon.classList.remove('d-none');
        sunIcon.classList.add('d-none');
    }
    
    // Listen for toggle click
    darkModeToggle.addEventListener('click', function() {
        // Toggle theme
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            moonIcon.classList.remove('d-none');
            sunIcon.classList.add('d-none');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            moonIcon.classList.add('d-none');
            sunIcon.classList.remove('d-none');
        }
    });
});