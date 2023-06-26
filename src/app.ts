import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()
import { UserRoutes } from './app/modules/users/user.route'
import globalErrorHandler from './app/middleware/globalErrorHandler'

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', UserRoutes)

//Test api
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandle errors reject'))
// })

//Global Error Handler
app.use(globalErrorHandler)

export default app
