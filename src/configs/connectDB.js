// get the client
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost:3036',
  user: 'root',
  database: 'nodejsdemo'
});

// simple query
//prettier-ignore
connection.query('SELECT * FROM `users`', 
  function (err, results, fields) {
  console.log('>>> check mysql');
  console.log(results); // results contains rows returned by server
});

export default connection;
