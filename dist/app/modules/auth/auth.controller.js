"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const catchasyne_1 = __importDefault(require("../../../shared/catchasyne"));
const auth_service_1 = require("./auth.service");
const createUser = (0, catchasyne_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = __rest(req.body, []);
    const result = yield auth_service_1.AuthService.createUser(user);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User created successfully!',
        data: result,
    });
}));
// const getAllUsers = catchasyne(async (req: Request, res: Response) => {
//   const result = await UserService.getAllUsers()
//   sendResponse<IUser[]>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'All users are retrived.',
//     data: result,
//   })
// })
// const getSingleUser = catchasyne(async (req: Request, res: Response) => {
//   const id = req.params.id
//   const result = await UserService.getSingleUser(id)
//   sendResponse<IUser>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'A user is retrived.',
//     data: result,
//   })
// })
// const updateUser = catchasyne(async (req: Request, res: Response) => {
//   const id = req.params.id
//   const updatedData = req.body
//   const result = await UserService.updateUser(id, updatedData)
//   sendResponse<IUser>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User is successfully updated.',
//     data: result,
//   })
// })
// const deleteUser = catchasyne(async (req: Request, res: Response) => {
//   const id = req.params.id
//   const result = await UserService.deleteUser(id)
//   sendResponse<IUser>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'User is successfully deleted.',
//     data: result,
//   })
// })
exports.AuthController = {
    createUser,
};
