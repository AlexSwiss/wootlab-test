const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mysql = require('mysql');
const paypal = require('paypal-rest-sdk');
const session = require('express-session');


const auth = require('./routes/api/auth');
const items = require('./routes/api/items');
const payment = require('./routes/api/paypal');

//connect database file
const db = require('./conn');


const app = express();

//use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


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

//paypal configuration
const client_id = 'ARiV9dgNKmSNY0XgcrF9KXxcFXQQx8jy9CxEP4Wcc7_E_ULw3o3jFXbJJwD8P6ETrszPQWUQo4-f9QrK';
const secret = 'EOtHJme_RQeK89uOarq8V4S9AGgMWX1OcGEtai7wZdEqRPs1b-fniCfqDMTe2sHYcl9lu9JqLIKv3Q5q';

//configuration for sandbox environment
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': client_id,
    'client_secret': secret
});


//use routes
app.use('/auth', auth);
app.use('/api/items', items);
app.use('/api/payment', payment);

port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));