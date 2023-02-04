import { CreateAnswerDto } from './dto/create.dto';
import { AnswersService } from './answers.service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
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

    @Get('getByUserId')
    async getByUserId(@Query() dto:{id:number}) {
        return await this.answersService.getByUserId(dto.id);
    }

    @Get('getByUserIdPaginated')
    async getByUserIdPaginated(@Query() dto:GetByUserIdPaginatedDto){
        return await this.answersService.getByUserIdPaginated(dto);
    }

    @Get('getByQuestionId')
    async getByQuestionId(@Query() dto:{id:number}) {
        return await this.answersService.getByQuestionId(dto.id);
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
