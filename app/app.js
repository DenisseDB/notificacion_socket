// conectarse con el back
const socket = io('ws://localhost:3000');
const list = document.getElementById("notificationList")


// ver conexion exitosa
socket.on("connect", () => {
    console.log(socket.id)
})

// recibimos el mensaje del back y lo mostramos
socket.on("notification", (message) => {
    const notification = document.createElement("li")
    notification.innerText = message
    list.appendChild(notification)
})

