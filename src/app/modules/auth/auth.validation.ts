import { z } from 'zod'
import { role } from './auth.constant'

const createUserZodSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string({
        required_error: 'First name is required',
      }),
      lastName: z.string({
        required_error: 'Last name is required',
      }),
    }),
    password: z.string({ required_error: 'Password is required.' }),
    role: z.enum([...role] as [string, ...string[]], {
      required_error: 'Gender is required',
    }),
    phoneNumber: z.string({
      required_error: 'Phone number is required',
    }),
    address: z.string({
      required_error: 'Address is required',
    }),
    budget: z.number({
      required_error: 'Budget is required',
    }),
    income: z.number({
      required_error: 'Income is required',
    }),
  }),
})

export const AuthValidation = {
  createUserZodSchema,
}
