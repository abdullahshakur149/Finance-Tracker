const User = require('../models/user');
const bcrypt = require('bcrypt');

// Controller methods
const renderRegister = (req, res) => {
  res.render('register'); // Render the registration form
};

const processRegistration = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      $or: [
        {username: req.body.username},
        {email: req.body.email}

      ]
    });
    if(existingUser){
      console.log(existingUser)
      return res.status(400).json({ status: 'error', message:'User already exists' })
    }
    
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json({ status: 'error', message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const confirmHashedPassword = await bcrypt.hash(req.body.confirmPassword, 10);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
      confirmPassword: confirmHashedPassword
    });

    await newUser.save();

    const userId = savedUser._id.toString();
    
    return res.status(201).json({ status: 'success', message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ status: 'error', message: 'An error occurred.' });
  }
};

module.exports = {
  renderRegister,
  processRegistration
};
