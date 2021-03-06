require('dotenv').config()
const {createPool} = require("mysql");

const pool = createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DATABASE,
    port:process.env.DB_PORT,
    connectionLimit:10
});

module.exports = pool;
  