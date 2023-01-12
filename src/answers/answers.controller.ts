import { CreateAnswerDto } from './dto/create.dto';
import { AnswersService } from './answers.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetByUserIdPaginatedDto } from './dto/getByUserIdPaginated.dto';
import { GetByUserIdFirstFive } from 'src/questions/dto/getByUserIdFirstFive.dto';
import { RateAnswerDto } from './dto/rate-answer.dto';

@Controller('answers')
export class AnswersController {
    constructor(private readonly answersService:AnswersService){}

    @Post('create')
    async create(@Body() dto:CreateAnswerDto) {
        return await this.answersService.create(dto);
    }

    @Get('getByUserId/:id')
    async getByUserId(@Param('id') id:number) {
        return await this.answersService.getByUserId(id);
    }

    @Post('getByUserIdPaginated')
    async getByUserIdPaginated(@Body() dto:GetByUserIdPaginatedDto){
        return await this.answersService.getByUserIdPaginated(dto);
    }

    @Get('getByQuestionId/:id')
    async getByQuestionId(@Param('id') id:number) {
        return await this.answersService.getByQuestionId(id);
    }

    @Post('rateUp')
    async rateUp(@Body() dto:RateAnswerDto){
        return await this.answersService.rateUp(dto);
    }

    @Post('rateDown')
    async rateDown(@Body() dto:RateAnswerDto){
        return await this.answersService.rateDown(dto);
    }

    @Post('cancelRating')
    async cancelRating(@Body() dto:RateAnswerDto) {
        return await this.answersService.cancelRating(dto);
    }

    @Post('correct')
    async correct(@Body() dto:{answerId:number}) {
        return await this.answersService.correct(dto.answerId);
    }
   
}
