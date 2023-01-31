import { HashTagEntity } from 'src/entities/hash-tag.entity';
import { UserEntity } from 'src/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class CommunityEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @ManyToOne(() => UserEntity,creator => creator.createdCommunities)
    creator:UserEntity;

    @ManyToMany(() => UserEntity,user => user)
    @JoinTable()
    members:UserEntity[];

    @ManyToMany(() => HashTagEntity)
    hashTags:HashTagEntity[];

    @Column()
    name:string;
    
    @Column({default:0})
    membersNumber:number;
}