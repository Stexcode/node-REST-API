import { createPool } from "mysql2/promise"; 

export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'task',
    password: '080502'
})

export default pool;