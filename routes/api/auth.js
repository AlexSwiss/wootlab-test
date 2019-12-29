const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const Router = express.Router();

const db = require('../../conn');

//login an existing user
Router.get('/login', (req, res) => {
	var username = req.body.username;
	var password = req.body.password;
	if (username && password) {
		db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.send('user logged in');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});

//register a new user
Router.get('/register', (req, res) => {
    let user = {
        username: 'wootlab', 
        password: '4321',
        email: 'wootlab@wootlab.com',
    };
	let sql = 'INSERT INTO users SET ?';
    let query = db.query(sql, user, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Registration succesful..');
    });
});

module.exports = Router;