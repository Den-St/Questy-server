import { QuestionsModule } from '../questions/questions.module';
import { AnswersService } from './answers.service';
import { AnswerEntity } from '../entities/answer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AnswersController } from './answers.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[TypeOrmModule.forFeature([AnswerEntity]),QuestionsModule,UsersModule],
  controllers: [AnswersController],
  providers: [AnswersService],
  exports:[AnswersService]
})
export class AnswersModule {}
