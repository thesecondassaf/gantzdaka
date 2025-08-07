const express = require('express');
const { authenticate, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/gan', authenticate, authorize('gan'), (req, res) => {
  res.json({ message: 'Gan protected route' });
});

router.get('/charity', authenticate, authorize('charity'), (req, res) => {
  res.json({ message: 'Charity protected route' });
});

router.get('/donor', authenticate, authorize('donor'), (req, res) => {
  res.json({ message: 'Donor protected route' });
});

router.get('/admin', authenticate, authorize('admin'), (req, res) => {
  res.json({ message: 'Admin protected route' });
});

module.exports = router;
