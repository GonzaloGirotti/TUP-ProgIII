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
enviar.addEventListener("click", AgregarListenersCompletar); // Agrega el evento de agregar el evento completar a los <li>

function AgregarListenersCompletar(){ // La funcion es llamada cuando se clickea el boton "enviar".
  
  const items = lista.getElementsByTagName("li");     // Items guarda todos los li que haya actualmente.

  for (let i = 0; i < items.length; i++){             // Se recorren todos los li para agregarles a todos el evento.

    let actualItem = items[i];                        //Item actual del recorrido se guarda en la variable actualItem
    let textoContenido = actualItem.textContent;      //Texto del item actual del recorrido se guarda en la variable
                                                      // textoContenido

    actualItem.addEventListener("click", () => {      //Se agrega el evento a los li.
        if(!textoContenido.endsWith("COMPLETADO!!")){ //Si el texto no termina en "COMPLETADO!!" se agrega el texto.
          actualItem.textContent =  `${textoContenido} COMPLETADO!!`;
        }
    })
  }
}


