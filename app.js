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
            console.log(`El amigo ${amigo} ya está en el sorteo.`);
            limpiarCaja()
            return;
        } else {
            amigos.push(amigo);
            console.log(`Amigo ${amigo} agregado al sorteo.`);
            console.log(amigos);
            limpiarCaja()
            listarAmigos();
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

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}
