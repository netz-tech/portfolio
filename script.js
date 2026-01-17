
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const modal = document.getElementById('contact-modal');
    const openModal = document.getElementById('open-modal');
    const closeModal = document.getElementById('close-modal');

    // Load saved theme or default to dark
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    } else {
        document.body.classList.add('dark');
    }

    // Theme toggle
    toggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('light')) {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    });

    // Modal open/close
    openModal.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
