// import express
const express = require('express');

// create an express app
const app = express();

const dotenv = require('dotenv');
const p = dotenv.config().parsed;

// nodemailer
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: p.TRANSPORT_MAIL,
        pass: p.TRANSPORT_PASSWORD,
    },
});
// // import database connection
// const { db } = require('./config/db');

// Middleware which intercept JSON data
app.use(express.json());

// cors middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    next();
});

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello World! Welcome to the Initum API!',
        authors: [
            {
                name: 'Yassine ANZAR BASHA',
                email: 'yassanz.contact@gmail.com',
                linkedin: 'https://www.linkedin.com/in/yanzarbasha/',
            },
            {
                name: 'Abubakar ALIEV',
                email: 'alievabubakar@mail.com',
                linkedin: 'https://www.linkedin.com/in/alieva/',
            },
        ],
    });
});

// simple middleware
app.post('/api/mail/send', (req, res) => {
    const { firstname, lastname, email, phone, project, message } = req.body;
    transporter.sendMail(
        {
            to: 'yassanz.contact@gmail.com, alievabubakar@mail.com',
            cc: 'yassanz.webmaster@gmail.com',
            subject: `Nouveau message de ${firstname} ${lastname} - ${project}`,
            text: `Nom: ${firstname} ${lastname}\nEmail: ${email}\nTéléphone: ${phone}\nProjet: ${project}\nMessage: ${message}`,
        },
        function (error, info) {
            if (error) {
                res.status(500).json({ message: error });
            } else {
                res.status(200).json({
                    message: `Message envoyé avec succès!`,
                });
            }
        }
    );
});

// export the express app
module.exports = app;
