document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const cartao = document.getElementById('cartao').value.replace(/\s+/g, '').trim();
    const validade = document.getElementById('validade').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    // Validação do nome
    if (nome === '') {
        isValid = false;
        document.getElementById('nomeError').classList.remove('hidden');
    } else {
        document.getElementById('nomeError').classList.add('hidden');
    }

    // Validação do email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').classList.remove('hidden');
    } else {
        document.getElementById('emailError').classList.add('hidden');
    }

    // Validação do cartão
    const cardPattern = /^(?:\d{15}|\d{16})$/; // Aceita 15 ou 16 dígitos
    const isVisa = /^4\d{15}$/.test(cartao); // Visa: começa com 4 e tem 16 dígitos
    const isMasterCard = /^5[1-5]\d{14}$/.test(cartao); // MasterCard: começa com 51-55 e tem 16 dígitos
    const isAmex = /^3[47]\d{13}$/.test(cartao); // Amex: começa com 34 ou 37 e tem 15 dígitos

    if (!cardPattern.test(cartao) || (!isVisa && !isMasterCard && !isAmex)) {
        isValid = false;
        document.getElementById('cartaoError').classList.remove('hidden');
    } else {
        document.getElementById('cartaoError').classList.add('hidden');
    }

    // Validação da validade
    if (validade === '') {
        isValid = false;
        document.getElementById('validadeError').classList.remove('hidden');
    } else {
        document.getElementById('validadeError').classList.add('hidden');
    }

    // Validação do CVV
    const cvvPattern = /^[0-9]{3}$/; // Aceita 3 dígitos para Visa e MasterCard
    const amexCvvPattern = /^[0-9]{4}$/; // Aceita 4 dígitos para American Express
    
    if ((isVisa || isMasterCard) && !cvvPattern.test(cvv)) {
        isValid = false;
        document.getElementById('cvvError').classList.remove('hidden');
    } else if (isAmex && !amexCvvPattern.test(cvv)) {
        isValid = false;
        document.getElementById('cvvError').classList.remove('hidden');
    } else {
        document.getElementById('cvvError').classList.add('hidden');
    }

    // Se todas as validações passarem, exibe o modal de sucesso
    if (isValid) {
        document.getElementById('successModal').classList.remove('hidden');
    }
});

document.getElementById('cartao').addEventListener('input', function () {
    const cartao = this.value.replace(/\s+/g, '').trim();
    const cardBrand = document.getElementById('cardBrand');
    
    // Limpa a bandeira do cartão se o número não for válido
    if (!/^\d+$/.test(cartao)) {
        cardBrand.classList.add('hidden');
        return;
    }

    if (/^4/.test(cartao) && cartao.length === 16) {
        cardBrand.src = "../IMG/VISA-logo.png";
        cardBrand.alt = 'Logo do cartão Visa';
        cardBrand.style.marginBottom = "10px";
        cardBrand.classList.remove('hidden');
    } else if (/^5[1-5]/.test(cartao) && cartao.length === 16) {
        cardBrand.src = "../IMG/Mastercard-logo.png";
        cardBrand.alt = 'Logo do cartão MasterCard';
        cardBrand.style.marginBottom = "10px";
        cardBrand.classList.remove('hidden');
    } else if (/^3[47]/.test(cartao) && cartao.length === 15) {
        cardBrand.src = "../IMG/Amex-logo.png";
        cardBrand.alt = 'Logo do cartão American Express';
        cardBrand.style.marginBottom = "10px";
        cardBrand.classList.remove('hidden');
    } else {
        cardBrand.classList.add('hidden');
    }
});

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('successModal').classList.add('hidden');
});