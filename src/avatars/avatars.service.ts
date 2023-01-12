import { UsersService } from '../users/users.service';
import { AvatarEntity } from '../entities/avatar.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class AvatarsService {
    constructor(@InjectRepository(AvatarEntity) private readonly imagesRepository:Repository<AvatarEntity>,
                @Inject(forwardRef(() => UsersService)) private readonly usersService:UsersService){}

    async create(filePath:string,userId:number) {
        const user = await this.usersService.getById(userId);
        const image = this.imagesRepository.create({path:filePath,user});

        return await this.imagesRepository.save(image);
    }
}
