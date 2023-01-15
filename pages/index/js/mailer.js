const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

// parse incoming request as JSON
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// define the endpoint for the form submit request
app.post('/send-email', (req, res) => {
  // access the form data from the request body
  const formData = req.body;
  console.log(formData);
  
  // create the transporter object
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
        user: '',
        pass: ''
    }
  });

  // define the email options
  let mailOptions = {
    from: `${formData.name} <${formData.email}>`, 
    to: 'webkpi21@gmail.com', 
    subject: formData.theme, 
    text: formData.message 
  };

  // send the email using the transporter object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: "Error occured while sending email" });
    } else {
      console.log('Email sent: ' + info.response);
      res.send({ message: "Email sent successfully" });
    }
  });
});

// start the server

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
