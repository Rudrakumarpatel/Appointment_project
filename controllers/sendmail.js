const nodemailer = require("nodemailer");


const sendMail = async (req, res) => {

  let testAccount = await nodemailer.createTestAccount();

  let name  = req.query['username']
  let e = req.query['email'];

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'wilburn.howell36@ethereal.email',
        pass: 'P5aKFwuc3ED6ayg8pU'
    }
  });

  console.log(name,e);
  let info = await transporter.sendMail(
    {
      from: `demo@gmail.com`, // sender address

      to: `${e}`, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    })

  console.log("Message sent: %s", info.messageId);
  
  res.send(info);
}

module.exports = sendMail;