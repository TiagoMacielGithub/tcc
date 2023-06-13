import { AppDataSource } from "../../data-source";
import Usuario from "./Usuario";

export const UsuarioRepositorio = AppDataSource.getRepository(Usuario);
