import express, { Application } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app: Application = express()
import globalErrorHandler from './app/middleware/globalErrorHandler'
import routes from './app/routes'

// parser
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//All routes
app.use('/api/v1', routes)
//Global Error Handler
app.use(globalErrorHandler)

export default app
