document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.querySelector("input[type='text']");
    const passwordInput = document.querySelector("input[type='password']");

  
    const validEmails = [
        "jassiel@gmail.com",
        "Emiliano@gmail.com",
        "Luis@gmail.com",
        "Bryan@gmail.com"
    ];
    const validPassword = "12345678";

    form.addEventListener("submit", function (e) {
        e.preventDefault();  

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        
        if (validEmails.includes(email) && password === validPassword) {
            alert("Inicio de sesión exitoso.");
            window.location.href = "index.html";  
        } else {
            alert("Correo o contraseña incorrectos. Intenta nuevamente.");
        }
    });
});
