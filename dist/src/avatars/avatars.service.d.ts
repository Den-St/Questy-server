import { UsersService } from '../users/users.service';
import { AvatarEntity } from '../entities/avatar.entity';
import { Repository } from 'typeorm';
export declare class AvatarsService {
    private readonly imagesRepository;
    private readonly usersService;
    constructor(imagesRepository: Repository<AvatarEntity>, usersService: UsersService);
    create(filePath: string, userId: number): Promise<AvatarEntity>;
}
