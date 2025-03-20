document.addEventListener("DOMContentLoaded", function () {
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
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;

    modeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        // Cambiar el texto del botón
        if (body.classList.contains("light-mode")) {
            modeToggle.innerHTML = "🌙 Modo Oscuro";
        } else {
            modeToggle.innerHTML = "☀️ Modo Claro";
        }
    });
});
