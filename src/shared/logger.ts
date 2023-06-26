import path from 'path'
import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, printf, prettyPrint } = format
import DailyRotateFile from 'winston-daily-rotate-file'

//Custom logger format
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return `${date.toDateString()} ${hour}: ${minute}: ${second}} [${label}] ${level}: ${message}`
})

const infoLogger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'successes',
        '%DATE%-success.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '1m',
      maxFiles: '1d',
    }),
  ],
})
const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        '%DATE%-error.log'
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '1m',
      maxFiles: '1d',
    }),
  ],
})

export { infoLogger, errorLogger }
