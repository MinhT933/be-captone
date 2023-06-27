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
exports.ProfilesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const profile_service_1 = require("./profile.service");
const user_decorator_1 = require("../../decorators/user.decorator");
const account_entity_1 = require("../accounts/entities/account.entity");
const platform_express_1 = require("@nestjs/platform-express");
const update_profile_dto_1 = require("./dto/update-profile.dto");
const update_avatar_dto_1 = require("./dto/update-avatar.dto");
let ProfilesController = class ProfilesController {
    constructor(profilesService) {
        this.profilesService = profilesService;
    }
    async updateProfile(dto, user) {
        return await this.profilesService.updateProfile(dto, user);
    }
    async updateProfileAvatar(dto, user, avatar) {
        return await this.profilesService.updateProfileAvatar(user, avatar);
    }
};
__decorate([
    (0, common_1.Put)(),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Update profile',
        type: String,
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_profile_dto_1.UpdateProfileDTO,
        account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], ProfilesController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Put)('avatar'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Update avatar',
        type: String,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.GetUser)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_avatar_dto_1.UpdateAvatarDTO,
        account_entity_1.AccountEntity, Object]),
    __metadata("design:returntype", Promise)
], ProfilesController.prototype, "updateProfileAvatar", null);
ProfilesController = __decorate([
    (0, common_1.Controller)('profiles'),
    (0, swagger_1.ApiTags)('profiles'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfilesController);
exports.ProfilesController = ProfilesController;
//# sourceMappingURL=profile.controller.js.map