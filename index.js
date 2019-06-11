const nodemailer = require("nodemailer");
var express = require('express')
var app = express()


let testAccount = await nodemailer.createTestAccount();

var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465
};
var transporter = nodemailer.createTransport(smtpConfig);
var mailOptions = {


       from: 'joshua.a.tabilog@gmail.com', // sender address (who sends)
       to: 'tabilog.jt@pg.com', // list of receivers (who receives)
       subject: 'joshua.a.tabilog@gmail.com', // Subject line
       html: 'tabilog.jt@pg.com'  //attachment path with file name     
};

app.get('/start', function (req, res) {
         // send mail with defined transport object
 transporter.sendMail(mailOptions, function(error) {
       if(error){
              res.send('hello error')
       } else {
              res.send('hello correct')
       }
       done();
});

});
