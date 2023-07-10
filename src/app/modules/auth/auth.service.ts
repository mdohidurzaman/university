import { User } from '../users/user.model'
import { IUser } from './auth.interface'

const createUser = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload)
  return result
}

// const getAllUsers = async (): Promise<IUser[] | null> => {
//   const result = await User.find()
//   return result
// }

// const getSingleUser = async (id: string): Promise<IUser | null> => {
//   const result = await User.findById(id)
//   return result
// }

// const updateUser = async (
//   id: string,
//   payload: Partial<IUser>
// ): Promise<IUser | null> => {
//   const result = await User.findOneAndUpdate({ _id: id }, payload, {
//     new: true,
//   })
//   return result
// }

// const deleteUser = async (id: string): Promise<IUser | null> => {
//   const result = await User.findByIdAndDelete(id)
//   return result
// }

export const AuthService = {
  createUser,
}
