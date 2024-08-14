const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const jwtUtil = require('../utils/jwt.util');

exports.register = async ({ username, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashedPassword });
  return jwtUtil.generateToken(user);
};

exports.login = async ({ username, password }) => {
  const user = await User.findOne({ where: { username } });
  if (!user) throw new Error('Invalid username or password.');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid username or password.');

  return jwtUtil.generateToken(user);
};
