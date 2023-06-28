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

  const result = await AcademicSemisterServices.gerAllSemisters(
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

export const AcademicSemisterController = {
  createdSemister,
  getAllSemisters,
}
