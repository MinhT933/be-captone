import { VnpayDto } from 'src/providers/vnpay/vnpay.dto';
import { AccountEntity } from '../accounts/entities/account.entity';
import { CreateSubscriptionDTO } from './dto/create-subscription';
import { SubHistoryDTO } from './dto/getSub-history.dto';
import { SubscriptionFilter } from './dto/subscription-filter.dto';
import { SubscriptionEntity } from './entities/subscription.entity';
import { SubscriptionService } from './subscriptions.service';
import { Request } from 'express';
export declare class SubscriptionController {
    private readonly subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    getAllSubscription(): Promise<SubscriptionEntity[]>;
    getSubscriptionByStatus(subFilter: SubscriptionFilter): Promise<SubscriptionEntity[]>;
    getSubscriptionByCutomer(subFilter: SubscriptionFilter, user: AccountEntity): Promise<SubHistoryDTO[]>;
    findById(id: string): Promise<SubscriptionEntity>;
    cusFindSubById(id: string): Promise<SubscriptionEntity>;
    orderPackage(dto: CreateSubscriptionDTO, user: AccountEntity): Promise<SubscriptionEntity>;
    customerConfirm(id: string, user: AccountEntity): Promise<string>;
    doneSub(id: string, user: AccountEntity): Promise<string>;
    paymentUrl(req: Request, id: string, bankId: string): Promise<string>;
    payment(vnpayDto: VnpayDto): Promise<{
        message: string;
        code: string;
        isSuccess: boolean;
    }>;
    delSub(id: string, user: AccountEntity): Promise<string>;
}
