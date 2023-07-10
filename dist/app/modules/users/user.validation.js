"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const user_constant_1 = require("./user.constant");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.object({
            firstName: zod_1.z.string({
                required_error: 'First name is required',
            }),
            lastName: zod_1.z.string({
                required_error: 'Last name is required',
            }),
        }),
        password: zod_1.z.string({ required_error: 'Password is required.' }),
        role: zod_1.z.enum([...user_constant_1.role], {
            required_error: 'Gender is required',
        }),
        phoneNumber: zod_1.z.string({
            required_error: 'Phone number is required',
        }),
        address: zod_1.z.string({
            required_error: 'Address is required',
        }),
        budget: zod_1.z.number({
            required_error: 'Budget is required',
        }),
        income: zod_1.z.number({
            required_error: 'Income is required',
        }),
    }),
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .object({
            firstName: zod_1.z
                .string({
                required_error: 'First name is required',
            })
                .optional(),
            lastName: zod_1.z
                .string({
                required_error: 'Last name is required',
            })
                .optional(),
        })
            .optional(),
        password: zod_1.z.string({ required_error: 'Password is required.' }).optional(),
        role: zod_1.z
            .enum([...user_constant_1.role], {
            required_error: 'Gender is required',
        })
            .optional(),
        phoneNumber: zod_1.z
            .string({
            required_error: 'Phone number is required',
        })
            .optional(),
        address: zod_1.z
            .string({
            required_error: 'Address is required',
        })
            .optional(),
        budget: zod_1.z
            .number({
            required_error: 'Budget is required',
        })
            .optional(),
        income: zod_1.z
            .number({
            required_error: 'Income is required',
        })
            .optional(),
    }),
});
exports.UserValidation = {
    createUserZodSchema,
    updateUserZodSchema,
};
