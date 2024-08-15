const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

// Login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Signup a user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserIdByEmail = async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      res.status(200).json({ userId: user._id });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user by email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { signupUser, loginUser,getUserIdByEmail };
