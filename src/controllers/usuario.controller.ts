import { Request, Response } from "express";
import UsuarioService from "../services/usuario.service";

class UsuarioController{
    private static instance: UsuarioController;
    private constructor(){

    }
    public static getInstance(): UsuarioController{
        if(!UsuarioController.instance){
            UsuarioController.instance = new UsuarioController();
        }
        return UsuarioController.instance;
    }
    public async createUsuario(req: Request, res: Response){
        try {
            const usuarioDto = req.body;
            const usuarioSalvo = await UsuarioService.getInstance().createUsuario(usuarioDto);
            res.json(usuarioSalvo);
        } catch(error) {
            res.status(500).json(error);
        }
    }

    public async readAllUsers(req: Request, res: Response){
        const usuarios = await UsuarioService.getInstance().readAllUsers();
        res.json(usuarios)
    }

    public async readUsuarioById(req: Request, res: Response){
        try{
            const id = req.params.id;
            const user = await UsuarioService.getInstance().readUsuarioById(id);
            res.json(user);
        } catch(error){
            res.status(500).send(error);
        }
    }

    public async atualizarUsuario(req: Request, res: Response){
        try {
            const userDto = req.body;
            const id = req.params.id;
            await UsuarioService.getInstance().atualizarUsuario(userDto, id);
            res.json('Usuario Atualizado');
        } catch(error) {
            res.status(500).json(error);
        }
    }
    
    public async deleteUsuarioById(req: Request, res: Response){
        try{
            const id = req.params.id;
            await UsuarioService.getInstance().deleteUsuarioById(id);
            res.json('Usuario Deletado')
        } catch(error){
            res.status(500).send(error)
        }
    }

}

export default UsuarioController;