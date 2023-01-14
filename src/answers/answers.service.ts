import { GetByUserIdFirstFive } from './../questions/dto/getByUserIdFirstFive.dto';
import { GetByUserIdPaginatedDto } from './dto/getByUserIdPaginated.dto';
import { QuestionsService } from '../questions/questions.service';
import { AnswerEntity } from '../entities/answer.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnswerDto } from './dto/create.dto';
import { UsersService } from 'src/users/users.service';
import { RateAnswerDto } from './dto/rate-answer.dto';

@Injectable()
export class AnswersService {
    constructor(@InjectRepository(AnswerEntity) private readonly answersRepository:Repository<AnswerEntity>,
                private readonly questionsService:QuestionsService,
                private readonly usersService:UsersService){}

    async create(dto:CreateAnswerDto) {
        const creator = await this.usersService.getById(dto.creatorId);
        const question = await this.questionsService.getByIdWithAnswersAndSubscribers(dto.questionId);

        const newAnswer = this.answersRepository.create({creator,question,text:dto.text,subscribersWhoHaveNotSeen:question.subscribers});

        const newCreator = await this.usersService.addAnswer({id:dto.creatorId,answer:newAnswer});
        const newQuestion = await this.questionsService.addAnswer(question.id,newAnswer);

        return await this.answersRepository.save({...newAnswer,creator:newCreator,question:newQuestion});
    }

    async getByUserId(id:number) {
        const answers = await this.answersRepository.find({where:{'creator':{'id':id}}});

        return answers;
    }

    async getByUserIdPaginated(dto:GetByUserIdPaginatedDto) {
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);

        const [answers,total] = await this.answersRepository
            .findAndCount({
                where:{'creator':{'id':dto.userId}},
                take,skip,relations:['question','question.hashTags']
                ,order:{[dto?.orderRule?.fieldName || 'createdAt']:dto.orderRule.orderValue || 'DESC'}

            });

        return {
            total,
            answers
        }
    }


    async getByQuestionId(id:number) {
        const answers = await this.answersRepository.find({
            where:{'question':{id}},relations:['creator','ratedUpUsers','ratedDownUsers','question','question.creator'],
            order:{'rating':"DESC"}
        });

        return answers;
    }


    async rateUp(dto:RateAnswerDto){
        const user = await this.usersService.getByIdWithRatedUpAnswers(dto.userId);
        const answer = await this.answersRepository.findOne({where:{id:dto.answerId},relations:['ratedUpUsers']});

        const newUser = await this.usersService.save({...user,ratedUpAnswers:[...user.ratedUpAnswers,answer]});

        return await this.answersRepository.save({...answer,rating:answer.rating + 1,ratedUpUsers:[...answer.ratedUpUsers,newUser]});
    }

    async rateDown(dto:RateAnswerDto){
        const user = await this.usersService.getByIdWithRatedDownAnswers(dto.userId);
        const answer = await this.answersRepository.findOne({where:{id:dto.answerId},relations:['ratedDownUsers']});

        const newUser = await this.usersService.save({...user,ratedDownAnswers:[...user.ratedDownAnswers,answer]});

        return await this.answersRepository.save({...answer,rating:answer.rating - 1,ratedDownUsers:[...answer.ratedDownUsers,newUser]});
    }

    async cancelRating(dto:RateAnswerDto){
        const user = await this.usersService.getByIdWithRatedUpDownAnswers(dto.userId);
        const answer = await this.answersRepository.findOne({where:{id:dto.answerId},relations:['ratedUpUsers','ratedDownUsers']});

        await this.usersService.save(
            {...user,ratedDownAnswers:[...user.ratedDownAnswers.filter(ratedDownAnswer => ratedDownAnswer.id !== answer.id)]
                    ,ratedUpAnswers:[...user.ratedUpAnswers.filter(ratedUpAnswer => ratedUpAnswer.id !== answer.id)]}
        );
        
        if(!!answer.ratedUpUsers.filter(ratedUpUser => ratedUpUser.id === user.id).length){
            return await this.answersRepository.save(
                {...answer,rating:answer.rating - 1,ratedUpUsers:[...answer.ratedUpUsers.filter(ratedUpUser => ratedUpUser.id !== user.id)]});
        }

        if(!!answer.ratedDownUsers.filter(ratedUpUser => ratedUpUser.id === user.id).length){
            return await this.answersRepository.save(
                {...answer,rating:answer.rating + 1,ratedDownUsers:[...answer.ratedDownUsers.filter(ratedDownUser => ratedDownUser.id !== user.id)]});
        }
    }

    async correct(id:number) {
        const answer = await this.answersRepository.findOne({where:{id},relations:['question','subscribers']});
        const question = await this.questionsService.getWithSubscribers(answer.question.id);

        if(answer.correct) return;
        // for(let i = 0;i < answer.subscribers.length;i++) {
        //     await this.usersService.save({...answer.subscribers[i],correctAnswersOnSubscribedQuestions:[...answer.subscribers[i].correctAnswersOnSubscribedQuestions,answer]})
        // }
        await this.questionsService.save({...question,haveCorrectAnswer:!question.haveCorrectAnswer});
        return await this.answersRepository.save({...answer,correct:!answer.correct,subscribers:[...question.subscribers]});
    }
}
