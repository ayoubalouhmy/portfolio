require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

// Test de connexion au serveur SMTP
transporter.verify((error, success) => {
  if (error) {
    console.log("Erreur de configuration Nodemailer:", error);
  } else {
    console.log("Serveur SMTP prêt à envoyer des messages");
  }
});

// Route POST pour l'envoi d'email
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation simple
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`, // L'expéditeur affiché
    to: process.env.GMAIL_USER, // L'email de destination (le vôtre)
    subject: `Nouveau message de contact: ${name}`,
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email envoyé avec succès.' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    res.status(500).json({ error: 'Échec de l\'envoi de l\'email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server en cours d'exécution sur http://localhost:${PORT}`);
});
