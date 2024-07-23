const nodeMailer = require("nodemailer");

module.exports =  EmailSender = (option = {}) => {
    const Transporter = nodeMailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "erfivampier@gmail.com",
          pass: "",
        }
    })

    if(option) {
        const result = Transporter.sendMail(option);
        result.then(console.log("email has sent successfully")).catch(err => {
            if(err) console.log("somthing went wrong");
        })
    }
}