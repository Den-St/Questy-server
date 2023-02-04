import { CreateHashTagDto } from './dto/create.dto';
import { Body, Controller, Get, Post, Param, Query } from '@nestjs/common';
import { GetByUserIdPaginatedDto } from 'src/answers/dto/getByUserIdPaginated.dto';
import { GetPaginatedDto } from 'src/users/dto/GetPaginated.dto';
import { GetPaginatedQuestions } from './dto/getPaginatedQuestions.dto';
import { SearchHashTagsByName } from './dto/search-by-name.dto';
import { HashTagsService } from './hash-tags.service';

@Controller('hash-tags')
export class HashTagsController {
    constructor(private readonly hashTagsService:HashTagsService) {}

    @Post('create')
    async create(@Body() dto:CreateHashTagDto) {
        return await this.hashTagsService.create(dto);
    }

    @Get('searchByName')
    async searchByHame(@Query() dto:SearchHashTagsByName){
        return await this.hashTagsService.searchByName(dto.name);
    }

    @Get('getCreatedHashTagsPaginated')
    async getCreatedHashTagsPaginated(@Query() dto:GetByUserIdPaginatedDto){
        return await this.hashTagsService.getCreatedHashTagsPaginated(dto);
    }

    @Get("getPaginated")
    async getPaginated(@Query() dto:GetPaginatedDto) {
        return await this.hashTagsService.getPaginated(dto);
    }

}
