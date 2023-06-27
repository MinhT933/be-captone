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
exports.VnpayService = void 0;
const common_1 = require("@nestjs/common");
const querystring = require("qs");
const crypto = require("crypto");
const config_service_1 = require("../../config/vnpay/config.service");
let VnpayService = class VnpayService {
    constructor(vnpayConfig) {
        this.vnpayConfig = vnpayConfig;
    }
    payment(ipAddr, amount, bankCode, orderInfo, orderType, locale) {
        let vnpUrl = this.vnpayConfig.url;
        const secretKey = this.vnpayConfig.hashSecret;
        const date = new Date().toISOString().split(new RegExp('[-T:.]'));
        const time = new Date(Date.now()).toString().split(new RegExp('[ :]'));
        const createDate = date[0] + date[1] + date[2] + time[4] + time[5] + time[6];
        const orderId = time[4] + time[5] + time[6];
        if (locale === null || locale === '') {
            locale = 'vn';
        }
        const vnpParams = {
            vnp_Version: '2.1.0',
            vnp_Command: 'pay',
            vnp_TmnCode: this.vnpayConfig.tmnCode,
            vnp_Locale: locale,
            vnp_CurrCode: 'VND',
            vnp_TxnRef: orderId,
            vnp_OrderInfo: orderInfo,
            vnp_OrderType: orderType,
            vnp_Amount: amount * 100,
            vnp_ReturnUrl: this.vnpayConfig.returnUrl,
            vnp_IpAddr: ipAddr,
            vnp_CreateDate: createDate,
            vnp_BankCode: '',
        };
        if (bankCode !== null && bankCode !== '') {
            vnpParams.vnp_BankCode = bankCode;
        }
        const vnpParamsSorted = this.sortObject(vnpParams);
        const signData = querystring.stringify(vnpParamsSorted, { encode: false });
        const hmac = crypto.createHmac('sha512', secretKey);
        const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');
        vnpParamsSorted['vnp_SecureHash'] = signed;
        vnpUrl += '?' + querystring.stringify(vnpParamsSorted, { encode: false });
        return vnpUrl;
    }
    sortObject(obj) {
        const sorted = {};
        const str = [];
        let key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                str.push(encodeURIComponent(key));
            }
        }
        str.sort();
        for (key = 0; key < str.length; key++) {
            sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+');
        }
        return sorted;
    }
    returnUrl(vnpayDto) {
        const secureHash = vnpayDto.vnp_SecureHash;
        delete vnpayDto['vnp_SecureHash'];
        delete vnpayDto['vnp_SecureHashType'];
        const vnpayParams = this.sortObject(vnpayDto);
        const secretKey = this.vnpayConfig.hashSecret;
        const signData = querystring.stringify(vnpayParams, { encode: false });
        const hmac = crypto.createHmac('sha512', secretKey);
        const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');
        if (secureHash === signed) {
            return { message: 'success', code: vnpayDto.vnp_ResponseCode };
        }
        else {
            throw new common_1.HttpException('Invalid signature', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
VnpayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_service_1.VnpayConfigService])
], VnpayService);
exports.VnpayService = VnpayService;
//# sourceMappingURL=vnpay.service.js.map