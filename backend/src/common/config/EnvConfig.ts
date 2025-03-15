import dotenv from 'dotenv'

dotenv.config()

export const {
    PORT = '',
    FRONT_API_URL = ''
} = process.env