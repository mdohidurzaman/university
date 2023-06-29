import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { AcademicSemisterValidation } from './academicFaculty.validation'
import { AcademicSemisterController } from './academicFaculty.controller'
const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(AcademicSemisterValidation.createAcademicSemisterZodSchema),
  AcademicSemisterController.createdSemister
)
router.get('/:id', AcademicSemisterController.getSingleSemister)
router.get('/', AcademicSemisterController.getAllSemisters)
router.patch(
  '/:id',
  validateRequest(AcademicSemisterValidation.updateAcademicSemisterZodSchema),
  AcademicSemisterController.updateSemister
)
router.delete('/:id', AcademicSemisterController.deleteSemister)

export const AcademicSemisterRoutes = router
