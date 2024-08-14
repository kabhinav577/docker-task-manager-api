const express = require('express');
const userController = require('../controllers/user.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { authorizeRole } = require('../middleware/role.middleware');

const router = express.Router();

// Route to get all users (only accessible by Admin)
router.get(
  '/',
  authenticate,
  authorizeRole(['Admin']),
  userController.getAllUsers
);

// Route to get a specific user by ID
router.get('/:id', authenticate, userController.getUserById);

// Route to update a user's role (only accessible by Admin)
router.put(
  '/:id/role',
  authenticate,
  authorizeRole(['Admin']),
  userController.updateUserRole
);

// Route to delete a user (only accessible by Admin)
router.delete(
  '/:id',
  authenticate,
  authorizeRole(['Admin']),
  userController.deleteUser
);

module.exports = router;
