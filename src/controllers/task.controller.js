const taskService = require('../services/task.service');

exports.createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.user.id, req.body);
    res.status(201).send(task);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTasks(req.user.id, req.query);
    res.send(tasks);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await taskService.updateTask(
      req.user.id,
      req.params.taskId,
      req.body
    );
    res.send(task);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await taskService.deleteTask(req.user.id, req.params.taskId);
    res.status(204).send();
  } catch (err) {
    res.status(400).send(err.message);
  }
};
