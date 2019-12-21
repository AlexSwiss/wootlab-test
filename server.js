const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const items = require('./routes/api/items');

//connect database file
const db = require('./conn');


const app = express();

//use middlewares
app.use(bodyParser.json());

//create database
app.get('/admin/createdb', (req, res) => {
    let sql = 'CREATE DATABASE wootlab';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('database created..');
    });
});

//create table
app.get('/admin/createposttable', (req,res) => {
    let sql = 'CREATE TABLE items(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), price VARCHAR(255), image TEXT, date DATE, PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('table created..');
    });
});

app.use('/items', items);

port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));