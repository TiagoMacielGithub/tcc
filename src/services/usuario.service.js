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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Usuario_1 = __importDefault(require("../models/entities/Usuario"));
const Repositories_js_1 = require("../models/entities/Repositories.js");
class UsuarioService {
    constructor() {
    }
    static getInstance() {
        if (!UsuarioService.instance) {
            UsuarioService.instance = new UsuarioService();
        }
        return UsuarioService.instance;
    }
    createUsuario(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = new Usuario_1.default();
                usuario.nome = dto.nome;
                usuario.usuario = dto.usuario;
                usuario.idade = dto.idade;
                usuario.latitude = dto.latitude;
                usuario.longitude = dto.longitude;
                usuario.telefone = dto.telefone;
                usuario.id = (0, uuid_1.v4)();
                return yield Repositories_js_1.UsuarioRepositorio.save(usuario);
            }
            catch (err) {
                return Promise.reject(new Error("Error saving"));
            }
        });
    }
    readAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Repositories_js_1.UsuarioRepositorio.find();
        });
    }
    readUsuarioById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const UsuarioSelecionado = yield Repositories_js_1.UsuarioRepositorio.findOneBy({ id });
            if (UsuarioSelecionado) {
                return Promise.resolve(UsuarioSelecionado);
            }
            else {
                return Promise.reject('Não Encontrado');
            }
        });
    }
    atualizarUsuario(dto, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield Repositories_js_1.UsuarioRepositorio.findOneBy({ id });
                if (!usuario) {
                    return Promise.reject('Não Encontrado');
                }
                usuario.nome = dto.nome;
                usuario.usuario = dto.usuario;
                usuario.idade = dto.idade;
                usuario.latitude = dto.latitude;
                usuario.longitude = dto.longitude;
                usuario.telefone = dto.telefone;
                return yield Repositories_js_1.UsuarioRepositorio.save(usuario);
            }
            catch (err) {
                return Promise.reject(new Error('Usuario não atualizado'));
            }
        });
    }
    deleteUsuarioById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Repositories_js_1.UsuarioRepositorio.delete({ id });
            }
            catch (err) {
                return Promise.reject('Não encontrado');
            }
        });
    }
}
exports.default = UsuarioService;
