const bcrypt = require('bcrypt');
const User = require('../models/user'); // Import your User model

const loginController = {
  renderLogin: (req, res) => {
    // Add code to render the login page
    res.render('login');
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(400).json({ status: 'error', message: 'User not found' });
      }

      const passwordMatched = await bcrypt.compare(password, user.password);

      if (!passwordMatched) {
        return res.status(400).json({ status: 'error', message: 'Incorrect password' });
      }

      // Password matches, user authenticated
      return res.status(200).json({ status: 'success', message: 'Logged in successfully' });
    } catch (error) {
      return res.status(500).json({ status: 'error', message: 'An error occurred.' });
    }
  }
};

module.exports = loginController;
