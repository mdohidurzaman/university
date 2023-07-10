/* eslint-disable no-console */
import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

//Database connection
async function DBconnection() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(`App is running on port ${config.port}`)
    })
    console.log('Database connection successful!')
  } catch (err) {
    console.log('Database connection fail', err)
  }
}

DBconnection()

// app.listen(config.port, () => {
//   DBconnection()
//   console.log(`Assignment3 app running on port ${config.port}`)
// })
