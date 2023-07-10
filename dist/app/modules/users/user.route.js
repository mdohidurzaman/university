"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const router = express_1.default.Router();
// router.post(
//   '/create-user',
//   validateRequest(UserValidation.createUserZodSchema),
//   UserController.createUser
// )
router.patch('/:id', (0, validateRequest_1.default)(user_validation_1.UserValidation.updateUserZodSchema), user_controller_1.UserController.updateUser);
router.get('/', user_controller_1.UserController.getAllUsers);
router.get('/:id', user_controller_1.UserController.getSingleUser);
router.delete('/:id', user_controller_1.UserController.deleteUser);
exports.UserRoutes = router;
