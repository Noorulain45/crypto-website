import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import * as SibApiV3Sdk from 'sib-api-v3-sdk';
import { Newsletter, NewsletterDocument } from './newsletter.schema';

@Injectable()
export class NewsletterService {
  private brevoClient: any;

  constructor(
    @InjectModel(Newsletter.name) private newsletterModel: Model<NewsletterDocument>,
    private config: ConfigService,
  ) {
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    defaultClient.authentications['api-key'].apiKey = this.config.get('BREVO_API_KEY');
    this.brevoClient = new SibApiV3Sdk.TransactionalEmailsApi();
  }

  async subscribe(email: string) {
    const existing = await this.newsletterModel.findOne({ email });
    if (existing) throw new ConflictException('Email already subscribed');

    await this.newsletterModel.create({ email });

    // Send welcome email via Brevo
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.to = [{ email }];
    sendSmtpEmail.sender = {
      email: this.config.get('BREVO_SENDER_EMAIL'),
      name: this.config.get('BREVO_SENDER_NAME'),
    };
    sendSmtpEmail.subject = 'Welcome to CryptoPlatform Newsletter!';
    sendSmtpEmail.htmlContent = `
      <h2>Thanks for subscribing!</h2>
      <p>You'll receive the latest crypto news and market updates directly in your inbox.</p>
    `;

    await this.brevoClient.sendTransacEmail(sendSmtpEmail);

    return { message: 'Subscribed successfully' };
  }
}
