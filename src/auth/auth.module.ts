import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {JwtModule} from "@nestjs/jwt";
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [AuthService],
  imports:[
    forwardRef(() => UsersModule),
    JwtModule.register({
      secret: "secretKey",
      signOptions: { expiresIn: '30d' },
    }),
  ],exports:[AuthService],
  controllers:[AuthController]
})
export class AuthModule {}
