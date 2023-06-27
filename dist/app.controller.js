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
exports.TestController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("./decorators/public.decorator");
const vnpay_service_1 = require("./providers/vnpay/vnpay.service");
const vnpay_dto_1 = require("./providers/vnpay/vnpay.dto");
const user_decorator_1 = require("./decorators/user.decorator");
const account_entity_1 = require("./models/accounts/entities/account.entity");
const firebase_message_service_1 = require("./providers/firebase/message/firebase-message.service");
let TestController = class TestController {
    constructor(vnpay, firebaseMessage) {
        this.vnpay = vnpay;
        this.firebaseMessage = firebaseMessage;
    }
    payment(req) {
        const ip = req.header('x-forwarded-for') ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress;
        const url = this.vnpay.payment(ip, 1000000, 'NCB', 'test thu', 'other', '');
        return url;
    }
    vnpayReturn(vnpayDto) {
        return this.vnpay.returnUrl(vnpayDto);
    }
    async testNotify(user) {
        if (user.deviceToken === null) {
            return 'sorry you can not device token';
        }
        await this.firebaseMessage.getMessaging().sendToDevice(user.deviceToken, {
            data: {
                title: 'hello',
            },
            notification: {
                title: 'xin chao',
                body: 'haha',
            },
        });
        return 'send notification success';
    }
};
__decorate([
    (0, common_1.Get)('/vnpay'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], TestController.prototype, "payment", null);
__decorate([
    (0, common_1.Get)('/returnVnpay'),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [vnpay_dto_1.VnpayDto]),
    __metadata("design:returntype", Object)
], TestController.prototype, "vnpayReturn", null);
__decorate([
    (0, common_1.Post)('/testNotify'),
    __param(0, (0, user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [account_entity_1.AccountEntity]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "testNotify", null);
TestController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('test'),
    (0, swagger_1.ApiTags)('app'),
    __metadata("design:paramtypes", [vnpay_service_1.VnpayService,
        firebase_message_service_1.FirebaseMessageService])
], TestController);
exports.TestController = TestController;
//# sourceMappingURL=app.controller.js.map