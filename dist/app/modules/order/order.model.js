"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    cow: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Cow',
    },
    buyer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
});
// //Statics methods
// orderSchema.statics.isUserExist = async function (
//   id: string
// ): Promise<Pick<IOrder, 'cow' | 'buyer'> | null> {
//   return await Order.findOne({ id }, { cow: 1, buyer: 1 })
// }
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
