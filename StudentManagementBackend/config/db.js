require('dotenv').config();
const mysql = require('mysql2');

const mysqlurl=`mysql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`
const pool = mysql.createPool(mysqlurl);

module.exports = pool.promise();
