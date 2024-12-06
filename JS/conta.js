document.addEventListener('DOMContentLoaded', function () {
    const emailElement = document.getElementById('email');
    const emailIcon = document.getElementById('email-icon');
    const usernameElement = document.getElementById('username');
    const usernameIcon = document.getElementById('username-icon');
    const modal = document.getElementById('username-modal');
    const closeModal = document.getElementById('close-modal');
    const saveUsername = document.getElementById('save-username');
    const usernameInput = document.getElementById('username-input');

    emailIcon.addEventListener('click', function () {
        if (emailElement.textContent.includes('*')) {
            emailElement.textContent = 'pessoa1@gmail.com';
        } else {
            emailElement.textContent = 'p*****1@gmail.com';
        }
    });

    usernameIcon.addEventListener('click', function () {
        modal.style.display = 'block';
        usernameInput.value = usernameElement.textContent.trim();
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    saveUsername.addEventListener('click', function () {
        const newUsername = usernameInput.value.trim();
        if (newUsername !== '') {
            usernameElement.textContent = newUsername;
        }
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    modal.addEventListener('mousedown', function (event) {
        if (event.target == modal) {
            modal.dataset.mouseDownOutside = 'true';
        } else {
            modal.dataset.mouseDownOutside = 'false';
        }
    });

    modal.addEventListener('mouseup', function (event) {
        if (modal.dataset.mouseDownOutside === 'true' && event.target == modal) {
            modal.style.display = 'none';
        }
        modal.dataset.mouseDownOutside = 'false';
    });
});