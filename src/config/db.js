const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'hacktiv8_kampus_merdeka',
  password: 'manchunian27',
  port: '5432',
});

module.exports = pool;
