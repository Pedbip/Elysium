document.getElementById('mobile-menu-button').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});