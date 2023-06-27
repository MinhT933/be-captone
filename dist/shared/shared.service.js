"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedService = void 0;
const common_1 = require("@nestjs/common");
let SharedService = class SharedService {
    generateOtp() {
        let code = 0;
        do {
            code = Math.floor(Math.random() * 10000);
        } while (code < 1000);
        return code;
    }
    verifyOTPSignUp(otp, codeVerify, dateExpiredVerifyCode) {
        const diff = Math.abs(Date.now() - dateExpiredVerifyCode.getTime());
        const minutes = Math.floor(diff / 1000 / 60);
        if (otp === codeVerify && minutes > 5) {
            throw new common_1.BadRequestException('OTP time up.!');
        }
        if (otp !== codeVerify && minutes < 5) {
            throw new common_1.BadRequestException('OTP is wrong.!');
        }
        if (otp !== codeVerify && minutes > 5) {
            throw new common_1.BadRequestException('OTP is wrong and time up.!');
        }
    }
};
SharedService = __decorate([
    (0, common_1.Injectable)()
], SharedService);
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map