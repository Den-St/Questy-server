import { SeeAnswersDto } from './dto/see-answers.dto';
import { ViewDto } from './dto/view.dto';
import { QuestionsService } from './questions.service';
import { Body, Controller, Get,Param, Post } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create.dto';
import { GetByUserIdPaginatedDto } from 'src/answers/dto/getByUserIdPaginated.dto';
import { GetPaginatedQuestions } from 'src/hash-tags/dto/getPaginatedQuestions.dto';
import { RateQuestionDto } from './dto/rateUp.dto';
import { SubscribeDto } from './dto/subscribe.dto';

@Controller('questions')
export class QuestionsController {
    constructor(private readonly questionService:QuestionsService){}

    @Get("getByUserId/:id")
    async getByUserId(@Param("id") id:number){
        return await this.questionService.getByUserId(id);
    }

    @Post('create')
    async create(@Body() dto:CreateQuestionDto){
        return await this.questionService.create(dto);
    }

    @Post('getByUserIdPaginated')
    async getByUserIdPaginated(@Body() dto:GetByUserIdPaginatedDto){
        return await this.questionService.getByUserIdPaginated(dto);
    }

    @Post('getPaginatedQuestions')
    async getPaginatedQuestions(@Body() dto:GetPaginatedQuestions){
        return await this.questionService.getPaginatedQuestions(dto);
    }

    @Get("get/:id")
    async get(@Param('id') id:number) {
        return await this.questionService.get(id);
    }

    @Post('rateUp')
    async rateUp(@Body() dto:RateQuestionDto){
        return await this.questionService.rateUp(dto);
    }

    @Post('rateDown')
    async rateDown(@Body() dto:RateQuestionDto){
        return await this.questionService.rateDown(dto);
    }

    @Post('cancelRating')
    async cancelRating(@Body() dto:RateQuestionDto) {
        return await this.questionService.cancelRating(dto);
    }

    @Post('view')
    async view(@Body() dto:ViewDto){
        return await this.questionService.view(dto);
    }


    @Post('subscribe')
    async subscribe(@Body() dto:SubscribeDto) {
        return await this.questionService.subscribe(dto);
    }

    
    @Post('unsubscribe')
    async unsubscribe(@Body() dto:SubscribeDto) {
        return await this.questionService.unsubscribe(dto);

    }
    @Post('seeAnswers')
    async seeAnswers(@Body() dto:SeeAnswersDto){
        return await this.questionService.seeAnswers(dto)
    }
}


