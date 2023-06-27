import { VnpayConfigService } from '../../config/vnpay/config.service';
import { VnpayDto } from './vnpay.dto';
export declare class VnpayService {
    private readonly vnpayConfig;
    constructor(vnpayConfig: VnpayConfigService);
    payment(ipAddr: string, amount: number, bankCode: string, orderInfo: string, orderType: string, locale: string): string;
    sortObject(obj: object): object;
    returnUrl(vnpayDto: VnpayDto): {
        message: string;
        code: string;
    };
}
