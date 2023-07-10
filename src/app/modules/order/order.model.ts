import { Schema, model } from 'mongoose'
import { IOrder, OrderModel } from './order.interface'

const orderSchema = new Schema<IOrder>(
  {
    cow: {
      type: Schema.Types.ObjectId,
      ref: 'Cow',
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

// //Statics methods
// orderSchema.statics.isUserExist = async function (
//   id: string
// ): Promise<Pick<IOrder, 'cow' | 'buyer'> | null> {
//   return await Order.findOne({ id }, { cow: 1, buyer: 1 })
// }

export const Order = model<IOrder, OrderModel>('Order', orderSchema)
