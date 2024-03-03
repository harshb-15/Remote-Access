// DONT TOUCH!
const io = require('socket.io')(3000, {
    cors: {
        origin: 'http://127.0.0.1:8080/',
    },
});

function makeid(length) {
    let result = '';
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
    }
    return result;
}

// CONSTANTS

// SOCKET CODE
io.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('test', (idk) => {
        console.log(idk);
    });
    socket.on('get-string', (cb) => {
        var tid = makeid(5);
        cb(tid);
        socket.join(tid);
        console.log(socket.id + ' Joined room: ' + tid);
    });
    socket.on('join-room', (room, cb) =>
    {
        socket.join(room)
        cb(`Room ${room} joined`)
    });
});
