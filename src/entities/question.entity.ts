import { MessageEntity } from './message.entity';
import { AnswerEntity } from './answer.entity';
import { UserEntity } from 'src/entities/user.entity';
import { HashTagEntity } from './hash-tag.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class QuestionEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @Column()
    title:string;

    @Column()
    body:string;

    @ManyToMany(() => HashTagEntity)
    @JoinTable()
    hashTags:HashTagEntity[];

    @ManyToOne(() => UserEntity,user => user.questions)
    creator:UserEntity;

    @OneToMany(() => AnswerEntity,answer => answer.question)
    @JoinTable()
    answers:AnswerEntity[];

    @Column({default:0})
    rating:number;

    @Column({default:false})
    haveCorrectAnswer:boolean;

    @Column({default:0})
    answersNumber:number;

    @Column({default:0})
    views:number;

    @ManyToMany(() => UserEntity,user => user.ratedUpQuestions)
    @JoinTable()
    ratedUpUsers:UserEntity[]

    @ManyToMany(() => UserEntity,user => user.ratedDownQuestions)
    @JoinTable()
    ratedDownUsers:UserEntity[]

    @ManyToMany(() => UserEntity,user => user.viewedQuestions)
    viewers:UserEntity[];

    @ManyToMany(() => UserEntity,user => user.subscribedQuestions)
    subscribers:UserEntity[];

    @OneToMany(() => MessageEntity,message => message.pinnedQuestion)
    messages:MessageEntity[];
}