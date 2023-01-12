import { QuestionEntity } from 'src/entities/question.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { HashTagEntity } from './hash-tag.entity';
import { UserEntity } from './user.entity';

@Entity()
export class QuestionTemplateEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @Column({default:''})
    title:string;

    @Column({default:''})
    body:string;

    @ManyToMany(() => HashTagEntity)
    @JoinTable()
    hashTags:HashTagEntity[];

    @ManyToOne(() => UserEntity,user => user.questionTemplates)
    creator:UserEntity;
}