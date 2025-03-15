import express from 'express'
import cors from 'cors'
import { PORT, FRONT_API_URL } from './common/config/EnvConfig'

const app = express()

app.use(express.json())
app.use(cors({
    origin: FRONT_API_URL,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}))

app.listen(PORT, () => {
    console.log(`Server running in port: ${PORT}`)
})