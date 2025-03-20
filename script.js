document.addEventListener("DOMContentLoaded", function () {
    // ===== Cambiar secciones al hacer clic en los enlaces del menú =====
    const menuLinks = document.querySelectorAll(".menu-link");
    
    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            
            // Remover la clase "active" de todas las secciones
            document.querySelectorAll("section").forEach(section => {
                section.classList.remove("active");
            });

            // Obtener la sección correspondiente al link clicado
            const targetSection = document.getElementById(this.dataset.target);
            targetSection.classList.add("active");

            // Cerrar el menú hamburguesa después de hacer clic en una opción (en móviles)
            document.getElementById("mobile-menu").classList.remove("active");
        });
    });

    // ===== Menú Hamburguesa en móviles =====
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && closeMenu && mobileMenu) {
        // Abrir el menú al hacer clic en el icono
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.add("active");
        });

        // Cerrar el menú al hacer clic en la X
        closeMenu.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
        });

        // Cerrar el menú si se hace clic fuera de él
        document.addEventListener("click", function (event) {
            if (!mobileMenu.contains(event.target) && event.target !== menuToggle) {
                mobileMenu.classList.remove("active");
            }
        });
    }
});
