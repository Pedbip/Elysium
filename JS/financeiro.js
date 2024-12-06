document.addEventListener('DOMContentLoaded', function () {
    const userMenuButton = document.getElementById('user-menu-button');
    const userMenu = document.getElementById('user-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const addAccountButton = document.getElementById('add-account-button');
    const addAccountModal = document.getElementById('add-account-modal');
    const closeModalButton = document.getElementById('close-modal-button');
    const saveAccountButton = document.getElementById('save-account-button');
    const recentActivityContainer = document.getElementById('recent-activity-container');

    userMenuButton.addEventListener('click', function () {
        userMenu.classList.toggle('hidden');
    });

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    addAccountButton.addEventListener('click', function () {
        addAccountModal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', function () {
        addAccountModal.classList.add('hidden');
    });

    saveAccountButton.addEventListener('click', function () {
        const accountName = document.getElementById('account-name').value;
        const accountValue = document.getElementById('account-value').value;
        const dueDate = document.getElementById('due-date').value;
        const status = document.getElementById('status').value;

        const newActivity = document.createElement('div');
        newActivity.classList.add('flex', 'flex-col', 'md:flex-row', 'justify-between', 'items-start', 'md:items-start', 'mb-4');
        newActivity.innerHTML = `
        <div class="flex items-center space-x-4">
            <i class="fas fa-dollar-sign text-gray-600"></i>
            <div>
                <p class="text-lg font-semibold">R$${accountValue} <span class="text-${status === 'pago' ? 'green' : 'red'}-500">${status === 'pago' ? 'Pago' : 'Vencido'}</span></p>
                <p class="text-gray-500">Data de Vencimento: ${dueDate}</p>
            </div>
        </div>
        <div class="text-right mt-2 md:mt-0 w-full md:w-auto">
            <p class="text-gray-600">${accountName}</p>
            <a class="text-blue-600 hover:text-blue-800" href="#">Ver transação</a>
        </div>
    `;

        recentActivityContainer.prepend(newActivity);
        addAccountModal.classList.add('hidden');
    });
});