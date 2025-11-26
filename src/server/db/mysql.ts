import mysql from "mysql2/promise";

let pool: mysql.Pool | null = null;

export async function connectMySQL() {
	const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;
    if (
        MYSQL_HOST === undefined ||
        MYSQL_USER === undefined ||
        MYSQL_PASSWORD === undefined ||
        MYSQL_DATABASE === undefined
    ) {
        throw new Error("Missing MySQL environment variables");
    }

    if (!pool) {
        pool = mysql.createPool({
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASSWORD,
            database: MYSQL_DATABASE,
            connectionLimit: 10,
        });
    }

	try {
		const [rows] = await pool.query("SELECT 1");
		console.log("MySQL connected:", rows);
	} catch(error) {
		console.error("MySQL connection failed:", error);
	}	
}

export function getMySQL() {
  if (!pool) throw new Error("MySQL pool not initialized");
  return pool;
}