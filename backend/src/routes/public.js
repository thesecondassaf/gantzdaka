const express = require('express');
const Contact = require('../models/Contact');
const Registration = require('../models/Registration');

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: 'Message received' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { name, city, teacherName, phone, preferredCharities } = req.body;
    const registration = new Registration({ name, city, teacherName, phone, preferredCharities });
    await registration.save();
    res.status(201).json({ message: 'Registration submitted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
