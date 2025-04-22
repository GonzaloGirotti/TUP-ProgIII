const lista = document.querySelector("#lista");
const nombre = document.querySelector("#nombre");
const enviar = document.querySelector("#enviar");

function agregarNombre (evento) {
  evento.preventDefault(); // Evita que el formulario se envíe y la página se recargue
  const nuevoNombre = document.createElement("li"); // Crea un nuevo elemento de lista
  nuevoNombre.textContent = nombre.value; // Asigna el valor del input al nuevo elemento de lista
  lista.appendChild(nuevoNombre); // Agrega el nuevo elemento de lista a la lista existente
  nombre.value = ""; // Limpia el campo de entrada
  nombre.focus(); // Devuelve el foco al campo de entrada
};

enviar.addEventListener("click", agregarNombre); // Agrega un evento al botón de enviar