// Esperar a que todo el DOM (HTML) esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Capturar el formulario y el contenedor del mensaje
    const formulario = document.getElementById('form-reserva');
    const mensajeAlerta = document.getElementById('form-mensaje');

    // 2. Escuchar el evento de envío (submit)
    formulario.addEventListener('submit', function(event) {
        // Evita que la página se recargue automáticamente (Acción por defecto)
        event.preventDefault();

        // 3. Obtener los valores de los inputs y limpiar espacios en blanco
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Limpiar estilos y mensajes previos
        mensajeAlerta.textContent = "";
        mensajeAlerta.style.color = "";

        // 4. Validaciones de campos vacíos
        if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
            mensajeAlerta.textContent = "❌ Por favor, completa todos los campos obligatorios.";
            mensajeAlerta.style.color = "#ff4d4d"; // Rojo vibrante sobre fondo oscuro
            return; // Detiene la ejecución del código
        }

        // 5. Validación específica del formato de Email (Expresión Regular)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mensajeAlerta.textContent = "❌ Por favor, ingresa un correo electrónico válido.";
            mensajeAlerta.style.color = "#ff4d4d";
            return; 
        }

        // 6. Si pasa todas las validaciones: Mensaje de éxito
        mensajeAlerta.textContent = "✔ ¡Reserva solicitada con éxito! Nos contactaremos contigo pronto.";
        mensajeAlerta.style.color = "#2ecc71"; // Verde esmeralda con excelente contraste

        // 7. Resetear (limpiar) el formulario para el siguiente uso
        formulario.reset();
    });
});