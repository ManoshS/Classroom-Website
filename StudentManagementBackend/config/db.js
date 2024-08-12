require('dotenv').config();
const mysql = require('mysql2');

//const mysqlurl=`mysql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`
const pool = mysql.createPool({
 host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

module.exports = pool.promise();
