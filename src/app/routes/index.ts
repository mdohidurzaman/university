import express from 'express'
import { UserRoutes } from '../modules/users/user.route'
import { AcademicSemisterRoutes } from '../modules/academicSemister/academicSemister.route'
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemisterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
