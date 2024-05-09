const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);

// Socket configure
const { Server } = require('socket.io');
const io = new Server(expressServer);

io.on('connection', function(socket){
    console.log('New user Connected');

    socket.on('disconnect', function(){
        console.log('User disconnected');
    });
})
// clinet side configure
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

expressServer.listen(3000, function () {
    console.log('Server is running on port 3000');
});