const mongoose = require('mongoose');

// Replace 'finance-tracker' with your actual database name
const dbName = 'finance-tracker';
const dbURL = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

module.exports = mongoose.connection;
