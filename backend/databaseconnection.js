const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    host:'database-1.c0zqftfocsea.us-east-2.rds.amazonaws.com',
    database:'postgres',
    password:'databaseadmin',
    port:5432
});

module.exports=pool;