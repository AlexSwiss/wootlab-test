const express = require('express');
const Router = express.Router();
const paypal = require('paypal-rest-sdk');


Router.get('/create', (req, res) => {
    //build PayPal payment request
    var payReq = JSON.stringify({
        'intent':'sale',
        'redirect_urls':{
            'return_url':'http://localhost:5000/payment/process',
            'cancel_url':'http://localhost:5000/payment/cancel'
        },
        'payer':{
            'payment_method':'paypal'
        },
        'transactions':[{
            'amount':{
                'total':'7.47',
                'currency':'USD'
            },
            'description':'This is the payment transaction description.'
        }]
    });

    paypal.payment.create(payReq, (error, payment) => {
        if(error){
            console.error(error);
        } else {
            //capture HATEOAS links
            var links = {};
            payment.links.forEach((linkObj) => {
                links[linkObj.rel] = {
                    'href': linkObj.href,
                    'method': linkObj.method
                };
            });
        
            //if redirect url present, redirect user
            if (links.hasOwnProperty('approval_url')){
                res.redirect(links['approval_url'].href);
            } else {
                console.error('no redirect URI present');
            }
        }
    });
});

Router.get('/process', function(req, res){
    var paymentId = req.query.paymentId;
    var payerId = { 'payer_id': req.query.PayerID };

    paypal.payment.execute(paymentId, payerId, function(error, payment){
        if(error){
            console.error(error);
        } else {
            if (payment.state == 'approved'){ 
                res.send('payment completed successfully');
            } else {
                res.send('payment not successful');
            }
        }
    });
});

module.exports = Router;