const jwt = require('jsonwebtoken');
const { getRoleById } = require("../models/roleModel.js")

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

const authorizeRole = (roles) => {

  return async (req, res, next) => {
    role = await getRoleById(req.user.id)
    if (!roles.includes(role[0][0].role_name)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};

module.exports = { authenticateToken, authorizeRole };
