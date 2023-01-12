import { AvatarsModule } from '../avatars/avatars.module';
import { HashTagsModule } from 'src/hash-tags/hash-tags.module';
import { RolesModule } from '../roles/roles.module';
import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { MulterModule } from '@nestjs/platform-express';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity]),
  RolesModule,HashTagsModule,
  forwardRef(() => AvatarsModule),
  JwtModule.register({
    secret: "secretKey",
    signOptions: { expiresIn: '30d' },
  }),
  MulterModule.registerAsync({
    useFactory: () => ({
      dest: 'uploads/profileimages',
    }),
  })
],
  providers: [UsersService,],
  controllers: [UsersController],
  exports:[UsersService]
})
export class UsersModule {}
