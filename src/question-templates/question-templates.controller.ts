import { Body, Controller, Get, Post, Param, Delete, Patch, Query } from '@nestjs/common';
import { CreateDto } from './dto/createDto';
import { DeleteDto } from './dto/delete.dto';
import { EditDto } from './dto/edit.dto';
import { QuestionTemplatesService } from './question-templates.service';

@Controller('question-templates')
export class QuestionTemplatesController {
    constructor(private readonly questionTemplatesService:QuestionTemplatesService) {}

    @Post('create')
    async create(@Body() dto:CreateDto) {
        return await this.questionTemplatesService.create(dto);
    }

    @Get('get')
    async get(@Query() dto:{id:number}){
        return await this.questionTemplatesService.get(dto.id);
    }

    @Get('getAllByUserId')
    async getAllByUserId(@Query() dto:{userId:number}){
        return await this.questionTemplatesService.getAllByUserId(dto.userId);
    }

    @Patch('edit')
    async edit(@Body() dto:EditDto) {
        return await this.questionTemplatesService.edit(dto);
    }
    
    @Delete('delete/:id')
    async delete(@Param('id') id:number) {
        return await this.questionTemplatesService.delete(id);
    }
}
