import {forwardRef, HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {UserEntity} from "../entities/user.entity";
import * as bcrypt from 'bcrypt';
import {AuthLoginDto} from "./dto/auth-login.dto";
import {authPayloadT} from "./types/authPayloadT";
import {AuthType} from "./types/auth.type";
import { RegisterDto } from './dto/register.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UsersService)) private readonly userService:UsersService,
        private readonly jwtService:JwtService,
    ) {}

    async validate(email:string,password:string):Promise<UserEntity | null>{
        const user = await this.userService.getByEmail(email);
        if(!user) {
            return null;
        }
        const passwordEquals = bcrypt.compare(user.passwordHash,password);
        return passwordEquals ? user : null;
    }

    async register(dto:RegisterDto):Promise<AuthType> {
        const candidate = await this.userService.getByEmail(dto.email);
        if (candidate) throw new HttpException("email already in use", HttpStatus.BAD_REQUEST);

        const hashPassword = await bcrypt.hash(dto.password, 10);
        const user = await this.userService.create({email:dto.email, passwordHash: hashPassword});
        const {passwordHash,...userClientData} = user;
        return {
            token:this.generateToken(user),
            ...userClientData
        };
    }

    async login(dto:AuthLoginDto):Promise<AuthType>{
        const user = await this.validate(dto.email,dto.password);
        if(user){
            return {
                token: this.generateToken(user),
                ...user
            };
        }
        throw new HttpException("bad login data",HttpStatus.BAD_REQUEST);
    }

    getMe(token:string) {
        const user = this.jwtService.verify(token) as UserEntity;
        const {passwordHash,...userClientData} = user;
        return userClientData;
    }
     
    generateToken(userData:UserEntity) {
        const payload:authPayloadT = {...userData} as authPayloadT;
        return this.jwtService.sign(payload);
    }
}
