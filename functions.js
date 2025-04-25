document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todas las imágenes dentro de la sección 1
    const images = document.querySelectorAll(".section1 .opcion img");

    images.forEach(img => {
        // Creamos un elemento div para el mensaje flotante
        const tooltip = document.createElement("div");
        tooltip.textContent = "Ver propiedad";
        tooltip.classList.add("tooltip");

        // Agregamos el tooltip como hijo del contenedor de la imagen
        img.parentElement.appendChild(tooltip);

        // Evento cuando el mouse entra en la imagen
        img.addEventListener("mouseenter", () => {
            tooltip.style.display = "block";
        });

        // Evento cuando el mouse sale de la imagen
        img.addEventListener("mouseleave", () => {
            tooltip.style.display = "none";
        });
    });
});
