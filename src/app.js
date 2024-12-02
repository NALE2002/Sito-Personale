const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const PORT = 3000;
const multer = require('multer');
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.post('/send-email',upload.none(), async(req,res) => {

    const {email , subject, message} = req.body;
    console.log("dati ricevuti: ", req.body);

    try{
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'nale2002pers@gmail.com',
                pass: 'pqyn ccis vbgx llzm',
            },
        });
        
        const mailOptions = {
            from: email,
            to: 'nale2002pers@gmail.com',
            subject: subject,
            text: `Email: ${email}\n\nMessaggio:\n${message}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send("Messaggio inviato con successo!");

    }   catch (error){
        console.error("Errore durante l'invio del messaggio",error);
        res.status(500).send("Errore durante l'invio del messaggio");
    }   

});

app.listen(PORT, () => {
    console.log('server in esecuzione su https:localhost:',PORT);
});