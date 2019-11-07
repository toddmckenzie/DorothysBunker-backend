const servers = require('./server.js');

const port = process.env.PORT || 5000;

const socket = require('socket.io');
const io = socket(servers.serverIO);

io.on('connection', function(socket){
    socket.on('shelter', function(msg) {
        io.emit(`${msg.shelter}`, msg)
        console.log(msg)
    })
})


servers.server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

servers.serverIO.listen(5001, () => {
    console.log('ServerIO is listening on port 5001')
})
