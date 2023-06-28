import { Schema, model } from 'mongoose'
import {
  IAcademicSemister,
  AcademicSemisterModel,
} from './academicSemister.interface'
import {
  academicSemisterCodes,
  academicSemisterMonth,
  academicSemisterTitles,
} from './academicSemister.constant'
import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'

const academicSemisterSchema = new Schema<IAcademicSemister>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemisterTitles,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemisterCodes,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemisterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemisterMonth,
    },
  },
  {
    timestamps: true,
  }
)

//Handleing same year and same semester issue!!
academicSemisterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemister.findOne({
    title: this.title,
    year: this.year,
  })
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Academic semester already exist!.',
      ''
    )
  }
  next()
})

export const AcademicSemister = model<IAcademicSemister, AcademicSemisterModel>(
  'AcademicSemister',
  academicSemisterSchema
)
