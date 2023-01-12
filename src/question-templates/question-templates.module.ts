import { QuestionTemplatesController } from './question-templates.controller';
import { HashTagsModule } from 'src/hash-tags/hash-tags.module';
import { UsersModule } from 'src/users/users.module';
import { QuestionTemplateEntity } from './../entities/question-template.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { QuestionTemplatesService } from './question-templates.service';

@Module({
  providers: [QuestionTemplatesService],
  exports:[QuestionTemplatesService],
  imports:[TypeOrmModule.forFeature([QuestionTemplateEntity]),UsersModule,HashTagsModule],
  controllers:[QuestionTemplatesController]
})
export class QuestionTemplatesModule {}
