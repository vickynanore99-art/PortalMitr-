// Har page load hone par scroll restore karo
window.addEventListener('load', () => {
    const scrollPos = localStorage.getItem(window.location.pathname);
    if (scrollPos) {
        window.scrollTo(0, parseInt(scrollPos));
    }
});

// Har click par scroll save karo (Current Page ke naam se)
document.addEventListener('click', (e) => {
    const card = e.target.closest('.card, .action-card');
    if (card) {
        localStorage.setItem(window.location.pathname, window.scrollY);
    }
});
