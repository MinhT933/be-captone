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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesController = void 0;
const role_entity_1 = require("./entities/role.entity");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_service_1 = require("./roles.service");
const nestjs_1 = require("@automapper/nestjs");
const public_decorator_1 = require("../../decorators/public.decorator");
const role_dto_1 = require("./dto/role.dto");
let RolesController = class RolesController {
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    async getAll() {
        return await this.rolesService.query();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, public_decorator_1.Public)(),
    (0, common_1.UseInterceptors)((0, nestjs_1.MapInterceptor)(role_entity_1.RoleEntity, role_dto_1.RoleDTO, { isArray: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getAll", null);
RolesController = __decorate([
    (0, common_1.Controller)('roles'),
    (0, swagger_1.ApiTags)('roles'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
exports.RolesController = RolesController;
//# sourceMappingURL=roles.controller.js.map