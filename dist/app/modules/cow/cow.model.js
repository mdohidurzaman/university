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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cow = void 0;
const mongoose_1 = require("mongoose");
const cow_constant_1 = require("./cow.constant");
const cowSchema = new mongoose_1.Schema({
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
        enum: cow_constant_1.cowBreed,
    },
    label: {
        type: String,
        required: true,
        enum: cow_constant_1.cowLabel,
        default: 'for sale',
    },
    category: {
        type: String,
        required: true,
        enum: cow_constant_1.cowCategory,
    },
    location: {
        type: String,
        required: true,
        enum: cow_constant_1.cowLocation,
    },
    seller: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
});
//Statics methods
cowSchema.statics.isCowExist = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield exports.Cow.findOne({ id }, { id: 1, price: 1, label: 1, seller: 1 });
    });
};
exports.Cow = (0, mongoose_1.model)('Cow', cowSchema);
