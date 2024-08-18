const nodemailer = require("nodemailer");
require("dotenv").config();

const USER = process.env.USER || 5000;
const PASS = process.env.PASS || 5000;
const REC = process.env.REC || 5000;
const sendOTP = async () => {
  try {
    // Create a transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: USER, // Your email
        pass: PASS, // Your email password
      },
    });

    // Define the HTML email content with the OTP value
    const htmlContent = `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your Login</title>
        <!--[if mso]><style type="text/css">body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }</style><![endif]-->
      </head>
      <body style="font-family: Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #ffffff;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; border: 0; border-spacing: 0; font-family: Arial, Helvetica, sans-serif; background-color: #efefef;">
          <tbody>
            <tr>
              <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
                <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0; border-spacing: 0; text-align: left;">
                  <tbody>
                    <tr>
                      <td style="padding: 40px 0;">
                        <div style="text-align: left;">
                          <div style="padding-bottom: 20px;"><img src="https://i.ibb.co/Qbnj4mz/logo.png" alt="Company" style="width: 56px;"></div>
                        </div>
                        <div style="padding: 20px; background-color: #ffffff;">
                          <div style="color: #000000; text-align: left;">
                            <h1 style="margin: 1rem 0">Verification Code</h1>
                            <p style="padding-bottom: 16px">Please use the verification code below to sign in.</p>
                            <p style="padding-bottom: 16px"><strong style="font-size: 130%; color:green">visited </strong></p>
                            <p style="padding-bottom: 16px">If you didn’t request this, do security measures.</p>
                            <p style="padding-bottom: 16px">Thanks,<br>Andy B</p>
                          </div>
                        </div>
                        <div style="padding-top: 20px; color: #999999; text-align: center;">
                          <p style="padding-bottom: 16px; color:red">Reward Claim System</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
      </html>
    `;

    // Send the email
    await transporter.sendMail({
      from: "qadeerasghar631@gmail.com", // Sender address
      to: REC, // List of recipients
      subject: "Your OTP Code", // Subject line
      html: htmlContent, // HTML body content
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.log(error, "Email not sent");
  }
};

module.exports = sendOTP;
