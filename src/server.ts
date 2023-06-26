import { Server } from 'http'
import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { errorLogger, infoLogger } from './shared/logger'

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

let server: Server

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      infoLogger.info(`App is running on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Fail to connection database!', err)
  }
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

process.on('SIGTERM', () => {
  infoLogger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})
