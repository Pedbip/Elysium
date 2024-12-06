
document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('popup').style.display = 'block';
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}