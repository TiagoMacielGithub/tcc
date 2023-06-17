import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn} from "typeorm"

@Entity()
class Usuario {

    @PrimaryColumn()
    id: string;

    @Column({nullable: true})
    nome: string;

    @Column({nullable: true})
    usuario: string;

    @Column({nullable: true})
    idade: number;

    @Column('decimal', { precision: 10, scale: 5 })
    latitude: number;
    
    @Column('decimal', { precision: 10, scale: 5 })
    longitude: number;

    @Column({nullable: true})
    telefone: number;
    
}

export default Usuario;