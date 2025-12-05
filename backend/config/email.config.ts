// Email configuration

import { EmailServiceConfig } from '../types/email.types';

export function getEmailConfig(): EmailServiceConfig {
  return {
    service: (process.env.EMAIL_SERVICE as 'gmail' | 'outlook' | 'custom') || 'gmail',
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT) : 587,
    secure: process.env.EMAIL_SECURE === 'true',
    user: process.env.EMAIL_USER || 'softerio.org@gmail.com',
    pass: process.env.EMAIL_PASS || '',
  };
}

export function getContactEmail(): string {
  return process.env.CONTACT_EMAIL || 'softerio.org@gmail.com';
}

export function getCompanyName(): string {
  return process.env.COMPANY_NAME || 'Softerio Solutions';
}

