import ApiError from '../../../errors/ApiError'
import httpStatus from 'http-status'
import { academicSemisterTitleCodeMapper } from './academicSemister.constant'
import { IAcademicSemister } from './academicSemister.interface'
import { AcademicSemister } from './academicSemister.model'

const createSemister = async (
  payload: IAcademicSemister
): Promise<IAcademicSemister> => {
  if (academicSemisterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid semester code!', '')
  }
  const result = await AcademicSemister.create(payload)
  return result
}

export const AcademicSemisterServices = {
  createSemister,
}
