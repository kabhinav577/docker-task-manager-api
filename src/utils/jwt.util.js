const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

exports.generateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: '24h',
  });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
