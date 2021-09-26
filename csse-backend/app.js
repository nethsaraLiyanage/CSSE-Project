// const express = require('express');
// const cors = require("cors");
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const router = express.Router({});
// var sql = require("mssql");
// const app = express();
// const http = require('http')
// const dbConfig = require("./dbconfig");
// const dbOperations = require("./dboperations");

// app imports  
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router({});
require('dotenv/config')

//other imports
const dbOperations = require("./dboperations");

//routes imports
const health = require('./health')
const test = require('./test')

const PORT = process.env.PORT || 8080;

//Middleware
app.use(bodyParser.json())
app.use(cors())

//routes
app.use('/health', health)
app.use('/test', test)

//stablish MSSQL Db connection
dbOperations;

//server start
app.listen(PORT, () =>{
    console.log('server is at', PORT);
});