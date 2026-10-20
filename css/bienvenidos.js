const nombre = document.getElementById("nombre");
const resultado = document.getElementById("resultado");
const boton = document.getElementById("saludar");

function hola() {
    if (nombre.value.trim() === "") {
        resultado.textContent = "Por favor, ingresa tu nombre.";
    } else {
        resultado.textContent = `¡Hola, ${nombre.value}! Bienvenido/a.`;
    }
}

boton.addEventListener("click", hola);
