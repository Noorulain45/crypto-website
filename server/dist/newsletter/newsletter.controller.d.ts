import { NewsletterService } from './newsletter.service';
declare class SubscribeDto {
    email: string;
}
export declare class NewsletterController {
    private readonly newsletterService;
    constructor(newsletterService: NewsletterService);
    subscribe(body: SubscribeDto): Promise<{
        message: string;
    }>;
}
export {};
