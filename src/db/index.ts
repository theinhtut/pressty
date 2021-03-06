import { Pool } from "pg"
import { DB_HOST, DB_NAME, DB_USERNAME, DB_PASS, DB_PORT } from "../utils/dotenv"

const dbReadPool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USERNAME,
  password: DB_PASS
})

try {
  dbReadPool.connect()
} catch (error) {
  console.error(error)
}

export default dbReadPool
