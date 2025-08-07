const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  teacherName: { type: String, required: true },
  phone: { type: String, required: true },
  preferredCharities: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Registration', RegistrationSchema);
