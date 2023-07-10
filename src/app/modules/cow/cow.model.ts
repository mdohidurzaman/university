import { Schema, model } from 'mongoose'
import { ICow, CowModel } from './cow.interface'
import { cowBreed, cowCategory, cowLocation, cowLabel } from './cow.constant'

const cowSchema = new Schema<ICow>(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    breed: {
      type: String,
      required: true,
      enum: cowBreed,
    },
    label: {
      type: String,
      required: true,
      enum: cowLabel,
      default: 'for sale',
    },
    category: {
      type: String,
      required: true,
      enum: cowCategory,
    },
    location: {
      type: String,
      required: true,
      enum: cowLocation,
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

//Statics methods
cowSchema.statics.isCowExist = async function (
  id: string
): Promise<Pick<ICow, 'price' | 'label' | 'seller'> | null> {
  return await Cow.findOne({ id }, { id: 1, price: 1, label: 1, seller: 1 })
}

export const Cow = model<ICow, CowModel>('Cow', cowSchema)
