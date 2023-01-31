import { CommunityEntity } from './community.entity';
import { UserEntity } from 'src/entities/user.entity';
import { QuestionEntity } from './question.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { QuestionTemplateEntity } from './question-template.entity';

@Entity()
export class HashTagEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @Column()
    name:string;

    @ManyToMany(() => UserEntity)
    followers:UserEntity[]

    @Column({default:0})
    followersNumber:number;

    @ManyToMany(() => QuestionEntity,question => question.hashTags)
    questions:QuestionEntity[];

    @Column({nullable:true,default:0})
    questionsNumber:number;

    @ManyToOne(() => UserEntity,user => user.createdHashTags)
    creator:UserEntity;

    @ManyToMany(() => QuestionTemplateEntity,questionTemplate => questionTemplate.hashTags)
    questionTemplates:QuestionTemplateEntity[];

    @Column({nullable:true,default:''})
    description:string;

    @ManyToMany(() => CommunityEntity,communities => communities.hashTags)
    communities:CommunityEntity[];
}