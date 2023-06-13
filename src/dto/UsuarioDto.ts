import { z } from "zod";

export interface UsuarioDto {
    nome: string;
    usuario: string;
    idade: number;
    geolocation: number;
}

export const UsuarioSchema = z.object({
    nome: z.string().min(2),
    usuario: z.string().min(2),
    idade: z.coerce.number().min(2),
    geolocation: z.coerce.number()
})

export const UsuarioId = z.object({
    id: z.string().length(36)
})