const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const router = express.Router({});
var sql = require("mssql");
const app = express();
const http = require('http')
require('dotenv/config');
const dbConfig = require("./dbconfig");
const dbOperations = require("./dboperations");

const health = require('./health')

const PORT = process.env.PORT || 8090;

//Middleware
app.use(cors())
app.use(bodyParser.json())

//routes
app.use('/health', health)

//socket.io implementation
const server = http.createServer(app)

//stablish MSSQL Db connection
dbOperations.getConnection;





//server start
server.listen(PORT, () =>{
    console.log('server is up and running on port :' + PORT);
});

