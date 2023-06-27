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
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../base/base.service");
const notification_entity_1 = require("./entities/notification.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nestjs_1 = require("@automapper/nestjs");
const notification_dto_1 = require("./dto/notification.dto");
let NotificationsService = class NotificationsService extends base_service_1.BaseService {
    constructor(notificationsRepository, mapper) {
        super(notificationsRepository);
        this.notificationsRepository = notificationsRepository;
        this.mapper = mapper;
    }
    async getMyNotifications(account, queries) {
        const { currentPage, sizePage } = queries;
        const [notifications, count] = await this.notificationsRepository.findAndCount({
            where: { account: { id: account.id } },
            skip: sizePage * (currentPage - 1),
            take: sizePage,
            order: { createdAt: 'DESC' },
        });
        return [
            this.mapper.mapArray(notifications, notification_entity_1.NotificationEntity, notification_dto_1.NotificationDto),
            count,
        ];
    }
    async seenNotification(idNotification) {
        const notification = await this.findOne({ where: { id: idNotification } });
        if (!Boolean(notification))
            throw new common_1.HttpException('notification not found', common_1.HttpStatus.NOT_FOUND);
        notification.status = "seen";
        await this.notificationsRepository.save(notification);
        return 'seen success';
    }
};
NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(notification_entity_1.NotificationEntity)),
    __param(1, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [typeorm_2.Repository, Object])
], NotificationsService);
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=notifications.service.js.map