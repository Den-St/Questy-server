import { UserEntity } from 'src/entities/user.entity';
import { QuestionEntity } from './question.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class AnswerEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @Column()
    text:string;

    @ManyToOne(() => UserEntity,creator => creator.answers)
    creator:UserEntity;

    @ManyToOne(() => QuestionEntity,question => question.answers)
    question:QuestionEntity;

    @Column({default:0})
    rating:number;

    @Column({default:false})
    correct:boolean;

    @ManyToMany(() => UserEntity,user => user.ratedUpAnswers)
    @JoinTable()
    ratedUpUsers:UserEntity[];

    @ManyToMany(() => UserEntity,user => user.ratedDownAnswers)
    @JoinTable()
    ratedDownUsers:UserEntity[];

    @ManyToMany(() => UserEntity,user => user.notSeenAnswers)
    @JoinTable()
    subscribersWhoHaveNotSeen:UserEntity[];

    @ManyToMany(() => UserEntity,user => user.correctAnswersOnSubscribedQuestions)
    subscribers:UserEntity[];
}