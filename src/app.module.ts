import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import { dataSourceOptions } from 'db/data-source';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { HashTagsModule } from './hash-tags/hash-tags.module';
import { AnswersModule } from './answers/answers.module';
import { AvatarsModule } from './avatars/avatars.module';
import { QuestionsModule } from './questions/questions.module';
import { QuestionTemplatesController } from './question-templates/question-templates.controller';
import { QuestionTemplatesModule } from './question-templates/question-templates.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true,envFilePath:'../.env'}),
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    RolesModule,
    HashTagsModule,
    QuestionsModule,
    AnswersModule,
    AuthModule,
    AvatarsModule,
    QuestionTemplatesModule,
  ],
  controllers: [QuestionTemplatesController],
})
export class AppModule {}
