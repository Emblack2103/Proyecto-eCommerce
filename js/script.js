document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.btn-agregar');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });

    function agregarAlCarrito(e) {
        const boton = e.target;
        const producto = {
            id: boton.getAttribute('data-id'),
            nombre: boton.getAttribute('data-nombre'),
            precio: parseFloat(boton.getAttribute('data-precio'))
        };

        // Obtener el carrito 
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // Agregar el producto 
        carrito.push(producto);

        // Guardar el carrito 
        localStorage.setItem('carrito', JSON.stringify(carrito));

        alert(`${producto.nombre} ha sido agregado al carrito.`);
    }
});