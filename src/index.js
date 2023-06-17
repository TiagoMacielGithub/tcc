"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_router_1 = __importDefault(require("./routes/usuario.router"));
const data_source_1 = require("./data-source");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
data_source_1.AppDataSource.initialize().then(() => console.log("Banco inicializado"));
app.use('/usuario', usuario_router_1.default);
app.listen(39000, () => console.log("Iniciando"));
