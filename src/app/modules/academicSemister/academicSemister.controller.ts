import { Request, Response, NextFunction } from 'express'
import { AcademicSemisterServices } from './academicSemister.service'
import catchasyne from '../../../shared/catchasyne'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { IAcademicSemister } from './academicSemister.interface'
import pick from '../../../shared/pick'
import { paginationFields } from '../../../constant/pagination'
import { academicSemisterFilterableFields } from './academicSemister.constant'

const createdSemister = catchasyne(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemisterData } = req.body
    const result = await AcademicSemisterServices.createSemister(
      academicSemisterData
    )
    next()

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester has created successfully.',
      data: result,
    })
  }
)

const getAllSemisters = catchasyne(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicSemisterFilterableFields)

  const paginationOptions = pick(req.query, paginationFields)

  const result = await AcademicSemisterServices.getAllSemisters(
    filters,
    paginationOptions
  )

  sendResponse<IAcademicSemister[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All academic semester are retrived.',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleSemister = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await AcademicSemisterServices.getSingleSemister(id)

  sendResponse<IAcademicSemister>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A academic semester is retrived.',
    data: result,
  })
})

const updateSemister = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await AcademicSemisterServices.updateSemister(id, updatedData)

  sendResponse<IAcademicSemister>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is successfully updated.',
    data: result,
  })
})

const deleteSemister = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await AcademicSemisterServices.deleteSemister(id)

  sendResponse<IAcademicSemister>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is successfully deleted.',
    data: result,
  })
})

export const AcademicSemisterController = {
  createdSemister,
  getAllSemisters,
  getSingleSemister,
  updateSemister,
  deleteSemister,
}
