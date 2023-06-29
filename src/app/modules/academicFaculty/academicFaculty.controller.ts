import { Request, Response } from 'express'
import { AcademicFacultyServices } from './academicFaculty.service'
import catchasyne from '../../../shared/catchasyne'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import pick from '../../../shared/pick'
import { paginationFields } from '../../../constant/pagination'
import { academicFacultyFilterableFields } from './academicFaculty.constant'
import { IAcademicFaculty } from './academicFaculty.interface'

const createFaculty = catchasyne(async (req: Request, res: Response) => {
  const { ...academicFacultyData } = req.body
  const result = await AcademicFacultyServices.createFaculty(
    academicFacultyData
  )

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty has been created successfully.',
    data: result,
  })
})

const getAllFaculties = catchasyne(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicFacultyFilterableFields)

  const paginationOptions = pick(req.query, paginationFields)

  const result = await AcademicFacultyServices.getAllFaculties(
    filters,
    paginationOptions
  )

  sendResponse<IAcademicFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All faculties have retrived.',
    meta: result.meta,
    data: result.data,
  })
})

const getSingleFaculty = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await AcademicFacultyServices.getSingleFaculty(id)

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A faculty has retrived.',
    data: result,
  })
})

const updateFaculty = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await AcademicFacultyServices.updateFaculty(id, updatedData)

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A faculty has been successfully updated.',
    data: result,
  })
})

const deleteFaculty = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await AcademicFacultyServices.deleteFaculty(id)

  sendResponse<IAcademicFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A faculty has successfully deleted.',
    data: result,
  })
})

export const AcademicFacultyController = {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
}
