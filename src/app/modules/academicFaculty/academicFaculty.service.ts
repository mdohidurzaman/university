import { IPaginationOptions } from '../../../interface/pagination'
import { IGenericResponse } from '../../../interface/common'
import { paginationHelpers } from '../../../helpers/paginationHelper'
import { SortOrder } from 'mongoose'
import {
  IAcademicFaculty,
  IAcademicFacultyFilters,
} from './academicFaculty.interface'
import { AcademicFaculty } from './academicFaculty.model'
import { academicFacultySearchableFields } from './academicFaculty.constant'

const createFaculty = async (
  payload: IAcademicFaculty
): Promise<IAcademicFaculty> => {
  const result = await AcademicFaculty.create(payload)
  return result
}

const getAllFaculties = async (
  filters: IAcademicFacultyFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicFaculty[]>> => {
  const { searchTerm, ...filtersData } = filters

  const andConditions = []

  //search data
  if (searchTerm) {
    andConditions.push({
      $or: academicFacultySearchableFields.map(field => ({
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

  const result = await AcademicFaculty.find(whereCondition)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)

  const total = await AcademicFaculty.countDocuments()

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

const getSingleFaculty = async (
  id: string
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findById(id)
  return result
}

const updateFaculty = async (
  id: string,
  payload: Partial<IAcademicFaculty>
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const deleteFaculty = async (id: string): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findByIdAndDelete(id)
  return result
}
export const AcademicFacultyServices = {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
}
