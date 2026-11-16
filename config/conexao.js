import mysql from "mysql2/promise";

export const pool = mysql.createPool({
    HOST:process.env.DB_HOST,
    PORT:process.env.DB_PORT,
    user:process.env.DB_USER,
    PASSWORD:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,

    waitForConnections : true,
    connectionLimit : 10,
})