// app imports  
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router({});
const { Sequelize } = require('sequelize');
require('dotenv/config')

//other imports
const dbOperations = require("./dboperations");
const sequelize = require("./sequelize");

//routes imports
const health = require('./health');
const test = require('./test');
const UserRoute = require('./routes/UserRoute');
const RequisitionRoute = require('./routes/RequisitionRoute');
const LoginRoutes = require('./routes/LoginRoutes');
const LineManagerRoutes = require('./routes/LineManagerRoutes');
const ItemRoutes = require('./routes/ItemRoutes');
const SupplierRoutes = require('./routes/SupplierRoutes');


const PORT = process.env.PORT || 8080;

//Middleware
app.use(bodyParser.json())
app.use(cors())

//routes
app.use('/health', health);
app.use('/user', UserRoute);
app.use('/requisition', RequisitionRoute);
app.use('/auth', LoginRoutes);
app.use('/lineManager', LineManagerRoutes);
app.use('/item', ItemRoutes);
app.use('/supplier', SupplierRoutes);

//stablish MSSQL Db connection
dbOperations.getConnection;

//initilze seqlize
sequelize.getConnection

//server start
app.listen(PORT, () =>{
    console.log('server is at', PORT);
});