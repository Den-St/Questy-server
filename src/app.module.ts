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
import { ServeStaticModule } from '@nestjs/serve-static';
import { CommunityController } from './community/community.controller';
import { CommunityModule } from './community/community.module';
import { MessageService } from './message/message.service';
import { MessageController } from './message/message.controller';
import { MessageModule } from './message/message.module';
import * as path from 'path';

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
    CommunityModule,
    MessageModule,
    // ServeStaticModule.forRoot({
    //   rootPath: path.resolve('uploads/profileimages'),
    // }),
  ],
  controllers: [QuestionTemplatesController, CommunityController, MessageController],
  providers: [MessageService],
})
export class AppModule {}