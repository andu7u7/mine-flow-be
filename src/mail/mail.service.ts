import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  constructor(private readonly configService: ConfigService) {}
  logger = new Logger(MailService.name);

  async sendEmail(
    to: string | string[],
    subject: string,
    html: string,
  ): Promise<void> {
    const resend = new Resend(this.configService.get<string>('RESEND_API_KEY'));
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to,
      subject,
      html,
    });
    // this.logger.log(`Email sent to ${to.join(',')} with subject: ${subject}`);
  }
}
