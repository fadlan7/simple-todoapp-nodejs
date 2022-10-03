const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pertemuan11',
  password: 'manchunian27',
  port: '5432',
});

module.exports = pool;
