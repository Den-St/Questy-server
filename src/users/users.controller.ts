import { PaginatedMembersDto } from './../community/dto/paginatedMembers.dto';
import { SetUserDetailedInfoDto } from './dto/set-detailed-info.dto';
import { CreateUserDto } from './dto/create.dto';
import { UsersService } from './users.service';
import { Controller, Get, Post, Body, Patch, Param, UseInterceptors, UploadedFile, Delete } from '@nestjs/common';
import { GetByUserIdPaginatedDto } from 'src/answers/dto/getByUserIdPaginated.dto';
import { GetPaginatedDto } from './dto/GetPaginated.dto';

@Controller('users')
export class UsersController {
    constructor(public readonly usersService:UsersService){}

    @Post('create')
    async create(@Body() dto:CreateUserDto) {
        return await this.usersService.create(dto);
    }

    @Patch('setDetailedInfo')
    async setDetailedInfo(@Body() dto:SetUserDetailedInfoDto) {
        return await this.usersService.setDetailedInfo(dto);
    }

    @Get('getAllPaginated/:page/:pageSize/:fieldName/:orderValue/:search?')
    async getAllPaginate(@Param() dto:GetPaginatedDto){
        return await this.usersService.getAllPaginate(dto);
    }

    @Get('getById/:id')
    async getById(@Param('id') id:number) {
        return await this.usersService.getById(id);
    }
    
    @Patch('edit')
    async edit(@Body() dto:SetUserDetailedInfoDto) {
        return await this.usersService.edit(dto)
    }

    @Delete('delete/:id')
    async softDelete(@Param("id") id:number){
        return await this.usersService.softDelete(id);
    }

    @Get('getNotSeenAnswers/:id')
    async getNotSeenAnswers(@Param('id') id:number) {
        return await this.usersService.getNotSeenAnswers(id);
    }

    @Get('getCorrectAnswers/:id')
    async getCorrectAnswers(@Param('id') id:number) {
        return await this.usersService.getCorrectAnswers(id);
    }

    @Get('getFavoriteHashTags/:id')
    async getFavoriteHashTags(@Param('id') id:number) {
        return await this.usersService.getFavoriteHashTags(id);
    }

    @Post('removeFavoriteHashTag')
    async removeFavoriteHashTag(@Body() dto:{userId:number,hashTagId:number}) {
        return await this.usersService.removeFavoriteHashTag(dto);
    }

    @Post('addToFavoriteHashTag')
    async addToFavoriteHashTag(@Body() dto:{userId:number,hashTagId:number}) {
        return await this.usersService.addToFavoriteHashTag(dto);
    }

   @Get('getMembers/:page/:pageSize/:communityId')
   async getMembers(@Param() dto:PaginatedMembersDto){
        return await this.usersService.getMembers(dto);
   }
}
