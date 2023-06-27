import {
  IAcademicSemisterCodes,
  IAcademicSemisterMonths,
  IAcademicSemisterTitles,
} from './academicSemister.interface'

export const academicSemisterTitles: IAcademicSemisterTitles[] = [
  'Autum',
  'Summer',
  'Fall',
]
export const academicSemisterCodes: IAcademicSemisterCodes[] = [
  '01',
  '02',
  '03',
]

export const academicSemisterMonth: IAcademicSemisterMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const academicSemisterTitleCodeMapper: { [key: string]: string } = {
  Autum: '01',
  Summer: '02',
  Fall: '03',
}