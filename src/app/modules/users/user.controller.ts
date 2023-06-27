import { NextFunction, Request, Response } from 'express'
import { UserService } from './user.service'
import catchasyne from '../../../shared/catchasyne'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createUser = catchasyne(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body
    const result = await UserService.createUser(user)
    next()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User has created successfully.',
      data: result,
    })
  }
)

export const UserController = {
  createUser,
}
