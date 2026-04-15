import { Controller, Post, Body } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { IsEmail } from 'class-validator';

class SubscribeDto {
  @IsEmail()
  email: string;
}

@Controller('newsletter')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Post('subscribe')
  subscribe(@Body() body: SubscribeDto) {
    return this.newsletterService.subscribe(body.email);
  }
}
