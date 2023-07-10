import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { CowValidation } from './cow.validation'
import { CowController } from './cow.controller'
const router = express.Router()

router.post(
  '/create-cow',
  validateRequest(CowValidation.createCowZodSchema),
  CowController.createdCow
)
router.get('/:id', CowController.getSingleCow)
router.get('/', CowController.getAllCows)
router.patch(
  '/:id',
  validateRequest(CowValidation.updateCowZodSchema),
  CowController.updateCow
)
router.delete('/:id', CowController.deleteCow)

export const CowRoutes = router
