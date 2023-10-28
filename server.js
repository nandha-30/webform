const express = require('express');
const app = express();
const nodemailer=require("nodemailer");

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static('public'));
app.use(express.json()); 

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/contactform.html');
})
app.post('/', (req,res) => {
  console.log(JSON.stringify(req.body) +'body');
    const transporter = nodemailer.createTransport({
        service:'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values
          user: 'nandhamk8@gmail.com',
          pass: 'bowxotdvurgyljch'
        }
      });
    
    const mailOptions = {
        from: '"maxpath" <nandhamk8@gmail.com>', // sender address
        to: "nandhakishan.m@gmail.com", // list of receivers
        subject: "New resume submitted", // Subject line
        html: `<p>Hi Sir, You have received a new job application for Job ID: <strong>${req.body.jobid}</strong>.</p>
        <h3>Applicant Details:</h3>
        <ul>
          <li><strong>First Name:</strong> ${req.body.fname}</li>
          <li><strong>Last Name:</strong> ${req.body.lname}</li>
          <li><strong>Email:</strong> ${req.body.email}</li>
          <li><strong>Contact Number:</strong> ${req.body.contact}</li>
          <li><strong>Job ID:</strong> ${req.body.jobid}</li>
        </ul>
        <p>You can find the applicant's resume in the attachments.</p>`,                  
      }
    /*transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            return console.log(error);
        }
        else{
            console.log('Message sent successfully');
        }
    })*/
})

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})