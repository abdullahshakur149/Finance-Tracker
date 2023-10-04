const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  phoneNumber: String,
  addressLine1: String,
  addressLine2: String,
  postal: String,
  state: String,
  area: String,
  emailID: String,
  education: String,
  country: String,
  region: String
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
