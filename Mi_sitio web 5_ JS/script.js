function cambiarTexto() {
    document.getElementById("subtitulo").innerText = "¡Sitio Web con JavaScript!";
    }

function cambiarColor() {
        document.getElementById("titulo").style.color="red";
    }

function cambiaFondo() {
        document.getElementById("subtitulo").style.background="blue";
    }


function agregarImagen() {
    const url = document.getElementById("imagenUrl").value;
    if (url) {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Imagen agregada";
        img.onclick = seleccionarImagen;
        document.getElementById("galeria").appendChild(img);
        document.getElementById("imagenUrl").value = "";
    } else {
        alert("Por favor, introduce una URL válida.");
    }
}

function seleccionarImagen(event) {
    document.querySelectorAll("#galeria img").forEach(img => {
        img.classList.remove("seleccionada");
    });
    event.target.classList.add("seleccionada");
}

function eliminarSeleccionada() {
    const seleccionada = document.querySelector("#galeria img.seleccionada");
    if (seleccionada) {
        seleccionada.remove();
    } else {
        alert("Selecciona una imagen para eliminar.");
    }
}


