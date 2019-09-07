const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

const login = require('./routes/login')
const shelters = require('./routes/shelters')


server.use('/login', login)
server.use('/shelters', shelters)

module.exports = server;