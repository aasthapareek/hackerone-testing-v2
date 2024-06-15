# TaskFlow API

Internal project management and workflow automation platform.

## Setup

```bash
npm install
cp .env.example .env
npm run migrate
npm run dev
```

## Architecture

- **API**: Express.js + TypeScript
- **Database**: PostgreSQL (primary), MongoDB (documents), Redis (cache)
- **Payments**: Stripe, PayPal, Square
- **Email**: SendGrid, SMTP fallback
- **Monitoring**: Datadog
- **Infrastructure**: Terraform on DigitalOcean + Azure
