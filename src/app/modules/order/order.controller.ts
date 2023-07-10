import { Request, Response } from 'express'
import catchasyne from '../../../shared/catchasyne'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { OrderService } from './order.service'

const createOrder = catchasyne(async (req: Request, res: Response) => {
  const { ...orderData } = req.body
  const result = await OrderService.createOrder(orderData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'A order is created successfully.',
    data: result,
  })
})

export const OrderController = {
  createOrder,
}
