const {sendEmail}=require("./nodemailer")
const otp=require("../Templates/Mail/otp") 
// TODO send mail
sendEmail({
    from: "pooravpatel17@gmail.com",
    to: "patelkrunal8469@gmail.com",
    subject: "Verification OTP",
    html: otp("krunal", "1234"),
    attachments: [],
  });