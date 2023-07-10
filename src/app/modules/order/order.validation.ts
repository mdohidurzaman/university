import { z } from 'zod'

const createOrderZodSchema = z.object({
  body: z.object({
    cow: z.string({
      required_error: 'Cow ref is required',
    }),
    buyer: z.string({
      required_error: 'Buyer ref is required',
    }),
  }),
})

export const OrderValidation = {
  createOrderZodSchema,
}
