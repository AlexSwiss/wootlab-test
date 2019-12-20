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

//create database
app.get('/api/createdb', (req, res) => {
    let sql = 'CREATE DATABASE wootlab';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('database created..');
    });
});

//create table
app.get('/api/createposttable', (req,res) => {
    let sql = 'CREATE TABLE items(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), image TEXT, date DATE, PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('table created..');
    });
});

//app.use('/items', items);

port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));