import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { AcademicSemisterValidation } from './academicSemister.validation'
import { AcademicSemisterController } from './academicSemister.controller'
const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(AcademicSemisterValidation.createAcademicSemisterZodSchema),
  AcademicSemisterController.createdSemister
)
router.get('/:id', AcademicSemisterController.getSingleSemister)
router.get('/', AcademicSemisterController.getAllSemisters)

export const AcademicSemisterRoutes = router
