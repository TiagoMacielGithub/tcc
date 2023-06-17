import { z } from "zod";

export interface UsuarioDto {
    nome: string;
    usuario: string;
    idade: number;
    latitude: number;
    longitude: number;
    telefone: number;
}

export const UsuarioSchema = z.object({
    nome: z.string().min(2),
    usuario: z.string().min(2),
    idade: z.coerce.number().min(2),
    latitude: z.coerce.number(),
    longitude: z.coerce.number(),
    telefone: z.coerce.number()
})

export const UsuarioId = z.object({
    id: z.string().length(36)
})