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
const usuario_service_1 = __importDefault(require("../services/usuario.service"));
class UsuarioController {
    constructor() {
    }
    static getInstance() {
        if (!UsuarioController.instance) {
            UsuarioController.instance = new UsuarioController();
        }
        return UsuarioController.instance;
    }
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuarioDto = req.body;
                const usuarioSalvo = yield usuario_service_1.default.getInstance().createUsuario(usuarioDto);
                res.json(usuarioSalvo);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    readAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield usuario_service_1.default.getInstance().readAllUsers();
            res.json(usuarios);
        });
    }
    readUsuarioById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const user = yield usuario_service_1.default.getInstance().readUsuarioById(id);
                res.json(user);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    atualizarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userDto = req.body;
                const id = req.params.id;
                yield usuario_service_1.default.getInstance().atualizarUsuario(userDto, id);
                res.json('Usuario Atualizado');
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    deleteUsuarioById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield usuario_service_1.default.getInstance().deleteUsuarioById(id);
                res.json('Usuario Deletado');
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
}
exports.default = UsuarioController;
