const mysql = require('mysql');

//database connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'wootlab'
  });


  db.connect((err) => {
      if(err) {
          throw err;
      } console.log('Database connected..')
  });

module.exports = db;