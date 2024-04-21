const nodemailer = require('nodemailer');
const sendSGMail = async ({
    to,
    sender,
    subject,
    html,
    attachments,
    text,
  }) => {
    try {
        const from = "pooravpatel730@gmail.com";

    const msg = {
      to: to, // Change to your recipient
      from: from, // Change to your verified sender
      subject: subject,
      html: html,
      // text: text,
      attachments,
    };
    // Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'pooravpatel730@gmail.com',
        pass: 'hkuw nqla fysb ggzk'
    }
});
    // Send the email
 return transporter.sendMail(msg, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
// Define email options
// let mailOptions = {
//     from: from,
//     to: to,
//     subject: subject,
//     text: text,
//     html: html,
//     attachments,
// };
    
    // return sgMail.send(msg);
    } catch (error) {
        console.log(error);
    }
  }
  exports.sendEmail = async (args) => {
    if (!process.env.NODE_ENV === "development") {
      return Promise.resolve();
    } else {
      return sendSGMail(args);
    }
  };

