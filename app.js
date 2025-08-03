// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para agregar amigos al sorteo [];
let amigos = [];

//Función para agregar amigos al sorteo
function agregarAmigo(){

    let amigo = document.getElementById("amigo").value.trim();

    // Validar si el campo está vacío
    if (amigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }else{
      // Verificar si el nombre ya existe en el array
        if (amigos.includes(amigo)) {
            // Si el nombre ya está en el array, mostrar un mensaje y limpiar la caja de texto
            alert(`El amigo ${amigo} ya está en el sorteo.`);
            limpiarCajaAmigo()
            return;
        } else {
            // Si el nombre no existe, agregarlo al array, mostrarlo en la lista y limpiar la caja de texto
            amigos.push(amigo);
            console.log(`Amigo ${amigo} agregado al sorteo.`);
            console.log(amigos);
            listarAmigos();
            limpiarCajaAmigo();
            return;
        }  
    }
}

function listarAmigos(){
    document.getElementById('listaAmigos').innerHTML = '';
    amigos.forEach(amigo => {
    document.getElementById('listaAmigos').innerHTML += `<li>${amigo}</li>`;
    });
}

function limpiarCajaAmigo(){
    document.getElementById('amigo').value = '';
}

//Sortear amigo secreto
function sortearAmigo(){
    if(amigos.length != 0){
        //definir un index al azar
        let indiceAleatorio = Math.floor(Math.random()* amigos.length);
        //Obtener el amigo en la posición del índice aleatorio
        let amigoSorteado = amigos[indiceAleatorio];
        //Mostrar el amigo sorteado en el HTML
        document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
        //Limpiar lista de amigos
        amigos = [];
        document.getElementById('listaAmigos').innerHTML = '';
    }else{
        //Si no hay amigos en el sorteo, mostrar mensaje
        alert("No hay amigos en el sorteo. Por favor, agrega amigos antes de sortear.");
    }
}
