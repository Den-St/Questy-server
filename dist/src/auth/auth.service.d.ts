import { JwtService } from "@nestjs/jwt";
import { UserEntity } from "../entities/user.entity";
import { AuthLoginDto } from "./dto/auth-login.dto";
import { AuthType } from "./types/auth.type";
import { RegisterDto } from './dto/register.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validate(email: string, password: string): Promise<UserEntity | null>;
    register(dto: RegisterDto): Promise<AuthType>;
    login(dto: AuthLoginDto): Promise<AuthType>;
    getMe(token: string): {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        gender: string;
        favoriteHashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        email: string;
        occasion: string;
        birthdate: string;
        roles: import("../entities/role.entity").RoleEntity[];
        questions: import("../entities/question.entity").QuestionEntity[];
        answers: import("../entities/answer.entity").AnswerEntity[];
        numberOfAnswers: number;
        numberOfQuestions: number;
        rating: number;
        location: string;
        avatar: import("../entities/avatar.entity").AvatarEntity;
        isDeleted: boolean;
        about: string;
        createdHashTags: import("../entities/hash-tag.entity").HashTagEntity[];
        questionTemplates: import("../entities/question-template.entity").QuestionTemplateEntity[];
        ratedUpQuestions: import("../entities/question.entity").QuestionEntity[];
        ratedDownQuestions: import("../entities/question.entity").QuestionEntity[];
        viewedQuestions: import("../entities/question.entity").QuestionEntity[];
        ratedUpAnswers: import("../entities/answer.entity").AnswerEntity[];
        ratedDownAnswers: import("../entities/answer.entity").AnswerEntity[];
        subscribedQuestions: import("../entities/question.entity").QuestionEntity[];
        notSeenAnswers: import("../entities/answer.entity").AnswerEntity[];
    };
    generateToken(userData: UserEntity): string;
}
