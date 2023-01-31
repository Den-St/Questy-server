import { QuestionEntity } from 'src/entities/question.entity';
import { UserEntity } from 'src/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class MessageEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @ManyToOne(() => UserEntity,creator => creator)
    @JoinTable()
    creator:UserEntity;

    @Column()
    text:string;

    @Column({nullable:true})
    responseId:number;

    @Column({nullable:true})
    responseText:string;

    @ManyToOne(() => QuestionEntity)
    @JoinTable()
    pinnedQuestion:QuestionEntity;

    
}