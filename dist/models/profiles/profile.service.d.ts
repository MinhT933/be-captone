/// <reference types="multer" />
import { Repository } from 'typeorm';
import { AccountEntity } from '../accounts/entities/account.entity';
import { BaseService } from '../base/base.service';
import { UpdateProfileDTO } from './dto/update-profile.dto';
import { ProfileEntity } from './entities/profile.entity';
export declare class ProfileService extends BaseService<ProfileEntity> {
    private readonly profileRepository;
    constructor(profileRepository: Repository<ProfileEntity>);
    updateProfile(dto: UpdateProfileDTO, user: AccountEntity): Promise<string>;
    updateProfileAvatar(user: AccountEntity, avatar: Express.Multer.File): Promise<string>;
}
