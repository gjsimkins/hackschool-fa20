const express = require('express');
const config = require('./config');
const cors = require('cors');
const defaultRouter = require('./api');
const mongoose = require('mongoose');

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true }));

server.use('/api', defaultRouter);

mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

server.listen(config.PORT, () => {
    console.log('Server started on port ' + config.PORT);
});