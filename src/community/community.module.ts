import { UsersModule } from 'src/users/users.module';
import { CommunityEntity } from './../entities/community.entity';
import { CommunityController } from './community.controller';
import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HashTagsModule } from 'src/hash-tags/hash-tags.module';

@Module({
  providers: [CommunityService],
  imports:[UsersModule,
    TypeOrmModule.forFeature([CommunityEntity]),
    HashTagsModule],
  exports:[CommunityService],
  controllers:[CommunityController],
})
export class CommunityModule {}
