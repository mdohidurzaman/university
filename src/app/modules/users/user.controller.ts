import { Request, Response } from 'express'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { IUser } from './user.interface'
import { UserService } from './user.service'
import catchasyne from '../../../shared/catchasyne'

const getAllUsers = catchasyne(async (req: Request, res: Response) => {
  const result = await UserService.getAllUsers()

  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All users are retrived.',
    data: result,
  })
})

const getSingleUser = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await UserService.getSingleUser(id)

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A user is retrived.',
    data: result,
  })
})

const updateUser = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await UserService.updateUser(id, updatedData)

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is successfully updated.',
    data: result,
  })
})

const deleteUser = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await UserService.deleteUser(id)

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is successfully deleted.',
    data: result,
  })
})

export const UserController = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
