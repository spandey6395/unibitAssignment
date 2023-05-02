const User = require('../models/User');

const UserController = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username, password });
      if (user) {
        return res.status(200).json({ message: 'Login successful' });
      }
      return res.status(401).json({ message: 'Invalid credentials' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = new User({ username, password });
      await user.save();
      return res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = UserController;
