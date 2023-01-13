import { SeeAnswersDto } from './dto/see-answers.dto';
import { SubscribeDto } from './dto/subscribe.dto';
import { GetByUserIdFirstFive } from './dto/getByUserIdFirstFive.dto';
import { GetByUserIdPaginatedDto } from 'src/answers/dto/getByUserIdPaginated.dto';
import { HashTagsService } from './../hash-tags/hash-tags.service';
import { HashTagEntity } from './../entities/hash-tag.entity';
import { UsersService } from 'src/users/users.service';
import { CreateQuestionDto } from './dto/create.dto';
import { AnswerEntity } from '../entities/answer.entity';
import { QuestionEntity } from '../entities/question.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository, ArrayContains, Like } from 'typeorm';
import { GetPaginatedQuestions } from 'src/hash-tags/dto/getPaginatedQuestions.dto';
import { RateQuestionDto } from './dto/rateUp.dto';
import { ViewDto } from './dto/view.dto';

@Injectable()
export class QuestionsService {
    constructor(@InjectRepository(QuestionEntity) private readonly questionsRepository:Repository<QuestionEntity>,
                private readonly usersService:UsersService,
                private readonly hashTagsService:HashTagsService){}

    async getByIdWithAnswers(id:number) {
        const question = await this.questionsRepository.findOne({where:{id},relations:['answers']});
        return question;
    }

    async getByIdWithAnswersAndSubscribers(id:number) {
        return await this.questionsRepository.findOne({where:{id},relations:['subscribers','answers']})
    }

    async addAnswer(id:number,answer:AnswerEntity){
        const question = await this.questionsRepository.findOne({where:{id},relations:['answers']});
        return await this.questionsRepository.save({...question,answers:[...question.answers,answer],answersNumber:question.answersNumber + 1});
    }

    async getByUserId(id:number) {
        const questions = await this.questionsRepository.find({where:{'creator':{'id':id}}});

        return questions;
    }

    async create(dto:CreateQuestionDto){
        const hashTags:HashTagEntity[] = [];
        for(let i = 0;i < dto?.hashTags?.length;i++){
            const hashTag = await this.hashTagsService.getByNameAndIncreaseQuestionNumber(dto.hashTags[i]);
            hashTags.push(hashTag);
        }
        const newCreator = await this.usersService.upQuestionNumber(dto.creatorId);
        
        const newQuestion = this.questionsRepository.create({creator:newCreator,title:dto.title,body:dto.body,hashTags:[...hashTags]});
        
        return await this.questionsRepository.save({...newQuestion});
    }

    async getByUserIdPaginated(dto:GetByUserIdPaginatedDto){
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);

        const [questions,total] = await this.questionsRepository
            .findAndCount({
                where:{'creator':{'id':dto.userId}},
                take,skip,relations:['hashTags']
                ,order:{[dto?.orderRule?.fieldName || 'createdAt']:dto.orderRule.orderValue || 'DESC'}

            });

