document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const closeBtn = document.querySelector('.close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const coverImg = item.querySelector('.cover');
        const mainImg = item.querySelector('.main-img');
        const fileInput = item.querySelector('.file-input');
        const editButton = item.querySelector('.edit-button');

        coverImg.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = mainImg.src;
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500);
        });
    });

    // Función para mostrar el mensaje de bienvenida
    function showWelcomeMessage(nuevoUsuario) {
        if (nuevoUsuario) {
            alert("Bienvenido a Fortis, un MOOC sobre el bienestar en el deporte. Aquí aprenderás sobre nutrición, entrenamiento, y técnicas de recuperación para mejorar tu rendimiento.");
        } else {
            alert("¡Bienvenido de nuevo a Fortis! Nos alegra tenerte de vuelta. Continúa explorando nuestros recursos para llevar tu bienestar deportivo al siguiente nivel.");
        }
    }

    // Función para pedir el nombre del usuario y mostrar una bienvenida personalizada
    function askUserName() {
        const userName = prompt("Por favor, dinos tu nombre:");
        if (userName) {
            alert(`¡Hola ${userName}! Esperamos que disfrutes tu experiencia en Fortis.`);
        } else {
            alert("¡Bienvenido a Fortis! Esperamos que disfrutes tu experiencia.");
        }
    }

    // Función principal para gestionar la bienvenida
    function handleWelcome() {
        const nuevoUsuario = confirm("¿Eres nuevo en Fortis?");
        showWelcomeMessage(nuevoUsuario);
        askUserName();
    }

    // Llamar a la función principal para gestionar la bienvenida
    handleWelcome();
});
