const userMenuButton = document.getElementById('user-menu-button');
const userMenu = document.getElementById('user-menu');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

document.getElementById('addEmployeeButton').addEventListener('click', function () {
    document.getElementById('employeeFormPopup').classList.remove('hidden');
});

document.getElementById('closePopupButton').addEventListener('click', function () {
    document.getElementById('employeeFormPopup').classList.add('hidden');
});

document.getElementById('employeeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const email = document.getElementById('email').value;
    const photo = document.getElementById('photo').files[0];

    const reader = new FileReader();
    reader.onload = function (e) {
        const employeeList = document.getElementById('employeeList');
        const card = document.createElement('div');
        card.className = 'bg-white p-4 rounded shadow-md flex items-center';
        const newMemberId = Date.now();

        card.innerHTML = `
                  <img alt="User profile picture" class="rounded-full mr-4" height="50" src="${e.target.result}" width="50"/>
                  <div class="flex-1">
                      <div class="font-bold text-lg" id="memberName-${newMemberId}">${name}</div>
                      <div class="text-gray-600">${position}</div>
                      <div class="text-gray-600">${email}</div>
                  </div>
                  <div class="flex items-center">
                      <button class="bg-white border border-gray-300 rounded p-2 mr-2" title="Extrato" onclick="openExtrato(${newMemberId})">
                          <i class="fas fa-file-alt"></i>
                      </button>
                      <button class="bg-white border border-gray-300 rounded p-2" onclick="editEmployee(this)">
                          <i class="fas fa-pencil-alt"></i>
                      </button>
                      <button class="bg-white border border-gray-300 rounded p-2 ml-2" onclick="deleteEmployee(this)">
                          <i class="fas fa-trash"></i>
                      </button>
                  </div>
              `;

        employeeList.appendChild(card);

        document.getElementById('employeeForm').reset();
        document.getElementById('employeeFormPopup').classList.add('hidden');
    };

    reader.readAsDataURL(photo);
});

function editEmployee(button) {
    const card = button.parentElement.parentElement;
    const name = card.querySelector('.font-bold').innerText;
    const position = card.querySelector('.text-gray-600:nth-child(2)').innerText;
    const email = card.querySelector('.text-gray-600:nth-child(3)').innerText;

    document.getElementById('name').value = name;
    document.getElementById('position').value = position;
    document.getElementById('email').value = email;

    card.remove();
    document.getElementById('employeeFormPopup').classList.remove('hidden');
}

function deleteEmployee(button) {
    button.parentElement.parentElement.remove();
}

function openExtrato(memberId) {
    const extratoPopup = document.getElementById('extratoPopup');
    const extratoList = document.getElementById('extratoList');
    extratoList.innerHTML = '';

    extratoPopup.classList.remove('hidden');

    document.getElementById('addFileButton').onclick = function () {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.pdf,.doc,.docx';
        input.onchange = function (event) {
            const file = event.target.files[0];
            if (file) {
                const listItem = document.createElement('div');
                listItem.className = 'flex justify-between items-center mb-2';
                const fileUrl = URL.createObjectURL(file);
                listItem.innerHTML = `
                          <a href="${fileUrl}" target="_blank" class="text-blue-500 hover:underline">${file.name}</a>
                          <button class="text-red-500 hover:text-red-700" onclick="removeFile(this)">
                              <i class="fas fa-trash"></i>
                          </button>
                      `;
                extratoList.appendChild(listItem);
            }
        };
        input.click();
    };
}

function removeFile(button) {
    button.parentElement.remove();
}

document.getElementById('closeExtratoButton').addEventListener('click', function () {
    document.getElementById('extratoPopup').classList.add('hidden');

});

document.addEventListener('DOMContentLoaded', () => {
    // menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // menu usuario
    const userMenuButton = document.getElementById('user-menu-button');
    const userMenu = document.getElementById('user-menu');
    userMenuButton.addEventListener('click', () => {
        userMenu.classList.toggle('hidden');
    });
});