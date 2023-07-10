import { Request, Response } from 'express'
import { CowService } from './cow.service'
import catchasyne from '../../../shared/catchasyne'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { ICow } from './cow.interface'
import pick from '../../../shared/pick'
import { paginationFields } from '../../../constant/pagination'
import { cowFilterableFields } from './cow.constant'

const createdCow = catchasyne(async (req: Request, res: Response) => {
  const { ...cowData } = req.body
  const result = await CowService.createCow(cowData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A cow has created successfully.',
    data: result,
  })
})

const getAllCows = catchasyne(async (req: Request, res: Response) => {
  const filters = pick(req.query, cowFilterableFields)

  const paginationOptions = pick(req.query, paginationFields)

  const result = await CowService.getAllCows(filters, paginationOptions)

  sendResponse<ICow[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All cows are retrived.',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleCow = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await CowService.getSingleCow(id)

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A cow is retrived.',
    data: result,
  })
})

const updateCow = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await CowService.updateCow(id, updatedData)

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cow is successfully updated.',
    data: result,
  })
})

const deleteCow = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await CowService.deleteCow(id)

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A cow is successfully deleted.',
    data: result,
  })
})

export const CowController = {
  createdCow,
  getAllCows,
  getSingleCow,
  updateCow,
  deleteCow,
}
