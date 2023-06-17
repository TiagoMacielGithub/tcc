"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const zod_express_middleware_1 = require("zod-express-middleware");
const UsuarioDto_1 = require("../dto/UsuarioDto");
const usuario_controller_1 = __importDefault(require("../controllers/usuario.controller"));
const usuarioRouter = (0, express_1.Router)();
usuarioRouter.get('/test', (req, res) => { res.send("Tested"); });
// Criar Usuario:
usuarioRouter.post('/cadastrar', (0, zod_express_middleware_1.validateRequest)({ body: UsuarioDto_1.UsuarioSchema }), usuario_controller_1.default.getInstance().createUsuario);
// Ler Usuario por ID:
usuarioRouter.get('/:id', (0, zod_express_middleware_1.validateRequest)({ params: UsuarioDto_1.UsuarioId }), usuario_controller_1.default.getInstance().readUsuarioById);
// Ler todos os Usuarios:
usuarioRouter.get('/', usuario_controller_1.default.getInstance().readAllUsers);
// Atualizar Usuarios:
usuarioRouter.put('/:id', (0, zod_express_middleware_1.validateRequest)({ body: UsuarioDto_1.UsuarioSchema, params: UsuarioDto_1.UsuarioId }), usuario_controller_1.default.getInstance().atualizarUsuario);
// Deletar Usuarios:
usuarioRouter.delete('/:id', (0, zod_express_middleware_1.validateRequest)({ params: UsuarioDto_1.UsuarioId }), usuario_controller_1.default.getInstance().deleteUsuarioById);
exports.default = usuarioRouter;
