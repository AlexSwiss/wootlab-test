const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = require('../../conn');

//add item
router.get('/additem', (req, res) => {
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
router.get('/', (req, res) => {
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


module.exports = router;