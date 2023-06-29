import { z } from 'zod'
import {
  academicSemisterCodes,
  academicSemisterMonth,
  academicSemisterTitles,
} from './academicFaculty.constant'

const createAcademicSemisterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemisterTitles] as [string, ...string[]], {
      required_error: 'Title is required',
    }),
    year: z.string({ required_error: 'Year is required' }),
    code: z.enum([...academicSemisterCodes] as [string, ...string[]], {
      required_error: 'Code is required',
    }),
    startMonth: z.enum(
      [...academicSemisterMonth] as [string, ...string[]],

      { required_error: 'Start month is required.' }
    ),
    endMonth: z.enum(
      [...academicSemisterMonth] as [string, ...string[]],

      { required_error: 'End month is required.' }
    ),
  }),
})

const updateAcademicSemisterZodSchema = z
  .object({
    body: z.object({
      title: z
        .enum([...academicSemisterTitles] as [string, ...string[]], {
          required_error: 'Title is required',
        })
        .optional(),
      year: z.string({ required_error: 'Year is required' }).optional(),
      code: z
        .enum([...academicSemisterCodes] as [string, ...string[]], {
          required_error: 'Code is required',
        })
        .optional(),
      startMonth: z
        .enum(
          [...academicSemisterMonth] as [string, ...string[]],

          { required_error: 'Start month is required.' }
        )
        .optional(),
      endMonth: z
        .enum(
          [...academicSemisterMonth] as [string, ...string[]],

          { required_error: 'End month is required.' }
        )
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    { message: 'Either title and code should be provided or neither.' }
  )

export const AcademicSemisterValidation = {
  createAcademicSemisterZodSchema,
  updateAcademicSemisterZodSchema,
}
