document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btn-login');
    const modalLogin = document.getElementById('modal-login');
    const closeModal = document.getElementById('close-modal');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const userName = document.getElementById('user-name');
    const userMenu = document.getElementById('user-menu');
    const logoutMenu = document.getElementById('logout-menu');
    const btnLogout = document.getElementById('btn-logout');

    const validUser = {
        username: 'luis',
        password: 'luis1234',
        fullName: 'Luis Ángel'
    };

    btnLogin.addEventListener('click', (e) => {
        e.preventDefault();
        modalLogin.classList.remove('hidden');
    });

    closeModal.addEventListener('click', () => {
        modalLogin.classList.add('hidden');
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === validUser.username && password === validUser.password) {
            modalLogin.classList.add('hidden');
            btnLogin.classList.add('hidden');
            userName.textContent = `Usuario: ${validUser.fullName}`;
            userMenu.classList.remove('hidden');
        } else {
            loginError.classList.remove('hidden');
        }
    });

    userName.addEventListener('click', () => {
        logoutMenu.classList.toggle('hidden');
    });

    btnLogout.addEventListener('click', () => {
        userMenu.classList.add('hidden');
        btnLogin.classList.remove('hidden');
        logoutMenu.classList.add('hidden');
    });
});
