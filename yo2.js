document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Inicio de sesión exitoso!');
    
    // Redirigir a otra página después de iniciar sesión
    window.location.href = './yo3.html'; // Cambia esto por la URL deseada
});