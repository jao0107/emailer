const nodemailer = require("nodemailer");

const bodyParser = require('body-parser')

const port = process.env.PORT
const email = process.env.EMAIL
const password = process.env.PASS
var express = require('express')
const app = express()
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Hello!'))

app.listen(port, () => console.log(`Example app listening on port!`))

var smtpConfig = {
       host: 'smtp.gmail.com',
       port: 465,
       auth: {
              user: email,
              pass: password
       }
};
var transporter = nodemailer.createTransport(smtpConfig);
var defaultMailOptions = {

       from: 'joshua.a.tabilog@gmail.com', // sender address (who sends)
       to: 'tabilog.jt@pg.com', // list of receivers (who receives)
       subject: 'i am a default mail' // Subject lineA

};

app.post('/sendEmail', function (req, res) {
       const optionsBody = req.body
       var mailOptions = {

              to: optionsBody.to, // list of receivers (who receives)
              subject: optionsBody.subject, // Subject lineA
              text: optionsBody.text,
              html: "<b>Hello world?</b>"
       };
       transporter.sendMail(mailOptions, function (error) {
              if (error) {
                     res.send(error)
              } else {
                     res.send('email sent!' + mailOptions)
              }
       });
});


app.get('/test', function (req, res) {
       // send mail with defined transport object
       transporter.sendMail(defaultMailOptions, function (error) {
              if (error) {
                     res.send(error)
              } else {
                     res.send('hello correct')
              }
       });
})
