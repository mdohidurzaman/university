import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { errorLogger, infoLogger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      infoLogger.info(`App is running on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('Fail to connection database!', err)
  }
}
// git push test
bootstrap()
