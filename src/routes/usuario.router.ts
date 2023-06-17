import { Router } from "express";
import { validateRequest } from "zod-express-middleware";
import { UsuarioId, UsuarioSchema } from "../dto/UsuarioDto";
import UsuarioController from "../controllers/usuario.controller";

const usuarioRouter = Router();

usuarioRouter.get('/test', (req, res) => {res.send("Tested")});

// Criar Usuario:
usuarioRouter.post('/cadastrar', validateRequest({body: UsuarioSchema}), UsuarioController.getInstance().createUsuario);

// Ler Usuario por ID:
usuarioRouter.get('/:id', validateRequest({params: UsuarioId}), UsuarioController.getInstance().readUsuarioById);

// Ler todos os Usuarios:
usuarioRouter.get('/', UsuarioController.getInstance().readAllUsers);

// Atualizar Usuarios:
usuarioRouter.put('/:id', validateRequest({body: UsuarioSchema, params: UsuarioId}), UsuarioController.getInstance().atualizarUsuario);

// Deletar Usuarios:
usuarioRouter.delete('/:id', validateRequest({params: UsuarioId}), UsuarioController.getInstance().deleteUsuarioById);



export default usuarioRouter;