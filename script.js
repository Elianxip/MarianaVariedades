// ============================
// FUNCIÓN INTERACTIVA PRINCIPAL
// Cambiar color de texto al pasar el mouse
// ============================

// Aplicar la función a todos los títulos h2
document.querySelectorAll('h2').forEach(function(elemento) {
    elemento.addEventListener('mouseenter', function() {
        // Cambiar a color dorado al pasar el mouse
        elemento.style.color = '#d4af37';
        elemento.style.transition = 'color 0.3s ease';
    });

    elemento.addEventListener('mouseleave', function() {
        // Volver al color original
        elemento.style.color = '#1a1a1a';
    });
});

// ============================
// FUNCIÓN DE CARRITO
// Mostrar confirmación al consultar producto
// ============================

function agregarAlCarrito(nombreProducto) {
    alert(`Consultando: ${nombreProducto}\n\nNos pondremos en contacto pronto.`);
}

// ============================
// FUNCIONES AUXILIARES
// ============================

// Suavizar scroll al hacer clic en links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Validar formulario de contacto
const formulario = document.querySelector('form');
if (formulario) {
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && email && mensaje) {
            alert(`Gracias ${nombre}, hemos recibido tu mensaje. Te contactaremos pronto.`);
            formulario.reset();
        } else {
            alert('Por favor, completa todos los campos requeridos.');
        }
    });
}

console.log('Script cargado correctamente');