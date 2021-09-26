const connection = dboperations.getConnection;
const express = require('express')
const app = express()
var Request = require('tedious').Request
var TYPES = require('tedious').TYPES;

const router = express.Router({});


router.get('/', async (req, res, _next) => {

  res.send(connection)

  // request = new Request("select * from dbo.GeneralUser", function (err) {
  //   if (err) {
  //     console.log(err);
  //   }
  // });
  // request.on('row', function (columns) {
  //   columns.forEach(function (column) {
  //     if (column.value === null) {
  //       console.log('NULL');
  //     } else {
  //       console.log("Product id of inserted item is " + column.value);
  //     }
  //   });
  // });

  // // Close the connection after the final event emitted by the request, after the callback passes
  // request.on("requestCompleted", function (rowCount, more) {
  //   connection.close();
  // });
  // connection.execSql(request);

});
// export router with all routes included
module.exports = router;


connection.on('connect', function (err) {
  // If no error, then good to proceed.  
  console.log("Connected");
  executeStatement1();
});
