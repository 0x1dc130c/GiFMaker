// project-root/utils/db.ts
import mysql from 'mysql';

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gif_maker'
});

export default pool;
