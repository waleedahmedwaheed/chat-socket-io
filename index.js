var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
	//res.send('<h1>Hello World</h1>');
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  
  socket.on('little_newbie', function(username) {
        socket.username = username;
    }); 
	socket.on('chat message', function(msg){
		//io.emit(socket.username + 'chat message', msg);
		io.emit('chat message', msg);
		//socket.broadcast.emit('message', 'Another client has just connected!');
	});
});

 
/* io.sockets.on('connection', function (socket, username) {
    // When the client connects, they are sent a message
    socket.emit('message', 'You are connected!');
    // The other clients are told that someone new has arrived
    socket.broadcast.emit('message', 'Another client has just connected!');

    // As soon as the username is received, it's stored as a session variable
    socket.on('little_newbie', function(username) {
        socket.username = username;
    });

    // When a "message" is received (click on the button), it's logged in the console
    socket.on('chat message', function (message) {
        // The username of the person who clicked is retrieved from the session variables
        console.log(socket.username + ' is speaking to me! They\'re saying: ' + message);
		socket.emit(' is speaking to me! They\'re saying: ' , message);
    }); 
});  */
 
http.listen(3001,function(){
	console.log('listening on *:3001');
});