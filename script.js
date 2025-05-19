document.getElementById("registroForm").addEventListener("submit", function(event) {
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let imagen = document.getElementById("imagen").files[0];

    if (nombre === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        event.preventDefault();
        return;
    }

    if (imagen) {
        let formatoValido = ["image/png", "image/jpeg"];
        if (!formatoValido.includes(imagen.type)) {
            alert("Formato de imagen no válido. Solo se aceptan JPG o PNG.");
            event.preventDefault();
        }
    }
});

function mostrarImagen(event) {
    let imagen = document.getElementById('ver-imagen');
    imagen.src = URL.createObjectURL(event.target.files[0]);
    imagen.style.display = "block";
}
