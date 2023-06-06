import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
class Usuario {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column
    nome: string;
}

export default Usuario;