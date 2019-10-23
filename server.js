const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

const login = require('./routes/login');
const shelters = require('./routes/shelters');
const comments = require('./routes/comments');
const tellUs = require('./routes/tellUs');


server.use('/login', login);
server.use('/shelters', shelters);
server.use('/comments', comments);
server.use('./tellus', tellUs);

module.exports = server;