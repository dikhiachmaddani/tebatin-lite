# Tebatin App

TEBATIN is an innovative platform for buying and selling woven and batik products. The application also has a unique customization feature that allows users to design products according to their preferences. TEBATIN also bridges between woven and batik MSMEs and buyers, creating tremendous growth opportunities in the cultural and creative industry.

## 🚀 Tech Stack

- **React 19**: Latest version with improved performance
- **TypeScript**: For type safety and better developer experience
- **Vite**: Fast, modern build tool
- **TanStack Query**: For data fetching, caching, and state management
- **Zod**: For schema validation
- **Ant Design**: Utility-first CSS framework
- **Axios**: For API requests
- **React Hot Toast**: For notifications

## Project Structure

```
src/
├── features/              # Categorizes features that require authentication
│   ├── (authenticated)/   # Features requiring user authentication (components, hooks, routes, schema, utils)
│   └── ...                # Other feature-related files
│   ├── (unauthenticated)/ # Features that are accessible without authentication
│   ├── not-found.tsx      # Page shown when a route is not found
├── common/                # Shared constants, types, and utility functions
├── modules/               # Handles API calls, local storage, and feature-specific types
├── components/            # Reusable UI components
│   └── ...                # Other reusable components
├── routes/                # Global routing definitions
├── utils/                 # General utility functions
├── index.css              # Global CSS styles
├── main.tsx               # Entry point of the application
└── vite-env.d.ts          # Vite type declarations

```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/tebatin-lite.git
   cd tebatin-lite
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Start the development server
   ```bash
   pnpm dev
   ```

### Account Access (For Testing)
To access the admin account, use the following credentials:

   ```bash
    email: admin@gmail.com
    password: rahasia123
   ```

## Available Scripts

- `pnpm run dev` - Start the development server
- `pnpm run build` - Build for production
- `pnpm run lint` - Run ESLint
- `pnpm run preview` - Preview the production build locally
