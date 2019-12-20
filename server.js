const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const items = require('./routes/api/items');

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
  })

const app = express();

app.get('/api/createdb', (req, res) => {
    let sql = 'CREATE DATABASE wootlab';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('database created..');
    });
});

//app.use('/items', items);

port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));