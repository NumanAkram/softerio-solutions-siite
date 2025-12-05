# Backend Services

This folder contains all backend-related code, services, utilities, and configurations.

## Folder Structure

```
backend/
├── services/          # Business logic and service classes
│   └── email.service.ts
├── utils/             # Utility functions and helpers
│   └── email.templates.ts
├── types/             # TypeScript type definitions
│   └── email.types.ts
├── config/            # Configuration files
│   └── email.config.ts
└── README.md          # This file
```

## Services

### EmailService
Handles all email-related operations including:
- Sending contact form notifications
- Sending auto-reply emails
- Email transporter configuration

**Location:** `backend/services/email.service.ts`

**Usage:**
```typescript
import { EmailService } from '@/backend/services/email.service';

const emailService = new EmailService();
await emailService.sendContactFormEmail(contactData);
```

## Configuration

### Email Configuration
Manages email service configuration from environment variables.

**Location:** `backend/config/email.config.ts`

**Environment Variables:**
- `EMAIL_SERVICE` - Email service provider (gmail, outlook, custom)
- `EMAIL_HOST` - SMTP host (for custom)
- `EMAIL_PORT` - SMTP port (for custom)
- `EMAIL_SECURE` - Use secure connection
- `EMAIL_USER` - Email username
- `EMAIL_PASS` - Email password
- `CONTACT_EMAIL` - Contact form recipient email
- `COMPANY_NAME` - Company name for emails

## Types

### Email Types
TypeScript interfaces and types for email-related data structures.

**Location:** `backend/types/email.types.ts`

## Utils

### Email Templates
HTML email templates for admin notifications and auto-replies.

**Location:** `backend/utils/email.templates.ts`

## API Routes

API routes are located in `app/api/` and use the backend services. This separation ensures:
- Clean separation of concerns
- Reusable backend services
- Easier testing and maintenance
- Better code organization

## Notes

- All backend code is TypeScript
- Services are class-based for better organization
- Configuration is centralized in `config/` folder
- Types are defined in `types/` folder for type safety

