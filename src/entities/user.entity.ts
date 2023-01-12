import { AvatarEntity } from './avatar.entity';
import { HashTagEntity } from './hash-tag.entity';
import { AnswerEntity } from './answer.entity';
import { QuestionEntity } from './question.entity';
import { RoleEntity } from './role.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { QuestionTemplateEntity } from './question-template.entity';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @Column({default:'not set yet'})
    name:string;

    @Column({default:'not set yet'})
    gender:string;

    @ManyToMany(() => HashTagEntity,{nullable:true})
    @JoinTable()
    favoriteHashTags:HashTagEntity[]

    @Column()
    email:string;

    @Column({default:'not set yet'})
    occasion:string;

    @Column({default:'not set yet'})
    birthdate:string;

    @Column()
    passwordHash:string;

    @ManyToMany(() => RoleEntity)
    @JoinTable()
    roles:RoleEntity[];

    @OneToMany(() => QuestionEntity,question => question.creator)
    @JoinTable()
    questions:QuestionEntity[];
    
    @OneToMany(() => AnswerEntity,answer => answer.creator)
    @JoinTable()
    answers:AnswerEntity[];

    @Column({default:0})
    numberOfAnswers:number;

    @Column({default:0})
    numberOfQuestions:number;

    @Column({default:0})
    rating:number;

    @Column({default:'not set yet'})
    location:string;

    @OneToOne(() => AvatarEntity,image => image.user)
    @JoinColumn()
    avatar:AvatarEntity;

    @Column({default:false,nullable:true})
    isDeleted:boolean;

    @Column({nullable:true})
    about:string;

   @OneToMany(() => HashTagEntity,hashtag => hashtag.creator)
   @JoinTable()
   createdHashTags:HashTagEntity[]

   @OneToMany(() => QuestionTemplateEntity,questionTemplate => questionTemplate.creator)
   @JoinTable()
   questionTemplates:QuestionTemplateEntity[];

   @ManyToMany(() => QuestionEntity,question => question.ratedUpUsers)
   ratedUpQuestions:QuestionEntity[];

   @ManyToMany(() => QuestionEntity,question => question.ratedDownUsers)
   ratedDownQuestions:QuestionEntity[];

   @ManyToMany(() => QuestionEntity,question => question.viewers)
   @JoinTable()
   viewedQuestions:QuestionEntity[];

   @ManyToMany(() => AnswerEntity,answer => answer.ratedUpUsers)
   ratedUpAnswers:AnswerEntity[];

   @ManyToMany(() => AnswerEntity,answer => answer.ratedDownUsers)
   ratedDownAnswers:AnswerEntity[];

   @ManyToMany(() => QuestionEntity,question => question.subscribers)
   @JoinTable()
   subscribedQuestions:QuestionEntity[];

   @ManyToMany(() => AnswerEntity,answer => answer.subscribersWhoHaveNotSeen)
   notSeenAnswers:AnswerEntity[];
}

