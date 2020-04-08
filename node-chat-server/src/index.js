const express = require('express')
const app = express();

const http = require('http');
const server = http.createServer(app);

const io = require('socket.io').listen(server);
//const io = socketIO(server);

const port = process.env.PORT || 8000;

io.on('connection', (socket) => {
    console.log('user connected');
	socket.on('join', function(data){
		socket.join(data.room);
		console.log(data.user + "connected" + data.room);
		socket.broadcast.to(data.room).emit('User joined',{user:data.user, message:'has joined'});
	});
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
