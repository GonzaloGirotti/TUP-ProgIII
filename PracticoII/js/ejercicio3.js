const resaltar = document.querySelector("#botonResaltar");
const ocultar = document.querySelector("#botonOcultar");
const parrafos = document.querySelectorAll(".parrafo");

resaltar.addEventListener("click", () => {
  parrafos.forEach((parrafo) => {
    parrafo.classList.add("resaltado");
  });
});
ocultar.addEventListener("click", () => {
  parrafos.forEach((parrafo) => {
    parrafo.classList.toggle("oculto");
  });
});