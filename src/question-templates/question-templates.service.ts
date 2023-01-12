import { DeleteDto } from './dto/delete.dto';
import { EditDto } from './dto/edit.dto';
import { UsersService } from 'src/users/users.service';
import { QuestionTemplateEntity } from './../entities/question-template.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDto } from './dto/createDto';
import { HashTagsService } from 'src/hash-tags/hash-tags.service';
import { HashTagEntity } from 'src/entities/hash-tag.entity';
import { compareArrays } from 'src/helpers/compareArrays';

@Injectable()
export class QuestionTemplatesService {
    constructor(
        @InjectRepository(QuestionTemplateEntity) private readonly questionTemplatesRepository:Repository<QuestionTemplateEntity>,
        private readonly usersService:UsersService,
        private readonly hashTagsService:HashTagsService
    ) {}

    async create(dto:CreateDto) {
        console.log(dto)
        const creator = await this.usersService.getById(dto.creatorId);
        const hashTags:HashTagEntity[] = [];

        for(let i = 0;i < dto.hashTags.length;i++) {
            const hashTag = await this.hashTagsService.getByName(dto.hashTags[i]);
            hashTags.push(hashTag);
        }

        return await this.questionTemplatesRepository.save({creator,hashTags,body:dto.body,title:dto.title});
    }

    async get(id:number){
        return await this.questionTemplatesRepository.findOne({where:{id},relations:['hashTags']})
    }

    async getAllByUserId(userId:number) {
        return await this.questionTemplatesRepository.find({where:{'creator':{id:userId}}});
    }

    async edit(dto:EditDto) {
        const template = await this.questionTemplatesRepository.findOne({where:{id:dto.templateId},relations:['hashTags']});
        const hashTags:HashTagEntity[] = [];

        if(!compareArrays(dto.hashTags,template.hashTags.map(hashTag => hashTag.name))){
            for(let i = 0;i < dto.hashTags?.length;i++) {
                let hashTag = await this.hashTagsService.getByName(dto.hashTags[i]);
                hashTags.push(hashTag);
            }
        }

        return await this.questionTemplatesRepository.save({...template,title:dto.title,body:dto.body,hashTags});
    }

    async delete(id:number) {
        return await this.questionTemplatesRepository.delete({id});
    }
}
