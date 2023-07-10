import express from 'express'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'
import validateRequest from '../../middleware/validateRequest'
const router = express.Router()

// router.post(
//   '/create-user',
//   validateRequest(UserValidation.createUserZodSchema),
//   UserController.createUser
// )
router.patch(
  '/:id',
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateUser
)
router.get('/', UserController.getAllUsers)
router.get('/:id', UserController.getSingleUser)
router.delete('/:id', UserController.deleteUser)

export const UserRoutes = router
