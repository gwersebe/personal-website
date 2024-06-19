const functions = require('firebase-functions');
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');

admin.initializeApp()

//google account credentials used to send email
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'gchemmes20@gmail.com',
    pass: '********'
  }
});

exports.sendEmail = functions.https.onRequest((req, res) => {


  const email = req.query.email;
  const name = req.query.name;
  const message = req.query.message;

  const mailOptions = {
    from: email ,
    to: `greghemmes@outlook.com`,
    subject: '  ' + name,
    html: `
      <p>
        <b>Email: </b>${email}<br>
        <b>Name: </b>${name}<br>
        <b>Message: </b>${message}<br>
      </p>
    `,
    replyTo: email

  };
  const cors=require("cors");
  const corsOptions ={
     origin:'*', 
     credentials:true,            //access-control-allow-credentials:true
     optionSuccessStatus:200,
  }

  cors(corsOptions)(req,res,()=>{
    console.log("CORS Enabled");
  })

//  res.set('Access-Control-Allow-Origin', '*');
  // Set the Access-Control-Allow-Origin header to allow any domain
  // res.set('Access-Control-Allow-Methods', 'GET, POST'); // Set the Access-Control-Allow-Methods header to allow only GET and POST requests
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent');
    }
  });
});










// const functions = require('firebase-functions');
// const admin = require("firebase-admin")
// const nodemailer = require('nodemailer');

// admin.initializeApp()


// //google account credentials used to send email
// var transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: 'gchemmes20@gmail.com',
//         pass: 'efjrrrcxtvcpkuyd'
//     }
// });


// exports.sendEmail = functions.https.onRequest((req, res) => {
//     var email = req.query.email;
//     var name = req.query.name;
//     var message = req.query.message;
//     // .document('orders/{orderId}')
//     // .onCreate((snap, context) => {

//         const mailOptions = {
//             from: 'gchemmes20@gmail.com',
//             to: `gchemmes20@gmail.com`,
//             subject: 'New Website Message from ' + name,
//             html: `
//                                 <p>
//                                     <b>Email: </b>${email}<br>
//                                     <b>Name: </b>${name}<br>
//                                    <b>Message: </b>${message}<br>
//                                 </p>`
//         };


//         return transporter.sendMail(mailOptions, (error, data) => {
//             if (error) {
//                 console.log(error)
//                 return
//             }
//             console.log("Sent!")
//         });
//     // });
// });





