import { v4 } from "uuid";
import { UsuarioDto } from "../dto/UsuarioDto";
import Usuario from "../models/entities/Usuario";
import { UsuarioRepositorio } from "../models/entities/Repositories.js";

class UsuarioService {
    private static instance: UsuarioService;
    private constructor(){

    }

    public static getInstance(): UsuarioService{
        if(!UsuarioService.instance){
            UsuarioService.instance = new UsuarioService();
        }
        return UsuarioService.instance;
    }
    
    public async createUsuario(dto: UsuarioDto): Promise<Usuario>{
        try{
        const usuario = new Usuario();
        usuario.nome = dto.nome
        usuario.usuario = dto.usuario
        usuario.idade = dto.idade
        usuario.geolocation = dto.geolocation
        usuario.id = v4();
            return await UsuarioRepositorio.save(usuario)
        } catch(err) {
            return Promise.reject(new Error("Error saving"))
        }
    }

    public async readAllUsers(): Promise<Usuario[]> {
        return await UsuarioRepositorio.find();
    }

    public async readUsuarioById(id: string): Promise<Usuario> {
        const UsuarioSelecionado = await UsuarioRepositorio.findOneBy({id});
        if(UsuarioSelecionado){
            return Promise.resolve(UsuarioSelecionado);
        } else {
            return Promise.reject('Não Encontrado')
        }
    }

    public async atualizarUsuario(dto: UsuarioDto, id: string): Promise<Usuario> {
        try {
            const usuario = await UsuarioRepositorio.findOneBy({id})
            if(!usuario){
                return Promise.reject('Não Encontrado')
            }
            usuario.nome = dto.nome
            usuario.usuario = dto.usuario
            usuario.idade = dto.idade
            usuario.geolocation = dto.geolocation
            return await UsuarioRepositorio.save(usuario)
        } catch(err) {
            return Promise.reject(new Error('Usuario não atualizado'));
        }
    }

    public async deleteUsuarioById(id: string): Promise<void> {
        try {
            await UsuarioRepositorio.delete({id});
        } catch (err) {
            return Promise.reject('Não encontrado')
        }
    }
}

export default UsuarioService;