import express, {Express} from "express";
import usuarioRouter from "./routes/usuario.router";
import { AppDataSource } from "./data-source";


const app: Express = express();

AppDataSource.initialize().then(() => console.log("Banco inicializado"))

app.use('/', usuarioRouter);

app.listen(38000, () => console.log("Iniciando"));
