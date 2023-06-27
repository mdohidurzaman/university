import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()
import globalErrorHandler from './app/middleware/globalErrorHandler'
import routes from './app/routes'

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//All routes
app.use('/api/v1', routes)
//Global Error Handler
app.use(globalErrorHandler)

export default app
