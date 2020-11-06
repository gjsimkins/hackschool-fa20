const express = require('express');
const config = require('./config');
const cors = require('cors');
const defaultRouter = require('./api');
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true }));

server.use('/api', defaultRouter);


server.listen(5000, () => {
    console.log('Server started on port 5000');
});