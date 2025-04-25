const titulo = document.getElementById("tituloPrincipal");
    titulo.textContent = "Título no original";

    const parrafos = document.getElementsByClassName("parrafo");
    for (let i = 0; i < parrafos.length; i++) {
      parrafos[i].style.color = "blue";
    }

    const elementosLista = document.querySelectorAll("#contenedor ul li");
    elementosLista.forEach((li, index) => {
      li.textContent += ` (ítem ${index + 1})`;
    });