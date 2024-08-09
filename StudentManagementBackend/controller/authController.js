const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel.js');
const roleModel = require('../models/roleModel');

const register = async (req, res) => {
    const { username, password, role_name } = req.body;

    try {
        const [existingUser] = await userModel.getUserByUsername(username);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const [role] = await roleModel.getRoleByName(role_name || 'student');
        if (role.length === 0) {
            return res.status(400).json({ message: 'Invalid role' });
        }

        const roleId = role[0].id;
        const [result] = await userModel.createUser(username, hashedPassword, roleId);

        res.status(201).json({ id: result.insertId, username, role: role_name || 'student' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const [user] = await userModel.getUserByUsername(username);
        if (user.length === 0) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const validPassword = await bcrypt.compare(password, user[0].password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign(
            { id: user[0].id, username: user[0].username, role: user[0].role_name },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = { register, login };
