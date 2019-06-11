const nodemailer = require("nodemailer");
async function main(){

    

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport

//   var attachFiles = attachments?attachments:[];
//   var attachObjArray = [];
//   _.forEach(
//           attachFiles,        
//           filePath=>attachObjArray.push({path:filePath})
//   );    
var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true // use SSl
};
var transporter = nodemailer.createTransport(smtpConfig);
  var mailOptions = {

  
          from: 'joshua.a.tabilog@gmail.com', // sender address (who sends)
          to: 'tabilog.jt@pg.com', // list of receivers (who receives)
          subject: 'joshua.a.tabilog@gmail.com', // Subject line
          html: 'tabilog.jt@pg.com'  //attachment path with file name     
  };

  // send mail with defined transport object
 transporter.sendMail(mailOptions, function(error) {
        if(error){
               return console.log(error);
        } else {
               console.log('Message sent: ');
        }
        done();
 });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);