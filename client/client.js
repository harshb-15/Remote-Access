// console.log('dsf');
import { io } from 'https://cdn.socket.io/4.7.4/socket.io.esm.min.js';
const socket = io('http://localhost:3000');
var inputRoom = document.getElementById('client_string')
document.getElementById('btn').addEventListener('click', (e) =>
{
    e.preventDefault();
    socket.emit("join-room", inputRoom.value, msg =>
    {
        document.getElementById('str').innerHTML = msg
    })
})
socket.on('connect', () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on('disconnect', () => {
    console.log(socket.id); // undefined
});
