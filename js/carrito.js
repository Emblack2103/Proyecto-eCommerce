document.addEventListener('DOMContentLoaded', () => {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const btnFinalizarCompra = document.getElementById('finalizar-compra');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function actualizarCarrito() {
        listaCarrito.innerHTML = ''; 
        let total = 0;

        carrito.forEach((producto, index) => {
            const item = document.createElement('li');
            item.innerHTML = `
                ${producto.nombre} - $${producto.precio}
                <button class="eliminar" data-index="${index}">❌</button>
            `;
            listaCarrito.appendChild(item);
            total += producto.precio;
        });

        totalCarrito.textContent = `$${total}`;

        // localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    listaCarrito.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminar')) {
            const index = e.target.dataset.index;
            carrito.splice(index, 1);
            actualizarCarrito();
        }
    });

    btnFinalizarCompra.addEventListener('click', () => {
        if (carrito.length === 0) {
            alert('El carrito está vacío.');
            return;
        }
        alert('¡Compra realizada con éxito!');
        carrito = [];
        actualizarCarrito();
    });

    actualizarCarrito();
});
