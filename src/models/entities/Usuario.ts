import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
class Usuario {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({nullable: true})
    nome: string;

    @Column({nullable: true})
    usuario: string;

    @Column({nullable: true})
    idade: number;

    @Column('decimal', { precision: 5, scale: 5 })
    geolocation: number
    
}

export default Usuario