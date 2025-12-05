// Email service for sending emails

import * as nodemailer from 'nodemailer';
import { ContactFormData, EmailServiceConfig } from '../types/email.types';
import { getEmailConfig, getContactEmail, getCompanyName } from '../config/email.config';
import { getAdminNotificationTemplate, getAutoReplyTemplate } from '../utils/email.templates';

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(config?: EmailServiceConfig) {
    const emailConfig = config || getEmailConfig();
    this.transporter = this.createTransporter(emailConfig);
  }

  private createTransporter(config: EmailServiceConfig): nodemailer.Transporter {
    if (config.service === 'gmail') {
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: config.user,
          pass: config.pass,
        },
      });
    } else if (config.service === 'outlook') {
      return nodemailer.createTransport({
        service: 'outlook',
        auth: {
          user: config.user,
          pass: config.pass,
        },
      });
    } else if (config.host) {
      return nodemailer.createTransport({
        host: config.host,
        port: config.port || 587,
        secure: config.secure || false,
        auth: {
          user: config.user,
          pass: config.pass,
        },
      });
    } else {
      // Default to Gmail
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: config.user || 'softerio.org@gmail.com',
          pass: config.pass || 'your-app-password',
        },
      });
    }
  }

  async sendContactFormEmail(data: ContactFormData): Promise<void> {
    const contactEmail = getContactEmail();
    const emailConfig = getEmailConfig();

    // Send notification to admin
    const adminMailOptions = {
      from: emailConfig.user || 'your-email@gmail.com',
      to: contactEmail,
      subject: `New Contact Form Submission: ${data.subject || 'No Subject'}`,
      html: getAdminNotificationTemplate(data),
    };

    await this.transporter.sendMail(adminMailOptions);

    // Send auto-reply to user
    const autoReplyOptions = {
      from: emailConfig.user || 'softerio.org@gmail.com',
      to: data.email,
      subject: `Thank you for contacting ${getCompanyName()}`,
      html: getAutoReplyTemplate(data),
    };

    await this.transporter.sendMail(autoReplyOptions);
  }

  async sendEmail(to: string, subject: string, html: string): Promise<void> {
    const emailConfig = getEmailConfig();
    
    const mailOptions = {
      from: emailConfig.user || 'your-email@gmail.com',
      to,
      subject,
      html,
    };

    await this.transporter.sendMail(mailOptions);
  }
}

