const authService = require('../services/auth.service');

exports.register = async (req, res) => {
  try {
    const token = await authService.register(req.body);
    res.send({ token });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.login = async (req, res) => {
  try {
    const token = await authService.login(req.body);
    res.send({ token });
  } catch (err) {
    res.status(400).send(err.message);
  }
};
