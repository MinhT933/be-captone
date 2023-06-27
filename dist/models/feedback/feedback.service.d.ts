import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { Mapper } from '@automapper/core';
import { FeedBackEntity } from './entities/feedback.entity';
import { SubscriptionService } from '../subscriptions/subscriptions.service';
import { CreateFeedbackDTO } from './dto/create_feedback.dto';
export declare class FeedBackService extends BaseService<FeedBackEntity> {
    private readonly feedbackRepository;
    private readonly mapper;
    private readonly subscriptionService;
    constructor(feedbackRepository: Repository<FeedBackEntity>, mapper: Mapper, subscriptionService: SubscriptionService);
    createFeedBack(dto: CreateFeedbackDTO): Promise<string>;
    getAllFeedback(): Promise<FeedBackEntity[]>;
}
