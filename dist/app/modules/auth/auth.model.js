"use strict";
// import { Schema, model } from 'mongoose'
// import { IUser, UserModel } from './auth.interface'
// import { role } from './auth.constant'
// export const UserSchema = new Schema<IUser, UserModel>(
//   {
//     name: {
//       type: {
//         firstName: {
//           type: String,
//           required: true,
//         },
//         lastName: {
//           type: String,
//           required: true,
//         },
//       },
//       required: true,
//     },
//     role: {
//       type: String,
//       enum: role,
//     },
//     phoneNumber: {
//       type: String,
//       unique: true,
//       required: true,
//     },
//     budget: {
//       type: Number,
//       required: true,
//     },
//     income: {
//       type: Number,
//       required: true,
//     },
//     address: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// )
// export const Users = model<IUser, UserModel>('Users', UserSchema)
