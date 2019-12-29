const express = require('express');
const session = require('express-session');
const Router = express.Router();

Router.get('/', (req,res) => {
    //get cart from session
   
    cart = req.body;
    req.session.cart = cart;

    var displayCart = {items: [], total: 0};
    var total = 0;

    if(req.session.cart){
        displayCart.items.push(cart);
        total += (cart.quantity * cart.price);
        displayCart.total = total;
    }
    res.send({cart: displayCart});
});

module.exports =  Router;