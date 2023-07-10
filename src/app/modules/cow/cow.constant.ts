import {
  ICowBreed,
  ICowCategory,
  ICowLebel,
  ICowLocation,
} from './cow.interface'

export const cowBreed: ICowBreed[] = [
  'Brahman',
  'Nellore',
  'Sahiwal',
  'Gir',
  'Indigenous',
  'Tharparkar',
  'Kankrej',
]
export const cowLabel: ICowLebel[] = ['for sale', 'sold out']
export const cowCategory: ICowCategory[] = ['Dairy', 'Beef', 'DualPurpose']

export const cowLocation: ICowLocation[] = [
  'Dhaka',
  'Chattogram',
  'barishal',
  'Rajshahi',
  'Sylhet',
  'Rangpur',
  'Comilla',
]

export type ICowFilters = {
  searchTerm?: string
}

export const cowSearchableFields = ['location', 'category', 'breed']
export const cowFilterableFields = ['searchTerm', 'location', 'price']
