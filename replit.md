# Overview

This is a full-stack web application for an academic researcher's portfolio website, built with React/TypeScript on the frontend and Express.js on the backend. The application showcases research projects, publications, experience, and provides a contact form for Dr. Sarah Chen, an organic chemistry researcher. The project is structured as a monorepo with shared TypeScript types and database schemas between the client and server.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript in non-RSC mode
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with shadcn/ui component library using the "new-york" style
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation and Radix UI components
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful API with JSON responses
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request/response logging
- **Development Server**: Vite integration for HMR in development mode

## Data Storage Solutions
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema Management**: Shared schema definitions between client and server
- **Development Storage**: In-memory storage implementation with sample data
- **Migration System**: Drizzle Kit for database migrations

## Database Schema Design
The application uses a relational schema with the following entities:
- **Users**: Authentication with username/password
- **Research Projects**: Title, description, status, period, images, tags, and links
- **Publications**: Academic papers with journal, year, abstract, citations, views, and PDF links
- **Experiences**: Career timeline with education, work, and research positions
- **Contact Messages**: Form submissions with name, email, subject, and message

## Authentication and Authorization
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **User Authentication**: Username/password based authentication system
- **Security**: Input validation with Zod schemas and CSRF protection considerations

## Development and Build Process
- **Development**: Concurrent client and server development with Vite HMR
- **Build Process**: Vite for client build, esbuild for server bundling
- **TypeScript**: Strict type checking with shared types and path mapping
- **Code Quality**: ESM modules throughout with proper import/export patterns