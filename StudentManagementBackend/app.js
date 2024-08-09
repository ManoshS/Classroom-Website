
require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// require('dotenv').config();
// const express = require('express');
// const mysql = require('mysql2');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const app = express();
// const port = 3000;

// app.use(express.json());

// // Create a connection pool
// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// const promisePool = pool.promise();
// app.use(express.json());




// // Register a new user
// app.post('/register', async (req, res) => {
//     const { username, password, role_name } = req.body;
  
//     try {
//       // Check if the user already exists
//       const [existingUser] = await promisePool.query('SELECT * FROM users WHERE username = ?', [username]);
//       if (existingUser.length > 0) {
//         return res.status(400).json({ message: 'User already exists' });
//       }
  
//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 10);
  
//       // Get the role ID
//       const [role] = await promisePool.query('SELECT id FROM roles WHERE role_name = ?', [role_name || 'student']);
//       if (role.length === 0) {
//         return res.status(400).json({ message: 'Invalid role' });
//       }
//       const roleId = role[0].id;
  
//       // Insert the new user into the database
//       const [result] = await promisePool.query('INSERT INTO users (username, password, role_id) VALUES (?, ?, ?)', [username, hashedPassword, roleId]);
  
//       // Respond with the new user ID
//       res.status(201).json({ id: result.insertId, username, role: role_name || 'student' });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   });


// // User login
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
  
//     try {
//       // Check if the user exists
//       const [user] = await promisePool.query(`
//         SELECT users.id, users.username, users.password, roles.role_name 
//         FROM users 
//         JOIN roles ON users.role_id = roles.id 
//         WHERE username = ?`, [username]);
  
//       if (user.length === 0) {
//         return res.status(400).json({ message: 'Invalid username or password' });
//       }
  
//       // Compare the password
//       const validPassword = await bcrypt.compare(password, user[0].password);
//       if (!validPassword) {
//         return res.status(400).json({ message: 'Invalid username or password' });
//       }
  
//       // Generate a JWT token
//       const token = jwt.sign(
//         { id: user[0].id, username: user[0].username, role: user[0].role_name },
//         process.env.JWT_SECRET,
//         { expiresIn: process.env.JWT_EXPIRES_IN }
//       );
  
//       // Respond with the token
//       res.json({ token });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   });


//   const authenticateToken = (req, res, next) => {
//     const token = req.header('Authorization').split(' ')[1]; // Extract token from the header
//     if (!token) return res.sendStatus(401); // If no token, unauthorized
  
//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//       if (err) return res.sendStatus(403); // If token invalid, forbidden
//       req.user = user; // Attach user info to the request
//       next(); // Move to the next middleware
//     });
// };
  
// const authorizeRole = (roles) => {
//     return (req, res, next) => {
//       if (!roles.includes(req.user.role)) {
//         return res.status(403).json({ message: 'Access denied' });
//       }
//       next();
//     };
// };
  
// //----------------
// app.get('/teacher-dashboard', authenticateToken, authorizeRole(['teacher', 'principal']), (req, res) => {
//     res.json({ message: 'Welcome to the teacher dashboard', user: req.user });
//   });
  
//   // Example: Only principals can access this route
//   app.get('/principal-dashboard', authenticateToken, authorizeRole(['principal']), (req, res) => {
//     res.json({ message: 'Welcome to the principal dashboard', user: req.user });
//   });
//   //-----------------
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });