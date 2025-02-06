// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo para almacenar los nombres de los amigos

let amigos = [];

//Funcion para añadir un amigo a la lista

function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');

    const nombreAmigo = inputAmigo.value.trim(); //Eliminamos espacios extras

    if(nombreAmigo !== ""){
        amigos.push(nombreAmigo); //Añadir el nombre del arreglo
        const li = document.createElement('li');

        li.textContent = nombreAmigo;
        listaAmigos.appendChild(li); //Mostrar el nombre del amigo
        inputAmigo.value = ""; //Limpiamos el input
        inputAmigo.focus(); //Volvemos a enfocar el input
    }else{
        alert("Por favor, escribe un nombre antes de añadirlo.");
    }
}

//Funcion para sortear un amigo de la lista

function sortearAmigo(){
    const resultado = document.getElementById('resultado');

    if(amigos.length === 0){
        alert("Debe haber al menos un amigo en la lista para hacer el sorteo");
        return;
    }

    //Seleccionamos un amigo al azar

    const indexSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indexSorteado];

    //Mostramos el resultado

    resultado.innerHTML = ""; //Limpiamos el resultado previo
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);

    alert(`¡El amigo secreto es: ${amigoSorteado}!`);
}