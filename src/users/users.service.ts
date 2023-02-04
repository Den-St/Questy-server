import { PaginatedMembersDto } from './../community/dto/paginatedMembers.dto';
import { JwtService } from '@nestjs/jwt';
import { AvatarsService } from '../avatars/avatars.service';
import { HashTagEntity } from '../entities/hash-tag.entity';
import { HashTagsService } from '../hash-tags/hash-tags.service';
import { RolesService } from '../roles/roles.service';
import { UserEntity } from '../entities/user.entity';
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, DataSource, Repository, Like, In } from 'typeorm';
import { CreateUserDto } from './dto/create.dto';
import { AddQuestionDto } from './dto/add-question.dto';
import { AddAnswerDto } from './dto/add-answer.dto';
import { SetUserDetailedInfoDto } from './dto/set-detailed-info.dto';
import { authPayloadT } from 'src/auth/types/authPayloadT';
import { GetByUserIdPaginatedDto } from 'src/answers/dto/getByUserIdPaginated.dto';
import dataSource from 'db/data-source';
import { GetPaginatedDto } from './dto/GetPaginated.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository:Repository<UserEntity>,
                private readonly rolesService:RolesService,
                private readonly hashTagsService:HashTagsService,
                @Inject(forwardRef(() => AvatarsService))private readonly imagesService:AvatarsService ,
                private readonly jwtService:JwtService){}

    
    async save(user:Partial<UserEntity>) {
        return await this.userRepository.save(user);
    }

    async create(dto:CreateUserDto) {
        const role = await this.rolesService.get("USER");
        const newUser = this.userRepository.create({...dto,roles:[role]});
        const userWithName = await this.userRepository.save({...newUser});

        return await this.userRepository.save({...userWithName,name:`user${userWithName.id}`});
    }

    async setDetailedInfo(dto:SetUserDetailedInfoDto) {
        const user = await this.userRepository.findOne({where:{id:dto.userId},relations:[]});
        const hashTags:HashTagEntity[] = [];

        for(let i = 0;i < dto.favoriteHashTags?.length;i++) {
            let hashTag = await this.hashTagsService.getByName(dto.favoriteHashTags[i]);
            await this.hashTagsService.upPopularity(hashTag.id);
            hashTags.push(hashTag);
        }
        const newAvatar = await this.imagesService.create(dto.avatarPath,user.id);

        const newUser = await this.userRepository.save({...user,name:dto.name,favoriteHashTags:hashTags,
            gender:dto.gender,avatar:newAvatar,occasion:dto.occasion,birthdate:dto.birthdate});
        return {
            user:newUser,
            token:this.generateToken(newUser)
        }
    }

    async getById(id:number) {
        const user = await this.userRepository.findOne({where:{id},relations:['avatar','favoriteHashTags']});
        return user;
    }

    async getByIdWithRatedUpQuestions(id:number) {
        const user = await this.userRepository.findOne({where:{id},relations:['ratedUpQuestions']});
        return user;
    }

    async getByIdWithRatedDownQuestions(id:number) {
        const user = await this.userRepository.findOne({where:{id},relations:['ratedDownQuestions']});
        return user;
    }

    async getByIdWithRatedUpAnswers(id:number) {
        const user = await this.userRepository.findOne({where:{id},relations:['ratedUpAnswers']});
        return user;
    }

    async getByIdWithRatedDownAnswers(id:number) {
        const user = await this.userRepository.findOne({where:{id},relations:['ratedDownAnswers']});
        return user;
    }

    async getByIdWithRatedUpDownAnswers(id:number) {
        const user = await this.userRepository.findOne({where:{id},relations:['ratedDownAnswers','ratedUpAnswers']});
        return user;
    }

    async getByIdWithRatedUpDownQuestions(id:number) {
        const user = await this.userRepository.findOne({where:{id},relations:['ratedDownQuestions','ratedUpQuestions']});
        return user;
    }

    async getByIdWithCreatedHashTags(id:number) {
        const user = await this.userRepository.findOne({where:{id},relations:['createdHashTags']});
        const {passwordHash,...userClientData} = user;
        return userClientData;
    }

    async getWithSubscribedQuestions(id:number) {
        return await this.userRepository.findOne({where:{id},relations:['subscribedQuestions']});
    }

    async addQuestion(dto:AddQuestionDto) {
        const user = await this.userRepository.findOne({where:{id:dto.id},relations:['questions']});

        return await this.userRepository.save({...user,questions:[...user.questions,dto.question]});
    }

    async addAnswer(dto:AddAnswerDto) {
        const user = await this.userRepository.findOne({where:{id:dto.id},relations:['answers','notSeenAnswers']});
        
        return await this.userRepository.save({...user,answers:[...user.answers,dto.answer],numberOfAnswers:user.numberOfAnswers + 1,notSeenAnswers:[...user.notSeenAnswers,dto.answer]});
    }

    async getByEmail(email:string) {
        const user = await this.userRepository.findOne({where:{email}});

        return user;
    }
    
    generateToken(userData:UserEntity) {
        const payload:authPayloadT = {...userData} as authPayloadT;
        return this.jwtService.sign(payload);
    }
    async getAllPaginate(dto:GetPaginatedDto) {
        const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
        const take = (dto.pageSize || 10);
        const [users,total] = await this.userRepository
        .findAndCount({
            take,skip
            ,relations:['createdHashTags','avatar']
            ,where:{name:Like(`%${dto.search || ""}%`)}
            ,order:{[dto?.fieldName || 'createdAt']:dto?.orderValue || 'DESC'}

        });

        return {
            users:users,
            total:total
        }
    }

    async edit(dto:SetUserDetailedInfoDto) {
        const user = await this.userRepository.findOne({where:{id:dto.userId},relations:['avatar','favoriteHashTags']});
        const hashTags:HashTagEntity[] = [];
        
        if(!!dto.favoriteHashTags){
            for(let i = 0;i < dto.favoriteHashTags?.length;i++) {
                let hashTag = await this.hashTagsService.getByName(dto.favoriteHashTags[i]);
                await this.hashTagsService.upPopularity(hashTag.id);
                hashTags.push(hashTag);
            }
        }
        
        let newAvatar = user.avatar;
        if(dto.avatarPath.length) {
            newAvatar = await this.imagesService.create(dto.avatarPath,user.id);
        }
        const newUser = await this.userRepository.save({...user,name:dto.name,favoriteHashTags:(!!dto.favoriteHashTags ? hashTags : user.favoriteHashTags),
            gender:dto.gender,avatar:newAvatar,occasion:dto.occasion,birthdate:dto.birthdate,location:dto.location,about:dto.about});
        const {passwordHash,...clientUser} = newUser;
        return {
            user:clientUser,
            token:this.generateToken(newUser)
        }
    }

    async softDelete(id){
        const user = await this.userRepository.findOne({where:{id}});

        return await this.userRepository.save({...user,isDeleted:true});
    }

    async upQuestionNumber(id:number) {
        const user = await this.userRepository.findOne({where:{id}});

        return await this.userRepository.save({...user,numberOfQuestions:user.numberOfQuestions + 1});
    }


    async addToCreatedHashTags(userId:number,hashTag:HashTagEntity) {
        const user = await this.userRepository.findOne({where:{id:userId},relations:['createdHashTags']});

        const newHashTag = await this.hashTagsService.save({...hashTag,creator:user});

        return await this.userRepository.save({...user,createdHashTags:[...user.createdHashTags,newHashTag]});
    }

    async getWithViewedQuestions(id:number){
        return await this.userRepository.findOne({where:{id},relations:['viewedQuestions']});
    }

    async getNotSeenAnswers(id:number){
        return await this.userRepository.findOne({where:{id},relations:['notSeenAnswers','notSeenAnswers.question']})
    }

    async getCorrectAnswers(id:number) {
        return await this.userRepository.findOne({where:{id},relations:['correctAnswersOnSubscribedQuestions','correctAnswersOnSubscribedQuestions.question']});
    }

   async getFavoriteHashTags(id:number) {
    return await this.userRepository.findOne({where:{id},relations:['favoriteHashTags']});
   }

   async removeFavoriteHashTag(dto:{userId:number,hashTagId:number}) {
    const user = await this.userRepository.findOne({where:{id:dto.userId},relations:['favoriteHashTags','avatar']});
    const hashTag = await this.hashTagsService.removeFollower({userId:dto.userId,hashTagId:dto.hashTagId});

    const newUser = await this.userRepository
        .save({...user,favoriteHashTags:[...user.favoriteHashTags.filter(hashTag => hashTag.id !== dto.hashTagId)]});

    const {passwordHash,...clientUser} = newUser;
    return {
        user:clientUser,
        token:this.generateToken(newUser)
    }
   }

   async addToFavoriteHashTag(dto:{userId:number,hashTagId:number}) {
    const user = await this.userRepository.findOne({where:{id:dto.userId},relations:['favoriteHashTags','avatar']});
    const hashTag = await this.hashTagsService.addFollower({user,hashTagId:dto.hashTagId});

    const newUser = await this.userRepository
        .save({...user,favoriteHashTags:[...user.favoriteHashTags,hashTag]});

    const {passwordHash,...clientUser} = newUser;
    return {
        user:clientUser,
        token:this.generateToken(newUser)
    }
   }

   async getWithCreatedCommunitiesAndCommunities(id:number) {
    return await this.userRepository.findOne({where:{id}});


    
   }

   async getMembers(dto:PaginatedMembersDto) {
    const skip = ((dto.page || 1) - 1) * (dto.pageSize || 10);
    const take = (dto.pageSize || 5);
    const [members,total] = await this.userRepository.findAndCount({where:{communities:{id:In([dto.communityId])}},relations:['communities'],take,skip});

    return {
        members,
        total
    }
   }
  
}
