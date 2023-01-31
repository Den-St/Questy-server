import { GetWithFiltersDto } from './dto/getWithFilters.dto';
import { HashTagsService } from 'src/hash-tags/hash-tags.service';
import { HashTagEntity } from 'src/entities/hash-tag.entity';
import { CommunityEntity } from './../entities/community.entity';
import { UsersService } from 'src/users/users.service';
import { In, Like, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommunityDto } from './dto/createCommunity.dto';
import { JoinCommunityDto } from './dto/joinCommunity.dto';

@Injectable()
export class CommunityService {
    constructor(
        @InjectRepository(CommunityEntity) private readonly communityRepository:Repository<CommunityEntity>,
        private readonly userService:UsersService,
        private readonly hashTagService:HashTagsService
        ){}

    async create(dto:CreateCommunityDto) {
        const user = await this.userService.getWithCreatedCommunitiesAndCommunities(dto.creatorId);
        const hashTags:HashTagEntity[] = [];
        
        for(let i = 0;i < dto.hashTagIds.length;i++){
            let hashTag = await this.hashTagService.getByIdWithCommunities(dto.hashTagIds[i]);
            hashTags.push(hashTag);
        }
        
        const community = await this.communityRepository.create({creator:user,hashTags,members:[user],name:dto.name});
        return await this.communityRepository.save(community);
    }

    async get(id:number) {
        return await this.communityRepository.findOne({where:{id}}); 
    }
    async getMembers(id:number) {
        return await this.communityRepository.findOne({where:{id},relations:['members']});
    }
    async getMessages(id:number) {
        return await this.communityRepository.findOne({where:{id},relations:['messages']});
    }

    async getPaginated(dto:GetWithFiltersDto) {
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);
        const hashTags = dto?.hashTags?.split(";").filter(hashTag => hashTag.length);
        console.log(dto)
        const [communities,total] = await this.communityRepository.findAndCount({
            where:{hashTags:(hashTags?.length ? {name:In(hashTags)} : null),name:Like(`%${dto?.search || ''}%`)}
            ,skip
            ,take
            ,order:{[dto?.orderRule?.fieldName || 'createdAt']:dto.orderRule.orderValue || 'DESC'}
            ,relations:['hashTags']
        });
        
        console.log(communities);
        return {
            communities,
            total
        }
    }

    async join(dto:JoinCommunityDto) {
        const community = await this.communityRepository.findOne({where:{id:dto.communityId},relations:['members']});
        const user = await this.userService.getById(dto.userId);

        return await this.communityRepository.save({...community,members:[...community.members,user],membersNumber:community.membersNumber + 1});
    }

    async left(dto:JoinCommunityDto) {
        const community = await this.communityRepository.findOne({where:{id:dto.communityId},relations:['members']});
        const user = await this.userService.getById(dto.userId);

        return await this.communityRepository.save(
            {...community,members:[...community.members.filter(member => member.id !== dto.userId)],membersNumber:community.membersNumber - 1}
            );
    }

    async delete(communityId:number) {
        return await this.communityRepository.delete({id:communityId});
    }
}
