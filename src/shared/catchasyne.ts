import { Request, Response, NextFunction } from 'express'
import { RequestHandler } from 'express-serve-static-core'

const catchasyne = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

export default catchasyne
