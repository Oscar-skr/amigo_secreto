// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de amigos
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputNombre = document.querySelector('.input-name');
    const nombre = inputNombre.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    amigos.push(nombre);
    inputNombre.value = '';

    actualizarLista();
}

// Función para actualizar la lista de amigos en la página
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Función que realiza el sorteo aleatorio del amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Primero agrega amigos a la lista.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSecreto}</strong> </li>`;

    amigos.length = 0; // Limpia la lista de amigos después del sorteo
    actualizarLista();
}