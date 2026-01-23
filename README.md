# ForgeRoute Labs Website

Professional business website for ForgeRoute Labs - building iPhone/Android applications and software products.

## Tech Stack

- **Frontend**: Angular 18+ with Tailwind CSS
- **Backend**: Node.js/Express with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Architecture**: Monorepo

## Project Structure

```
forgeroute/
├── frontend/       # Angular application
├── backend/        # Node.js/Express API
├── shared/         # Shared types and validators
└── docker-compose.yml
```

## Getting Started

### Prerequisites

- Node.js 18+
- Docker Desktop
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start PostgreSQL:
   ```bash
   npm run db:setup
   ```

4. Set up environment variables (copy `.env.example` to `.env` in backend/)

5. Run database migrations:
   ```bash
   cd backend && npx prisma migrate dev
   ```

6. Start development servers:
   ```bash
   # Terminal 1 - Frontend
   npm run dev:frontend

   # Terminal 2 - Backend
   npm run dev:backend
   ```

## Features

- Product showcase (iPhone/Android apps, software products)
- Contact form
- Demo request form
- Mobile-optimized responsive design
- Backend API for form submissions
- Email notifications

## License

MIT
