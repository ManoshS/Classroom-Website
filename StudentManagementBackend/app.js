
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const classroomRoutes = require('./routes/classroomRoutes');
const classroomStudentRoutes = require('./routes/classroomStudentRoutes');
const timetableRoutes = require('./routes/timetableRoutes');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());  
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/class', classroomRoutes);
app.use('/api/v1/classStudent', classroomStudentRoutes);
app.use('/api/v1/timetable', timetableRoutes);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
