// conexion con el socket
const socket = io('ws://localhost:8080');

// listener en el cliente cuando se envie una notificacion
socket.on('notification', message => {
    // div para ver la notificacion
    const el = document.createElement('div');
    // lo que esta dentro es el mensaje
    el.textContent = message;
    // lo agregamos al html para que aparezca en interfaz
    document.body.appendChild(el)
});

// send the message - client
// listening
document.querySelector('button').onclick = () => {
    // tomar el texto con su valor
    const message = document.querySelector('#notificationInput').value;
    // emit el evento y el mnesje
    socket.emit('notification', message)
}