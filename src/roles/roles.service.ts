import { RoleEntity } from '../entities/role.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
    constructor(@InjectRepository(RoleEntity) private readonly rolesRepository:Repository<RoleEntity>){}

    async create(value:string) {
        const newRole = this.rolesRepository.create({value:value});

        return await this.rolesRepository.save(newRole);
    }
    
    async get(value:string) {
        return await this.rolesRepository.findOne({where:{value}});
    }
}
