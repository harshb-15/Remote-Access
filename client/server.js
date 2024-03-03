// console.log('dsf');
import { io } from 'https://cdn.socket.io/4.7.4/socket.io.esm.min.js';
const socket = io('http://localhost:3000');
console.log('sdf');
var id = '';
document.getElementById('btn1').addEventListener('click', (e) => {
    e.preventDefault();
    socket.emit('get-string', (msg) => {
        document.getElementById('str').innerHTML = 'Your String is ' + msg;
    });
});
socket.on('connect', () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on('disconnect', () => {
    console.log(socket.id); // undefined
});



const videoElem = document.getElementById('video');
const startElem = document.getElementById('start');
const stopElem = document.getElementById('stop');
// Options for getDisplayMedia()
var displayMediaOptions = {
    video: {
        cursor: 'always',
        height: 1000,
        width: 1200,
    },
    audio: false,
};
// Set event listeners for the start and stop buttons
startElem.addEventListener(
    'click',
    function (evt) {
        startCapture();
    },
    false
);
// Stop the screen capture
stopElem.addEventListener(
    'click',
    function (evt) {
        stopCapture();
    },
    false
);
// Start the screen capture
async function startCapture() {
    try {
        videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(
            displayMediaOptions
        );
        dumpOptionsInfo();
    } catch (err) {
        // Handle error
        console.error('Error: ' + err);
    }
}
// Stop the stream
function stopCapture(evt) {
    let tracks = videoElem.srcObject.getTracks();
    tracks.forEach((track) => track.stop());
    videoElem.srcObject = null;
}
// Dump the available media track capabilities to the console
function dumpOptionsInfo() {
    const videoTrack = videoElem.srcObject.getVideoTracks()[0];
    console.info('Track settings:');
    console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
    console.info('Track constraints:');
    console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
}