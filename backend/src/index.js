require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/gan_tzedaka';

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const publicRoutes = require('./routes/public');

app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);
app.use('/', publicRoutes);

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.json({ message: 'Gan Tzedaka API' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