        return {
            questions,
            total
        }
    }

    async getPaginatedQuestions(dto:GetPaginatedQuestions) {
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);
        const hashTags = dto?.hashTags?.split(";").filter(hashTag => hashTag.length);
        // if(dto.hashTags?.length) {

        const [questions,total] = await this.questionsRepository
            .findAndCount({
                where:{hashTags:(hashTags?.length ? {name:In(hashTags)} : null),title:Like(`%${dto.search || ''}%`),haveCorrectAnswer:(dto.onlyAnswered === false ? null : true)}
                ,skip
                ,take
                ,order:{[dto?.orderRule?.fieldName || 'createdAt']:dto.orderRule.orderValue || 'DESC'}
                ,relations:['hashTags']
            });

        return {
            questions,
            total
        }

        // }

        // const [questions,total] = await this.questionsRepository
        //         .findAndCount({
        //             where:{title:Like(`%${dto.search || ''}%`),haveCorrectAnswer:(dto.onlyAnswered === false ? null : true)}
        //             ,skip
        //             ,take
        //             ,order:{[dto?.orderRule?.fieldName || 'createdAt']:[dto?.orderRule?.orderValue || 'DESC']}
        //             ,relations:['hashTags']
        //         });

        // return {
        //     questions,
        //     total 
        // }
    }

    async get(id:number) {
        const question = await this.questionsRepository.findOne({where:{id},relations:['ratedUpUsers','ratedDownUsers','subscribers']});
        console.log('q',question)
        return question;
    }

    async getWithSubscribers(id:number) {
        return await this.questionsRepository.findOne({where:{id},relations:['subscribers']});
    }   

    async rateUp(dto:RateQuestionDto){
        const user = await this.usersService.getByIdWithRatedUpQuestions(dto.userId);
        const question = await this.questionsRepository.findOne({where:{id:dto.questionId},relations:['ratedUpUsers']});

        const newUser = await this.usersService.save({...user,ratedUpQuestions:[...user.ratedUpQuestions,question]});

        return await this.questionsRepository.save({...question,rating:question.rating + 1,ratedUpUsers:[...question.ratedUpUsers,newUser]});
    }

    async rateDown(dto:RateQuestionDto){
        const user = await this.usersService.getByIdWithRatedDownQuestions(dto.userId);
        const question = await this.questionsRepository.findOne({where:{id:dto.questionId},relations:['ratedDownUsers']});

        const newUser = await this.usersService.save({...user,ratedDownQuestions:[...user.ratedDownQuestions,question]});

        return await this.questionsRepository.save({...question,rating:question.rating - 1,ratedDownUsers:[...question.ratedDownUsers,newUser]});
    }

    async cancelRating(dto:RateQuestionDto){
        const user = await this.usersService.getByIdWithRatedUpDownQuestions(dto.userId);
        const question = await this.questionsRepository.findOne({where:{id:dto.questionId},relations:['ratedUpUsers','ratedDownUsers']});

        await this.usersService.save(
            {...user,ratedDownQuestions:[...user.ratedDownQuestions.filter(ratedDownQuestion => ratedDownQuestion.id !== question.id)]
                    ,ratedUpQuestions:[...user.ratedUpQuestions.filter(ratedUpQuestion => ratedUpQuestion.id !== question.id)]}
        );
        
        if(!!question.ratedUpUsers.filter(ratedUpUser => ratedUpUser.id === user.id).length){
            console.log('bv')
            return await this.questionsRepository.save(
                {...question,rating:question.rating - 1,ratedUpUsers:[...question.ratedUpUsers.filter(ratedUpUser => ratedUpUser.id !== user.id)]});
        }

        if(!!question.ratedDownUsers.filter(ratedUpUser => ratedUpUser.id === user.id).length){
            console.log('bv')
            return await this.questionsRepository.save(
                {...question,rating:question.rating + 1,ratedDownUsers:[...question.ratedDownUsers.filter(ratedDownUser => ratedDownUser.id !== user.id)]});
        }
        console.log('bv')
    }

   async view(dto:ViewDto) {
    const question = await this.questionsRepository.findOne({where:{id:dto.questionId},relations:['viewers']});
    const user = await this.usersService.getWithViewedQuestions(dto.userId);

    if(question.viewers.some(viewer => viewer.id === user.id)) return;

    await this.usersService.save({...user,viewedQuestions:[...user.viewedQuestions,question]});
    return await this.questionsRepository.save({...question,viewers:[...question.viewers,user],views:question.views + 1});

   }

   async save(question:QuestionEntity) {
    return await this.questionsRepository.save(question);
   }

   async subscribe(dto:SubscribeDto) {
    const user = await this.usersService.getWithSubscribedQuestions(dto.userId);
    const question = await this.questionsRepository.findOne({where:{id:dto.questionId},relations:['subscribers']});

    const newUser = await this.usersService.save({...user,subscribedQuestions:[...user.subscribedQuestions,question]});
    return await this.questionsRepository.save({...question,subscribers:[...question.subscribers,newUser]});
   }


   async unsubscribe(dto:SubscribeDto) {
        const user = await this.usersService.getWithSubscribedQuestions(dto.userId);

        return await this.usersService.save({...user,subscribedQuestions:[...user.subscribedQuestions.filter(question => question.id !== dto.questionId)]});
   }

   async seeAnswers(dto:SeeAnswersDto) {
    const user = await this.usersService.getNotSeenAnswers(dto.userId);

    return await this.usersService.save({...user,notSeenAnswers:[...user.notSeenAnswers.filter(answer => answer.question.id !== dto.questionId)]});
   }
}


