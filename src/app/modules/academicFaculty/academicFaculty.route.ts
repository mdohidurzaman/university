import express from 'express'
import validateRequest from '../../middleware/validateRequest'

import { AcademicFacultyValidation } from './academicFaculty.validation'
import { AcademicFacultyController } from './academicFaculty.controller'
const router = express.Router()

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createAcademicFacultyZodSchema),
  AcademicFacultyController.createFaculty
)
router.get('/:id', AcademicFacultyController.getSingleFaculty)
router.get('/', AcademicFacultyController.getAllFaculties)
router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateAcademicFacultyZodSchema),
  AcademicFacultyController.updateFaculty
)
router.delete('/:id', AcademicFacultyController.deleteFaculty)

export const AcademicFacultyRoutes = router
