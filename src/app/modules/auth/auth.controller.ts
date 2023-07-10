import { Request, Response } from 'express'
import { RequestHandler } from 'express-serve-static-core'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { IUser } from './auth.interface'
import catchasyne from '../../../shared/catchasyne'
import { AuthService } from './auth.service'

const createUser: RequestHandler = catchasyne(
  async (req: Request, res: Response) => {
    const { ...user } = req.body
    const result = await AuthService.createUser(user)
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully!',
      data: result,
    })
  }
)

// const getAllUsers = catchasyne(async (req: Request, res: Response) => {
//   const result = await UserService.getAllUsers()

//   sendResponse<IUser[]>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'All users are retrived.',
//     data: result,
//   })
// })

// const getSingleUser = catchasyne(async (req: Request, res: Response) => {
//   const id = req.params.id
//   const result = await UserService.getSingleUser(id)

//   sendResponse<IUser>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'A user is retrived.',
//     data: result,
//   })
// })

// const updateUser = catchasyne(async (req: Request, res: Response) => {
//   const id = req.params.id
//   const updatedData = req.body
//   const result = await UserService.updateUser(id, updatedData)

//   sendResponse<IUser>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User is successfully updated.',
//     data: result,
//   })
// })

// const deleteUser = catchasyne(async (req: Request, res: Response) => {
//   const id = req.params.id
//   const result = await UserService.deleteUser(id)

//   sendResponse<IUser>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User is successfully deleted.',
//     data: result,
//   })
// })

export const AuthController = {
  createUser,
}
