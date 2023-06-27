import { Request, Response, NextFunction } from 'express'
import { AcademicSemisterServices } from './academicSemister.service'
import catchasyne from '../../../shared/catchasyne'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

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

export const AcademicSemisterController = {
  createdSemister,
}
