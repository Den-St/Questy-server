import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { CreateDto } from './dto/createDto';
import { DeleteDto } from './dto/delete.dto';
import { EditDto } from './dto/edit.dto';
import { QuestionTemplatesService } from './question-templates.service';

@Controller('question-templates')
export class QuestionTemplatesController {
    constructor(private readonly questionTemplatesService:QuestionTemplatesService) {}

    @Post('create')
    async create(@Body() dto:CreateDto) {
        console.log('v',dto)
        return await this.questionTemplatesService.create(dto);
    }

    @Get('get/:id')
    async get(@Param('id') id:number){
        return await this.questionTemplatesService.get(id);
    }

    @Get('getAllByUserId/:userId')
    async getAllByUserId(@Param('userId') userId:number){
        return await this.questionTemplatesService.getAllByUserId(userId);
    }

    @Post('edit')
    async edit(@Body() dto:EditDto) {
        console.log('dto',dto)
        return await this.questionTemplatesService.edit(dto);
    }
    
    @Delete('delete/:id')
    async delete(@Param('id') id:number) {
        return await this.questionTemplatesService.delete(id);
    }
}
