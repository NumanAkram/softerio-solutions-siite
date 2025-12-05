// Email templates

import { ContactFormData } from '../types/email.types';
import { getCompanyName } from '../config/email.config';

export function getAdminNotificationTemplate(data: ContactFormData): string {
  const companyName = getCompanyName();
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #14b8a6 0%, #0891b2 100%); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">${companyName}</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">New Contact Form Submission</p>
      </div>
      
      <div style="padding: 30px; background: white;">
        <h2 style="color: #333;">Contact Form Submission</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject || 'No Subject'}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border-left: 4px solid #14b8a6; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #555;">${data.message}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px;">
          <a href="mailto:${data.email}" style="background: #14b8a6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold;">
            Reply to ${data.name}
          </a>
        </div>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; text-align: center;">
        <p style="color: #999; margin: 0; font-size: 12px;">
          © ${new Date().getFullYear()} ${companyName}. All rights reserved.
        </p>
      </div>
    </div>
  `;
}

export function getAutoReplyTemplate(data: ContactFormData): string {
  const companyName = getCompanyName();
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #14b8a6 0%, #0891b2 100%); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">${companyName}</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Superior IT Solutions</p>
      </div>
      
      <div style="padding: 30px; background: white;">
        <h2 style="color: #333;">Thank you for reaching out, ${data.name}!</h2>
        
        <p style="color: #666; line-height: 1.6;">
          We've received your message and appreciate you taking the time to contact us. 
          Our team will review your inquiry and get back to you within 24 hours.
        </p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
          <p style="color: #666; font-style: italic;">"${data.message}"</p>
        </div>
        
        <p style="color: #666; line-height: 1.6;">
          In the meantime, feel free to explore our services or follow us on social media 
          for the latest updates on our projects and industry insights.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://softeriosolutions.com" style="background: #14b8a6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold;">
            Visit Our Website
          </a>
        </div>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; text-align: center;">
        <p style="color: #999; margin: 0; font-size: 12px;">
          © ${new Date().getFullYear()} ${companyName}. All rights reserved.
        </p>
      </div>
    </div>
  `;
}

