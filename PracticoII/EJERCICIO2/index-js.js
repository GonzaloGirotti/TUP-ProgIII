let input_field = document.getElementById("text-input");
let list = document.getElementById("list");

document.getElementById("adding-button").addEventListener("click", () => {
    let input_text = input_field.value;
    let new_list_element = document.createElement("li");

    let delete_button = document.createElement("button");
    delete_button.style.width = "5vw";
    delete_button.style.height = "2vw";
    delete_button.textContent = "ELIMINAR ELEMENTO!"


    new_list_element.textContent = input_text;
    list.appendChild(new_list_element);
    
    let last_child = list.lastChild;

    delete_button.addEventListener("click", () => {
            last_child.remove();
            delete_button.remove();
        }  
    );
    list.appendChild(delete_button) 

    input_field.value = "";
});