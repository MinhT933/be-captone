import { VnpayService } from './providers/vnpay/vnpay.service';
import { Request } from 'express';
import { VnpayDto } from './providers/vnpay/vnpay.dto';
import { AccountEntity } from './models/accounts/entities/account.entity';
import { FirebaseMessageService } from './providers/firebase/message/firebase-message.service';
export declare class TestController {
    private readonly vnpay;
    private readonly firebaseMessage;
    constructor(vnpay: VnpayService, firebaseMessage: FirebaseMessageService);
    payment(req: Request): string;
    vnpayReturn(vnpayDto: VnpayDto): {
        message: string;
        code: string;
    };
    testNotify(user: AccountEntity): Promise<string>;
}
