require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database'); // Import the database configuration

// Import routes
const userRoutes = require('./routes/userRoutes');
const configRoutes = require('./routes/configRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/onboarding', userRoutes); // Route for user onboarding
app.use('/api/config', configRoutes); // Route for admin page configurations
app.use('/api/users', userRoutes); // Route for retrieving user data
app.get('/test', (req, res) => {
  res.send('Test route is working');
});

// Start the server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, async () => {
  // Define the server variable here
  console.log(`Server running on port ${PORT}`);

  // Sync Database
  try {
    await sequelize.sync(); // Remove force: true to avoid dropping the tables each time
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
});

module.exports = { app, server }; // Export the app and the server
