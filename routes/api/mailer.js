const express = require('express'); 
const Router = express.Router();
const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
       user: '9b263e7754c836',
       pass: 'de2915203baccd'
    }
});

Router.get('/send', (req,res) => {
    const message = {
        from: 'alexyikeh@gmail.com', // Sender address
        to: req.body.to,         // List of recipients
        subject: req.body.subject, // Subject line
        text: req.body.text // Plain text body
    }; 
    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
          res.send('mail sent');
        }
    });
});

module.exports = Router;