import { JoinCommunityDto } from './dto/joinCommunity.dto';
import { CommunityService } from './community.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateCommunityDto } from './dto/createCommunity.dto';
import { GetWithFiltersDto } from './dto/getWithFilters.dto';

@Controller('community')
export class CommunityController {
    constructor(private readonly communityService:CommunityService){}

    @Post('create')
    async create(@Body() dto:CreateCommunityDto){
        return await this.communityService.create(dto);
    }

    @Post('getPaginated')
    async getPaginated(@Body() dto:GetWithFiltersDto) {
        return await this.communityService.getPaginated(dto);
    }

    @Get('getOne/:id')
    async get(@Param('id') id:number){
        return await this.communityService.get(id);
    }

    @Get('getMembers/:id') 
    async getUsers(@Param() id:number){
        return await this.communityService.getMembers(id);
    }

    @Get('getMessages/:id')
    async getMessages(@Param() id:number) {
        return await this.communityService.getMessages(id);
    }

    @Post('join')
    async join(@Body() dto:JoinCommunityDto) {
        return await this.communityService.join(dto);
    }

    @Post('left')
    async left(@Body() dto:JoinCommunityDto) {
        return await this.communityService.left(dto);
    }

    @Delete('delete')
    async delete(@Body() dto:{communityId:number}) {
        return await this.communityService.delete(dto.communityId);
    }
}
