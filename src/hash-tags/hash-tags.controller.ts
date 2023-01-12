import { CreateHashTagDto } from './dto/create.dto';
import { Body, Controller, Post } from '@nestjs/common';
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

    @Post('/searchByName')
    async searchByHame(@Body() dto:SearchHashTagsByName){
        return await this.hashTagsService.searchByName(dto.name);
    }

    @Post('/getCreatedHashTagsPaginated')
    async getCreatedHashTagsPaginated(@Body() dto:GetByUserIdPaginatedDto){
        return await this.hashTagsService.getCreatedHashTagsPaginated(dto);
    }

    @Post("/getPaginated")
    async getPaginated(@Body() dto:GetPaginatedDto) {
        return await this.hashTagsService.getPaginated(dto);
    }

    @Post('/getPaginatedQuestions')
    async getPaginatedQuestions(@Body() dto:GetPaginatedQuestions){
        return await this.hashTagsService.getPaginatedQuestions(dto);
    }
}
