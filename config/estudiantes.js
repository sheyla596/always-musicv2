import pkg from "pg";
const { Pool } = pkg;
import 'dotenv/config';

const {DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD} = process.env;

  const pool = new Pool({
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    allowExitOnIdle: true,
  })
  
  export default pool; 