"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_service_1 = require("../base/base.service");
const profile_entity_1 = require("./entities/profile.entity");
const common_2 = require("@nestjs/common");
let ProfileService = class ProfileService extends base_service_1.BaseService {
    constructor(profileRepository) {
        super(profileRepository);
        this.profileRepository = profileRepository;
    }
    async updateProfile(dto, user) {
        try {
            const checkEmail = await this.profileRepository.findOne({
                where: { email: dto.email },
            });
            if (Boolean(checkEmail) && user.id != checkEmail.id) {
                throw new common_2.HttpException(`Email ${dto.email} existed`, common_2.HttpStatus.BAD_REQUEST);
            }
            await this.profileRepository.update({
                id: user.id,
            }, {
                DOB: dto.DOB,
                fullName: dto.fullName,
                email: dto.email,
            });
            return 'Profile update successfull';
        }
        catch (error) {
            throw new common_2.HttpException(`${error}`, common_2.HttpStatus.BAD_REQUEST);
        }
    }
    async updateProfileAvatar(user, avatar) {
        try {
            const imgRes = await this.uploadImageToFirebase(avatar);
            await this.profileRepository.update({
                id: user.id,
            }, {
                avatar: imgRes,
            });
            return 'Profile update successfull';
        }
        catch (error) {
            throw new common_2.HttpException(`${error}`, common_2.HttpStatus.BAD_REQUEST);
        }
    }
};
ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profile_entity_1.ProfileEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map