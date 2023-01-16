import { UsersService } from 'src/users/users.service';
import { GetByUserIdPaginatedDto } from './../answers/dto/getByUserIdPaginated.dto';
import { HashTagEntity } from '../entities/hash-tag.entity';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository ,Like } from 'typeorm';
import { CreateHashTagDto } from './dto/create.dto';
import { GetPaginatedDto } from 'src/users/dto/GetPaginated.dto';
import { GetPaginatedQuestions } from './dto/getPaginatedQuestions.dto';
import { UserEntity } from 'src/entities/user.entity';

@Injectable()
export class HashTagsService {
    constructor(@InjectRepository(HashTagEntity) private readonly hashtagRepository:Repository<HashTagEntity>,
                @Inject(forwardRef(() => UsersService)) private readonly userService:UsersService){}

    
    async getById(id:number){
        return await this.hashtagRepository.findOne({where:{id}});
    }

    async save(dto:HashTagEntity){
        return await this.hashtagRepository.save({...dto});
    }

    async create(dto:CreateHashTagDto) {
        const creator = await this.userService.getByIdWithCreatedHashTags(dto.creatorId);
        const newTag = this.hashtagRepository.create({name:dto.name,description:dto.description,creator});
        await this.userService.save({...creator,createdHashTags:[...creator.createdHashTags,newTag]});

        return await this.hashtagRepository.save(newTag);
    }

    async getByName(name:string) {
        const hashTag = await this.hashtagRepository.findOne({where:{name}});

        return hashTag;
    }

    async getByNameWithInUsed(name:string) {
        const hashTag = await this.hashtagRepository.findOne({where:{name},relations:['usedBy']});
        console.log('f',hashTag)
        return hashTag; 
    }

    async upPopularity(id:number) {
        const hashTag = await this.hashtagRepository.findOne({where:{id}});

        return await this.hashtagRepository.save({...hashTag,followersNumber:hashTag.followersNumber + 1});
    }

    async searchByName(name:string) {
        if(!name) return [];
        const hashTags = await this.hashtagRepository.find({
            where:{name:Like(`%${name}%`)},
            take:5,
            order:{followersNumber:"ASC"}
        });

        return hashTags;
    }

    async getByNameAndIncreaseQuestionNumber(name:string) {
        let hashTag = await this.hashtagRepository.findOne({where:{name}});
        hashTag = await this.hashtagRepository.save({...hashTag,questionsNumber:hashTag.questionsNumber + 1});

        return hashTag;
    }


    async getCreatedHashTagsPaginated(dto:GetByUserIdPaginatedDto) {
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);

        const [hashTags,total] = await this.hashtagRepository
            .findAndCount({
                where:{'creator':{'id':dto.userId}},
                relations:['creator'],
                skip,
                take
                ,order:{[dto?.orderRule?.fieldName || 'createdAt']:dto.orderRule.orderValue || 'DESC'}
            });

        return {
            hashTags,
            total
        }
    }

    async getPaginated(dto:GetPaginatedDto) {
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);

        const [hashTags,total] = await this.hashtagRepository
        .findAndCount({
            take,skip
            ,order:{[dto?.orderRule?.fieldName || 'questionsNumber']:(dto?.orderRule?.orderValue || 'ASC')}
            ,where:{name:Like(`%${dto.search || ""}%`)}
        });

        return {
            hashTags,
            total
        }
    }

    async getPaginatedQuestions(dto:GetPaginatedQuestions) {
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);

        // const [hashTags,total] = await this.hashtagRepository
        //     .createQueryBuilder("hash")
        //     .leftJoinAndMapMany("")

        // return {
        //     hashTags,
        //     total
        // }
    }

    async getWithFollowers(id:number) {
        return await this.hashtagRepository.findOne({where:{id},relations:['followers']});
    }

    async addFollower(dto:{user:UserEntity,hashTagId:number}) {
        const hashTag = await this.hashtagRepository.findOne({where:{id:dto.hashTagId}});

        return await this.hashtagRepository.save({...hashTag,followersNumber:hashTag.followersNumber + 1});
        // return await this.hashtagRepository.save({...hashTag,followers:[...hashTag.followers,dto.user],followersNumber:hashTag.followersNumber + 1});
    }

    async removeFollower(dto:{userId:number,hashTagId:number}){
        const hashTag = await this.hashtagRepository.findOne({where:{id:dto.hashTagId}});

        return await this.hashtagRepository
            .save({...hashTag,followersNumber:hashTag.followersNumber - 1});

        // return await this.hashtagRepository
        //     .save({...hashTag,followers:[...hashTag.followers.filter(user => user.id !== dto.userId)],followersNumber:hashTag.followersNumber - 1});
    }
}
