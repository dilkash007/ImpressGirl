# Romantic Poetry Website

## Overview

This is a romantic poetry web application dedicated to someone named Alka. The website features a collection of Hindi poetry expressing love and affection, displayed with beautiful UI components and romantic styling. Built with React/TypeScript frontend and Express backend, it includes poetry pages, a photo gallery, and animated elements like floating hearts to create an intimate, personal experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for client-side routing with individual routes for each poetry piece
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **Animation**: Framer Motion for smooth transitions and floating heart animations
- **State Management**: TanStack React Query for server state management
- **Styling**: Custom romantic theme with warm colors (reds, pinks, golds) and Hindi font support (Noto Sans Devanagari)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Setup**: Hot reload with Vite integration in development mode
- **Storage Interface**: Abstracted storage layer with in-memory implementation for user management
- **API Structure**: RESTful endpoints under `/api` prefix (currently minimal implementation)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: User table with basic authentication fields (username/password)
- **Migration**: Drizzle Kit for schema migrations
- **Connection**: Neon Database serverless connection

### Component Architecture
- **Layout Components**: Poetry layout wrapper with consistent navigation and styling
- **UI Components**: Comprehensive Shadcn/ui component library for consistent design
- **Poetry Cards**: Reusable card components for displaying poetry previews with icons
- **Navigation**: Responsive navigation with mobile menu support
- **Floating Elements**: Animated hearts and romantic visual effects

### Styling System
- **CSS Framework**: Tailwind CSS with custom romantic color palette
- **Design Tokens**: CSS variables for consistent theming (romantic reds, soft pinks, warm golds)
- **Typography**: Multi-font system supporting English (Inter) and Hindi (Noto Sans Devanagari)
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Custom Classes**: Romantic styling classes for gradients, shadows, and animations

## External Dependencies

### Frontend Dependencies
- **UI Framework**: Radix UI primitives for accessible component foundations
- **Animation**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod validation via Hookform Resolvers
- **Date Management**: date-fns for date formatting and manipulation
- **Utility Libraries**: clsx and class-variance-authority for conditional styling
- **Icons**: Lucide React for consistent iconography

### Backend Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- **ORM**: Drizzle ORM with Zod integration for type-safe database operations
- **Session Storage**: connect-pg-simple for PostgreSQL-backed session management
- **Development Tools**: tsx for TypeScript execution and esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin and Replit integration
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Development Experience**: Runtime error overlay and hot module replacement
- **Asset Management**: Custom path aliases for organized imports (@/, @shared/, @assets/)

### Database Configuration
- **Provider**: PostgreSQL via Neon Database serverless
- **Schema Management**: Drizzle Kit with migrations in `/migrations` directory
- **Environment**: DATABASE_URL environment variable for connection string
- **Type Safety**: Drizzle-Zod integration for runtime validation of database schemas