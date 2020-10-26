const express = require('express');
const path = require('path')
const http = require('http')
const socketio = require('socket.io')


const app = express();
const server = http.createServer(app);
const io = socketio(server)

//Set static folder

app.use(express.static(path.join(__dirname,'\client\src')))

//Run when a client connects
io.on('connection',socket => {


socket.emit('message','Welcome to ChatCord');

//Broadcast when user connects
socket.broadcast.emit('message','A user has joined the chat');

//Runs when client disconnects
socket.on('disconnect', ()=>{
    io.emit('message','A user has left the chat');
});

//Listen for Chat Mesage
socket.on('chatMessage',msg => {
    //Emit to everyone
    io.emit('message',msg);
    console.log(msg)
})
})

const PORT = 5000 || process.env.PORT;


server.listen(PORT,() => console.log( `Server running in Port ${PORT}`))