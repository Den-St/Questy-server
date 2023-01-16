import { AvatarEntity } from '../entities/avatar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvatarsController } from './avatars.controller';
import { Module, forwardRef } from '@nestjs/common';
import { AvatarsService } from './avatars.service';
import { UsersModule } from 'src/users/users.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  providers: [AvatarsService],
  exports:[AvatarsService],
  controllers:[AvatarsController],
  imports:[
    TypeOrmModule.forFeature([AvatarEntity]),
    forwardRef(() => UsersModule),
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: 'uploads/profileimages',
      }),
      
    })
  ]
})
export class AvatarsModule {}
