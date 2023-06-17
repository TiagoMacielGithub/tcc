"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepositorio = void 0;
const data_source_1 = require("../../data-source");
const Usuario_1 = __importDefault(require("./Usuario"));
exports.UsuarioRepositorio = data_source_1.AppDataSource.getRepository(Usuario_1.default);
