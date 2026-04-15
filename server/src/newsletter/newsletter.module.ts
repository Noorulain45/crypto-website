import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsletterService } from './newsletter.service';
import { NewsletterController } from './newsletter.controller';
import { Newsletter, NewsletterSchema } from './newsletter.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Newsletter.name, schema: NewsletterSchema }])],
  providers: [NewsletterService],
  controllers: [NewsletterController],
})
export class NewsletterModule {}
