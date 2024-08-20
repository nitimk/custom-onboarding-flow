const User = require('../models/User');

// Create a new user
const createUser = async (req, res) => {
  try {
    const { email, password, aboutMe, streetAddress, city, state, zip, birthdate } = req.body;
    
    // Check if required fields are present
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const newUser = await User.create({
      email,
      password,
      aboutMe,
      streetAddress,
      city,
      state,
      zip,
      birthdate
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error in createUser:', error);
    res.status(500).json({ error: error.message });
  }
};


// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser, getUsers };
