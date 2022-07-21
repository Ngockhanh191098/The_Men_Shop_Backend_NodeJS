const nodemailer = require("nodemailer");
const { FROM_EMAIL, FROM_PWD } = require('../config/email.config');

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(toEmail, subject, content, html) {
  // Generate test SMTP service account from ethereal.email

  // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: FROM_EMAIL, // generated ethereal user
      pass: FROM_PWD, // generated ethereal password
    },
});
  // send mail with defined transport object
    let info = await transporter.sendMail({
    from: FROM_EMAIL, // sender address
    to: toEmail, // list of receivers
    subject: subject, // Subject line
    text: content, // plain text body
    html: html
    })
};

module.exports = sendEmail;