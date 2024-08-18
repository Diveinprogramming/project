const express = require("express");
const app = express();
const sendOTP = require("./sendEmail");

app.get("/text", (req, res) => {
  sendOTP();
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Info</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          h1 {
            color: #333;
            font-size: 24px;
            margin-bottom: 10px;
          }
          p {
            color: #555;
            font-size: 18px;
            margin: 5px 0;
          }
          a {
            color: #1e90ff;
            text-decoration: none;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Contact Me</h1>
          <p>Please contact me via:</p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/923472622015" target="_blank">+923472622015</a></p>
          <p><strong>Email:</strong> <a href="mailto:qadeerkhanr5@gmail.com">qadeerkhanr5@gmail.com</a></p>
        </div>
      </body>
      </html>
    `);
});

app.listen(3000, () => {
  console.log("started");
});
