document.getElementById('mobile-menu').addEventListener('click', function() {
    const links = document.querySelector('.navbar-links');
    if (links.style.display === 'flex') {
        links.style.display = 'none';
    } else {
        links.style.display = 'flex';
    }
});