import { UsersModule } from 'src/users/users.module';
import { HashTagsService } from './hash-tags.service';
import { HashTagEntity } from '../entities/hash-tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { HashTagsController } from './hash-tags.controller';

@Module({
  imports:[TypeOrmModule.forFeature([HashTagEntity]),forwardRef(() => UsersModule)],
  controllers: [HashTagsController],
  providers: [HashTagsService],
  exports: [HashTagsService]
})
export class HashTagsModule {}
