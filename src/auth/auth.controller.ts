import { AuthGuard } from './AuthGuard.decorator';
import { RegisterDto } from './dto/register.dto';
import {AuthService} from "./auth.service";
import {AuthLoginDto} from "./dto/auth-login.dto";
import {Body, Controller, Get, Post, UseGuards} from "@nestjs/common";
import {AuthType} from "./types/auth.type";
import { Token } from './Token.decorator';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService:AuthService
    ) {}

    @Post('register')
    async register(@Body() dto:RegisterDto):Promise<AuthType> {
        return await this.authService.register(dto);
    }

    @Post('login')
    async login(@Body() dto:AuthLoginDto):Promise<AuthType> {
        return await this.authService.login(dto);
    }

    @UseGuards(AuthGuard)
    @Get('getMe')
    getMe(@Token() token: string) {
        return this.authService.getMe(token);
    }
}
