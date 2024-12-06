document.getElementById('mobile-menu-button').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

document.getElementById('user-menu-button').addEventListener('click', function () {
    var menu = document.getElementById('user-menu');
    menu.classList.toggle('hidden');
});

document.addEventListener('click', function (event) {
    var isClickInside = document.getElementById('user-menu-button').contains(event.target) || document.getElementById('user-menu').contains(event.target);
    if (!isClickInside) {
        document.getElementById('user-menu').classList.add('hidden');
    }
});