import express, {Express} from "express";
import usuarioRouter from "./routes/usuario.router";
import { AppDataSource } from "./data-source";


const app: Express = express();

app.use(express.json());


AppDataSource.initialize().then(() => console.log("Banco inicializado"))

app.use('/usuario', usuarioRouter);

app.use(express.static('public'))

app.listen(39000, () => console.log("Iniciando"));
