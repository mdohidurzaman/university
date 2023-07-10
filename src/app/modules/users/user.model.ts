import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'
import { role } from './user.constant'

export const UserSchema = new Schema<IUser, UserModel>(
  {
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    role: {
      type: String,
      enum: role,
    },

    phoneNumber: {
      type: String,
      unique: true,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    income: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

//Statics methods
UserSchema.statics.isUserExist = async function (
  id: string
): Promise<Pick<IUser, 'budget' | 'role'> | null> {
  return await User.findById({ id }, { id: 1, budget: 1, role: 1, income: 1 })
}

export const User = model<IUser, UserModel>('User', UserSchema)
