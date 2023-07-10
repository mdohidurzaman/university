import { Model } from 'mongoose'

export type UserName = {
  firstName: string
  lastName: string
}

export type IUser = {
  name: UserName
  phoneNumber: string
  role: 'seller' | 'buyer'
  password: string
  address: string
  income: number
  budget: number
}

export type UserModel = Model<IUser, Record<string, unknown>>
