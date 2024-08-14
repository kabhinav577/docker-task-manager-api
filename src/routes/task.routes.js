const express = require('express');
const taskController = require('../controllers/task.controller');
const { authenticate } = require('../middleware/auth.middleware');
const { authorizeRole } = require('../middleware/role.middleware');

const router = express.Router();

router.post('/', authenticate, taskController.createTask);
router.get('/', authenticate, taskController.getTasks);
router.put('/:taskId', authenticate, taskController.updateTask);
router.delete('/:taskId', authenticate, taskController.deleteTask);

module.exports = router;
