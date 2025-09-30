# Skycle

A modern web application built with Next.js, featuring AT Protocol integration, social media interaction, and dynamic content generation.

## Features

- 🚀 **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 🔒 **AT Protocol** integration for decentralized social features
- 📊 **Prisma ORM** with PostgreSQL database
- ⚡ **Redis** for caching and session management
- 🎯 **TypeScript** for type safety
- 🎨 **Konva.js** for canvas graphics and image manipulation
- 📱 **Responsive design** with mobile-first approach
- 🌙 **Dark/Light mode** support

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher)
- **Bun** (recommended) or npm/yarn
- **PostgreSQL** (version 12 or higher)
- **Redis** (version 6 or higher)
- **Git**

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pirmax/skycle.git
   cd skycle
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   
   # Or using yarn
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file and configure the following variables:
   ```bash
   # Bluesky/AT Protocol credentials
   BSKY_ACCOUNT_HANDLE="your-handle.bsky.social"
   BSKY_ACCOUNT_PASSWORD="your-app-password"
   
   # Security
   COOKIE_PASSWORD="your-secure-cookie-password-min-32-chars"
   
   # Application URL
   NEXT_PUBLIC_URL="http://localhost:3000"
   
   # Google Analytics (optional)
   NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
   
   # Database
   DATABASE_URL="postgres://username:password@localhost:5432/skycle"
   
   # Redis
   REDIS_URL="redis://localhost:6379/0"
   
   # Unsplash API (optional)
   UNSPLASH_ACCESS_KEY="your-unsplash-access-key"
   UNSPLASH_SECRET_KEY="your-unsplash-secret-key"
   ```

## Database Setup

1. **Create a PostgreSQL database**
   ```bash
   # Connect to PostgreSQL
   psql -U postgres
   
   # Create database
   CREATE DATABASE skycle;
   
   # Exit PostgreSQL
   \q
   ```

2. **Generate Prisma client**
   ```bash
   bun run prisma:generate
   ```

3. **Run database migrations**
   ```bash
   bun run prisma:migration
   ```

## Redis Setup

Make sure Redis is running on your system:

```bash
# Start Redis (macOS with Homebrew)
brew services start redis

# Start Redis (Ubuntu/Debian)
sudo systemctl start redis-server

# Start Redis (Docker)
docker run -d -p 6379:6379 redis:alpine
```

## Development

1. **Start the development server**
   ```bash
   bun run dev
   ```

2. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

The application will automatically reload when you make changes to the code.

## Available Scripts

- `bun run dev` - Start the development server
- `bun run build` - Build the application for production
- `bun run start` - Start the production server
- `bun run lint` - Run ESLint
- `bun run lint:fix` - Run ESLint and fix issues automatically
- `bun run format` - Format code with Prettier
- `bun run prisma:generate` - Generate Prisma client
- `bun run prisma:migration` - Run database migrations
- `bun run prisma:migrate` - Push database schema changes

## Project Structure

```
skycle/
├── prisma/                 # Database schema and migrations
│   ├── schema.prisma      # Prisma schema definition
│   └── migrations/        # Database migration files
├── public/                # Static assets
├── src/
│   ├── actions/          # Server actions
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   ├── konva/       # Canvas/graphics components
│   │   └── sheets/      # Sheet/modal components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility libraries
│   ├── providers/       # React context providers
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── components.json      # shadcn/ui configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── next.config.js       # Next.js configuration
```

## Technologies Used

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Radix UI** - Unstyled, accessible UI primitives

### Database & Backend
- **Prisma** - Modern database toolkit
- **PostgreSQL** - Relational database
- **Redis** - In-memory data store

### Graphics & Canvas
- **Konva.js** - 2D canvas graphics library
- **react-konva** - React bindings for Konva
- **Sharp** - Image processing

### Authentication & Social
- **AT Protocol** - Decentralized social networking protocol
- **Iron Session** - Secure session management

### Development Tools
- **Biome** - Fast formatter and linter
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Configuration

### Environment Variables

The application requires several environment variables to function properly:

| Variable | Description | Required |
|----------|-------------|----------|
| `BSKY_ACCOUNT_HANDLE` | Your Bluesky handle | Yes |
| `BSKY_ACCOUNT_PASSWORD` | Your Bluesky app password | Yes |
| `COOKIE_PASSWORD` | Secure password for cookie encryption | Yes |
| `NEXT_PUBLIC_URL` | Application URL | Yes |
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `REDIS_URL` | Redis connection string | Yes |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics ID | No |
| `UNSPLASH_ACCESS_KEY` | Unsplash API access key | No |
| `UNSPLASH_SECRET_KEY` | Unsplash API secret key | No |

### Database Schema

The application uses Prisma with PostgreSQL. Key models include:

- **Version** - Stores generated content versions
- **AuthState** - Manages authentication states
- **AuthSession** - Handles user sessions

## Deployment

### Build for Production

```bash
bun run build
```

### Start Production Server

```bash
bun run start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Deploy to Other Platforms

The application can be deployed to any platform that supports Node.js applications:

- **Railway**
- **Render**
- **DigitalOcean App Platform**
- **AWS**
- **Google Cloud Platform**

Make sure to:
1. Set up environment variables
2. Configure PostgreSQL and Redis instances
3. Run database migrations
4. Build the application

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please:

1. Check the existing [issues](https://github.com/pirmax/skycle/issues)
2. Create a new issue if your problem isn't already reported
3. Provide as much detail as possible, including:
   - Node.js version
   - Operating system
   - Error messages
   - Steps to reproduce

## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Prisma](https://prisma.io/) for the excellent database toolkit
- [AT Protocol](https://atproto.com/) for decentralized social networking
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components