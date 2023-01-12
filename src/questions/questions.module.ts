import { HashTagsModule } from 'src/hash-tags/hash-tags.module';
import { UsersModule } from 'src/users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionEntity } from 'src/entities/question.entity';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService],
  imports:[TypeOrmModule.forFeature([QuestionEntity]),UsersModule,HashTagsModule],
  exports:[QuestionsService]
})
export class QuestionsModule {}
