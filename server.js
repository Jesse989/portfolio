const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

require('dotenv').config()

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.post('/api', async (req, res) => {
  let { name, email, website, budget, timeline, description } = req.body;
  // create email:

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PW // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Jesse Neumann" <${process.env.EMAIL}>`,
    to: email, // list of receivers
    bcc: process.env.EMAIL,
    subject: `${name}, thanks for your interest.`, // Subject line
    html: createEmail(req.body)
  });

  if (info.accepted[0] === email)
    res.status(200).json({ status: "success"})
  else
    res.status(505).json({ status: "failed"})
})

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
})

function createEmail({ name, email, website, budget, timeline, description }) {
  return `<h1>Hello ${name}, </h1>
          <h2>your website at ${website} looks great!</h2>
          <h3>I would like to talk to you about your budget of ${budget}<h3>
          <h3>and your timeline of ${timeline}.</h3>
          <p> your description of ${description} sounds pretty cool.</p>`
}
