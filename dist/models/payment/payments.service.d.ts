import { BaseService } from '../base/base.service';
import { PaymentEntity } from './entities/payment.entity';
import { Repository } from 'typeorm';
export declare class PaymentsService extends BaseService<PaymentEntity> {
    private readonly paymentsRepository;
    constructor(paymentsRepository: Repository<PaymentEntity>);
}
