# Full-Stack User Management

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Development](#development)

## Features

- **User Authentication**: Sign up, sign in, and logout functionality
- **Email Verification**: Email-based account verification workflow
- **Protected Routes**: Role-based access control with protected pages
- **User Dashboard**: Data table for viewing and managing users
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Type Safety**: Full TypeScript support across frontend and backend

## Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Static type checking
- **Vite** - Build tool and dev server
- **TanStack Router** - File-based routing
- **React Query** - Data fetching and caching
- **TanStack Table** - Data table component
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Zustand** - State management
- **React Hook Form** - Form state management
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Static type checking
- **PostgreSQL** - Relational database
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **Mailjet** - Email delivery service

## Project Structure

```
├── client/                    # Frontend application
│   ├── src/
│   │   ├── app/               # App root and routing
│   │   ├── entities/          # Data models
│   │   ├── features/          # Feature modules
│   │   ├── pages/             # Page components
│   │   ├── shared/            # Shared utilities and components
│   │   └── widgets/           # Reusable widget components
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
├── server/                    # Backend application
│   ├── src/
│   │   ├── controllers/       # Route controllers
│   │   ├── services/          # Business logic
│   │   ├── models/            # Data models
│   │   ├── routes/            # API routes
│   │   ├── middlewares/       # Express middlewares
│   │   ├── config/            # Configuration
│   │   ├── types/             # TypeScript type definitions
│   │   └── consts/            # Constants
│   ├── package.json
└── └── tsconfig.json
```

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended 20+)
- **PostgreSQL** 14+
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd task4
   ```

2. **Set up the database**
   ```bash
   psql -U postgres -f __db__.pgsql
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

4. **Configure backend environment**
   
   Create a `.env` file in the `server` directory:
   ```
   PORT=3000
   CLIENT_URL=http://localhost:5173
   DATABASE_URL=postgresql://username:password@localhost:5432/task4
   JWT_SECRET=your-secret-key-here
   JWT_REFRESH_SECRET=your-refresh-secret-key-here
   MAILJET_API_KEY=your-mailjet-api-key
   MAILJET_SECRET_KEY=your-mailjet-secret-key
   ```

5. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

6. **Configure frontend environment**
   
   Create a `.env` file in the `client` directory:
   ```
   VITE_API_URL=http://localhost:3000
   ```

### Development

**Start the backend server:**
```bash
cd server
npm run dev
```

The server will start on `http://localhost:3000`

**In a new terminal, start the frontend development server:**
```bash
cd client
npm run dev
```

The client will be available at `http://localhost:5173`

### Building for Production

**Build the backend:**
```bash
cd server
npm run build
```

**Build the frontend:**
```bash
cd client
npm run build
```

## Environment Variables

### Backend (.env in `server/`)

- `PORT` - Server port (default: 3000)
- `CLIENT_URL` - Frontend URL for CORS configuration
- `DB_URL` - PostgreSQL connection string
- `JWT_ACCESS_SECRET` - Secret key for signing JWT access tokens
- `JWT_REFRESH_SECRET` - Secret key for signing refresh tokens
- `MJ_ACCESS` - Mailjet API key for sending emails
- `MJ_SECRET` - Mailjet secret key
- `MJ_FROM_EMAIL` - Email address to send from

### Frontend (.env in `client/`)

- `VITE_SERVER_URL` - Backend API URL (used in requests)