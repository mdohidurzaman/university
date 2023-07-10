import { Model, Types } from 'mongoose'
import { IUser } from '../users/user.interface'

export type ICowBreed =
  | 'Brahman'
  | 'Nellore'
  | 'Sahiwal'
  | 'Gir'
  | 'Indigenous'
  | 'Tharparkar'
  | 'Kankrej'
export type ICowLebel = 'for sale' | 'sold out'
export type ICowCategory = 'Dairy' | 'Beef' | 'DualPurpose'
export type ICowLocation =
  | 'Dhaka'
  | 'Chattogram'
  | 'barishal'
  | 'Rajshahi'
  | 'Sylhet'
  | 'Rangpur'
  | 'Comilla'

export type ICow = {
  name: string
  age: number
  price: number
  weight: number
  breed: ICowBreed
  label: ICowLebel
  category: ICowCategory
  location: ICowLocation
  seller: Types.ObjectId | IUser
}
export type CowModel = Model<ICow>
