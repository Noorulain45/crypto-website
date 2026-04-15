import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { NewsletterDocument } from './newsletter.schema';
export declare class NewsletterService {
    private newsletterModel;
    private config;
    private brevoClient;
    constructor(newsletterModel: Model<NewsletterDocument>, config: ConfigService);
    subscribe(email: string): Promise<{
        message: string;
    }>;
}
