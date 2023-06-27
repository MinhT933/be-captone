/// <reference types="multer" />
import { ProfileService } from './profile.service';
import { AccountEntity } from '../accounts/entities/account.entity';
import { UpdateProfileDTO } from './dto/update-profile.dto';
import { UpdateAvatarDTO } from './dto/update-avatar.dto';
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfileService);
    updateProfile(dto: UpdateProfileDTO, user: AccountEntity): Promise<string>;
    updateProfileAvatar(dto: UpdateAvatarDTO, user: AccountEntity, avatar: Express.Multer.File): Promise<string>;
}
