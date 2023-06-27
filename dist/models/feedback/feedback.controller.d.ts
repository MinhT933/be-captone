import { CreateFeedbackDTO } from './dto/create_feedback.dto';
import { FeedBackEntity } from './entities/feedback.entity';
import { FeedBackService } from './feedback.service';
export declare class FeedBackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedBackService);
    getAllFeedback(): Promise<FeedBackEntity[]>;
    createFeedback(feedback: CreateFeedbackDTO): Promise<string>;
}
