import { RolesService } from './roles.service';
import { Body, Controller, Post, Get } from '@nestjs/common';
import { GetRoleDto } from './dto/get.dto';
import { CreateRoleDto } from './dto/create.dto';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService:RolesService){}

    @Post('create')
    async create(@Body() dto:CreateRoleDto) {
        return await this.rolesService.create(dto.value);
    }

    @Get('get')
    async get(@Body() dto:GetRoleDto) {
        return await this.rolesService.get(dto.value);
    }
}
