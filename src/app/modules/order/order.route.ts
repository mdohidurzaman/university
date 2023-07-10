import express from 'express'
import { OrderValidation } from './order.validation'
import { OrderController } from './order.controller'
import validateRequest from '../../middleware/validateRequest'
const router = express.Router()

router.post(
  '/create-order',
  validateRequest(OrderValidation.createOrderZodSchema),
  OrderController.createOrder
)
router.get('/', validateRequest, OrderController.createOrder)

export const OrderRoutes = router
