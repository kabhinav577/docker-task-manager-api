const User = require('../models/user.model');

// Controller to get all users (Admin only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Controller to get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Controller to update a user's role (Admin only)
exports.updateUserRole = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    user.role = req.body.role;
    await user.save();

    res.send({ message: 'User role updated successfully', user });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// Controller to delete a user (Admin only)
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    await user.destroy();
    res.send({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
