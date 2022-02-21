"use strict";
import nodemailer from 'nodemailer';
import email_server from '../../config/mailing.js';
import path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
    // async..await is not allowed in global scope, must use a wrapper
    async mailing({nombre, email}) {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();
    
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: email_server.host,
            port: email_server.port,
            secure: true, // true for 465, false for other ports
            auth: {
                user: email_server.email, // generated ethereal user
                pass: email_server.apiKey, // generated ethereal password
            },
        });
    
        
        let imagePath = path.join(__dirname, '/files/registro_correo.png');
        
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: email_server.from, // sender address
            to: `${email}`, // list of receivers
            subject: email_server.subject, // Subject line
            //text: "Hello world?", // plain text body
            html:
                `<h1 style='text-align: center; text-transform: uppercase;'>¡Hola ${nombre}!</h1><br>
                <img style='width: 100%;' src="cid:image_cid" alt="Imagen de confirmacion de registro"> `, // html body
            attachments: [{
                filename: 'registro_correo.png',
                path: `${imagePath}`,
                cid: 'image_cid' //same cid value as in the html img src
            }]
        });
    
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
}
