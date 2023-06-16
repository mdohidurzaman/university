import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()
import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middleware/globalErrorHandler'

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', usersRouter)

//Test api
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   throw new ApiError(400, 'I am not an error')
//   next('This is an error')
// })

//Global Error Handler
app.use(globalErrorHandler)

export default app
