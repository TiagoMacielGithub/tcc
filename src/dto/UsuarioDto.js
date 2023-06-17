"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioId = exports.UsuarioSchema = void 0;
const zod_1 = require("zod");
exports.UsuarioSchema = zod_1.z.object({
    nome: zod_1.z.string().min(2),
    usuario: zod_1.z.string().min(2),
    idade: zod_1.z.coerce.number().min(2),
    latitude: zod_1.z.coerce.number(),
    longitude: zod_1.z.coerce.number(),
    telefone: zod_1.z.coerce.number()
});
exports.UsuarioId = zod_1.z.object({
    id: zod_1.z.string().length(36)
});
