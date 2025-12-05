// Email types and interfaces

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export interface EmailServiceConfig {
  service?: 'gmail' | 'outlook' | 'custom';
  host?: string;
  port?: number;
  secure?: boolean;
  user?: string;
  pass?: string;
}

