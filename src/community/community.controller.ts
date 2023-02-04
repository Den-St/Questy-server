import { JoinCommunityDto } from './dto/joinCommunity.dto';
import { CommunityService } from './community.service';
import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateCommunityDto } from './dto/createCommunity.dto';
import { GetWithFiltersDto } from './dto/getWithFilters.dto';
import { PaginatedMembersDto } from './dto/paginatedMembers.dto';

@Controller('community')
export class CommunityController {
    constructor(private readonly communityService:CommunityService){}

    @Post('create')
    async create(@Body() dto:CreateCommunityDto){
        return await this.communityService.create(dto);
    }

    @Get('getPaginated')
    async getPaginated(@Query() dto:GetWithFiltersDto) {
        return await this.communityService.getPaginated(dto);
    }

    @Get('get')
    async get(@Query() dto:{id:number}){
        return await this.communityService.get(dto.id);
    }

    @Get('getMembers') 
    async getMembers(@Query() dto:PaginatedMembersDto){
        return await this.communityService.getMembers(dto);
    }

    @Get('getMessages')
    async getMessages(@Query() dto:{id:number}) {
        return await this.communityService.getMessages(dto.id);
    }

    @Post('join')
    async join(@Body() dto:JoinCommunityDto) {
        return await this.communityService.join(dto);
    }

    @Post('leave')
    async leave(@Body() dto:JoinCommunityDto) {
        return await this.communityService.leave(dto);
    }

    @Delete('delete')
    async delete(@Body() dto:{communityId:number}) {
        return await this.communityService.delete(dto.communityId);
    }
}
