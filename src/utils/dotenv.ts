import dotenv from "dotenv"

let path

if (process.env.NODE_ENV === 'production') {
  path = `${__dirname}/../../.env.production`
} else {
  path = `${__dirname}/../../.env.development`
}

dotenv.config({path})

export const DB_HOST = process.env.DB_HOST
export const DB_NAME = process.env.DB_NAME
export const DB_PORT: number = parseInt(<string>process.env.DB_PORT)
export const DB_USERNAME = process.env.DB_USERNAME
export const DB_PASS = process.env.DB_PASS
