import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'
import {
  IAcademicSemisterFilters,
  academicSemisterSearchableFields,
  academicSemisterTitleCodeMapper,
} from './academicFaculty.constant'
import { IAcademicSemister } from './academicFaculty.interface'
import { AcademicSemister } from './academicFaculty.model'
import { IPaginationOptions } from '../../../interface/pagination'
import { IGenericResponse } from '../../../interface/common'
import { paginationHelpers } from '../../../helpers/paginationHelper'
import { SortOrder } from 'mongoose'

const createSemister = async (
  payload: IAcademicSemister
): Promise<IAcademicSemister> => {
  if (academicSemisterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code!', '')
  }
  const result = await AcademicSemister.create(payload)
  return result
}

const getAllSemisters = async (
  filters: IAcademicSemisterFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicSemister[]>> => {
  const { searchTerm, ...filtersData } = filters

  const andConditions = []

  //search data
  if (searchTerm) {
    andConditions.push({
      $or: academicSemisterSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }
  //filters data
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  // const andConditions = [
  //   {
  //     $or: [
  //       {
  //         title: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //       {
  //         code: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //       {
  //         year: {
  //           $regex: searchTerm,
  //           $options: 'i',
  //         },
  //       },
  //     ],
  //   },
  // ]
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calclutePagination(paginationOptions)

  const sortCondition: { [key: string]: SortOrder } = {}
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder
  }

  const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {}

  const result = await AcademicSemister.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)

  const total = await AcademicSemister.countDocuments()

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

const getSingleSemister = async (
  id: string
): Promise<IAcademicSemister | null> => {
  const result = await AcademicSemister.findById(id)
  return result
}

const updateSemister = async (
  id: string,
  payload: Partial<IAcademicSemister>
): Promise<IAcademicSemister | null> => {
  if (
    payload.title &&
    payload.code &&
    academicSemisterTitleCodeMapper[payload.title] !== payload.code
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code!', '')
  }
  const result = await AcademicSemister.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const deleteSemister = async (
  id: string
): Promise<IAcademicSemister | null> => {
  const result = await AcademicSemister.findByIdAndDelete(id)
  return result
}
export const AcademicSemisterServices = {
  createSemister,
  getAllSemisters,
  getSingleSemister,
  updateSemister,
  deleteSemister,
}
