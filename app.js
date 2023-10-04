const express = require('express');
const mongoose = require('mongoose'); // Import Mongoose
const app = express();
const dbConnection = require('./public/db/config'); // Adjusted path
const profileRoute = require('./routes/profile'); // Adjust the path as needed

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for parsing application/json
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes setup
app.use('/', require('./routes/index.js'));
app.use('/', require('./routes/login.js'));
app.use('/', require('./routes/register.js'));
app.use('/', require('./routes/userDashboard.js'));
app.use('/', require('./routes/profile.js'));
app.use('/', profileRoute); // Use the correct path


app.get('/dashboard', (req, res, next) => {
  res.render('user-dashboard/index'); // Adjust the path to your dashboard view
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
