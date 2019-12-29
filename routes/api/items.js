const express = require('express');
const mysql = require('mysql');
const Router = express.Router();

const db = require('../../conn');

//add item
Router.get('/additem', (req, res) => {
    let item = {
            title: 'Beach shirt with quality design', 
            body: 'strong quality shirt for beach size SM',
            price: 'N1500',
            quantity: "4"
        };
    let sql = 'INSERT INTO items SET ?';
    let query = db.query(sql, item, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('item added..');
    });
});

//get all items
Router.get('/', (req, res) => {
    let sql = 'SELECT * FROM items';
    let query = db.query(sql, (err, results) => {
        if(err) {
            return res.send(err);
        } else {
            return res.json({
                data: results
            });
        }
        
    });
});

//get a single item
Router.get('/${id}', (req, res) => {
		let sql = 'SELECT * FROM items WHERE id = ?';
			let query = db.query(sql, (err, results) => {
                if(err) {
                    return res.send(err);
                } else {
                    return res.json({
                        data: results
                    });
                }
		});
});



module.exports = Router;