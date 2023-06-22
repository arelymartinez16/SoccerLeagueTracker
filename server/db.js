const Pool = require('pg').Pool
require('dotenv').config()

// communicate with psql
const pool = new Pool({
    user: "postgres",
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DBPORT,
    database: ''
})

module.exports = pool