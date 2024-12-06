document.addEventListener('DOMContentLoaded', () => {
    const addProductBtn = document.getElementById('addProductBtn');
    const productModal = document.getElementById('productModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const productForm = document.getElementById('productForm');
    const productCards = document.getElementById('productCards');
    let products = [];
    let editIndex = null;

    addProductBtn.addEventListener('click', () => {
        productModal.classList.remove('hidden');
        document.getElementById('modalTitle').textContent = 'Adicionar Produto';
        productForm.reset();
        editIndex = null;
    });

    cancelBtn.addEventListener('click', () => {
        productModal.classList.add('hidden');
    });

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('productName').value;
        const quantity = document.getElementById('productQuantity').value;
        const price = document.getElementById('productPrice').value;
        const imageFile = document.getElementById('productImage').files[0];
        let imageUrl = 'https://placehold.co/50x50';

        if (imageFile) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imageUrl = e.target.result;
                saveProduct(name, quantity, price, imageUrl);
            };
            reader.readAsDataURL(imageFile);
        } else {
            saveProduct(name, quantity, price, imageUrl);
        }
    });

    function saveProduct(name, quantity, price, imageUrl) {
        if (editIndex === null) {
            products.push({ id: products.length + 1, name, quantity, price, imageUrl });
        } else {
            products[editIndex] = { ...products[editIndex], name, quantity, price, imageUrl };
        }

        renderCards();
        productModal.classList.add('hidden');
    }

    function renderCards() {
        productCards.innerHTML = '';
        products.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'bg-white p-4 rounded-lg shadow-md flex items-center';
            card.innerHTML = `
                <img alt="Product image" class="rounded-full mr-4" height="50" src="${product.imageUrl}" width="50"/>
                <div class="flex-1">
                    <div class="font-bold text-lg">${product.name}</div>
                    <div class="text-gray-600">Quantidade: ${product.quantity}</div>
                    <div class="text-gray-600">Preço: R$ ${product.price}</div>
                </div>
                <div class="flex items-center">
                    <button class="bg-white border border-gray-300 rounded p-2 mr-2 editBtn" data-index="${index}" title="Editar">
                        <i class="fas fa-pencil-alt"></i>
                    </button>
                    <button class="bg-white border border-gray-300 rounded p-2 deleteBtn" data-index="${index}" title="Excluir">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
            productCards.appendChild(card);
        });

        document.querySelectorAll('.editBtn').forEach(button => {
            button.addEventListener('click', (e) => {
                editIndex = e.target.closest('button').dataset.index;
                const product = products[editIndex];
                document.getElementById('productName').value = product.name;
                document.getElementById('productQuantity').value = product.quantity;
                document.getElementById('productPrice').value = product.price;
                document.getElementById('modalTitle').textContent = 'Editar Produto';
                productModal.classList.remove('hidden');
            });
        });

        document.querySelectorAll('.deleteBtn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.closest('button').dataset.index;
                products.splice(index, 1);
                renderCards();
            });
        });
    }

    // Toggle mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Toggle user menu
    const userMenuButton = document.getElementById('user-menu-button');
    const userMenu = document.getElementById('user-menu');
    userMenuButton.addEventListener('click', () => {
        userMenu.classList.toggle('hidden');
    });
});