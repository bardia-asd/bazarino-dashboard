# Bazarino Dashboard

A modern, RTL-ready e-commerce administration dashboard built with React. Bazarino provides a centralized interface for managing products, orders, customers, inventory, marketing, finances, and other store operations.

## Overview

Bazarino Dashboard is a frontend project designed to bring essential e-commerce management tools into one organized interface. It features a modular page structure, nested routing, reusable UI components, theme management, and Supabase integration.

The interface is designed for right-to-left layouts, making it suitable for Persian-language administration panels.

## Features

- **Dashboard & Analytics:** Overview pages and data visualization for store management.
- **Product Management:** Dedicated sections for products, categories, brands, and inventory.
- **Order & Customer Management:** Pages for orders, customers, sellers, and product returns.
- **Marketing Tools:** Manage discounts, campaigns, coupons, and marketing activities.
- **Customer Communication:** Dedicated pages for notifications, messages, and reviews.
- **Finance Management:** Sections for transactions and financial operations.
- **System Administration:** Manage users, roles, settings, system information, errors, and activity logs.
- **RTL Layout:** Right-to-left interface support for Persian-language applications.
- **Theme Management:** Light, dark, and system-based theme preferences.
- **Reusable UI Components:** Built with Radix UI primitives and Lucide icons.
- **Responsive Styling:** Tailwind CSS for styling and layout.
- **Client-Side Routing:** Nested dashboard routes powered by React Router.
- **Backend Integration:** Supabase client configuration for connecting to backend services.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI development |
| Vite | Development server and build tooling |
| React Router 7 | Client-side routing |
| Tailwind CSS 4 | Styling and responsive layouts |
| Supabase | Backend and database integration |
| Recharts | Data visualization |
| Radix UI | Accessible UI primitives |
| Lucide React | Icons |
| React Hook Form | Form management |
| Sonner | Toast notifications |
| Oxlint | Code linting |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) compatible with your installed Vite version
- npm
- A Supabase project if you want to use the backend integration

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bardia-asd/bazarino-dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bazarino-dashboard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the project root and configure your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace the placeholder values with your Supabase project URL and publishable client key. Never expose your Supabase service-role key in frontend code.

### Run the Development Server

```bash
npm run dev
```

Open the local URL printed in your terminal to access the application.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project Structure

```text
bazarino-dashboard/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── common/         # Shared UI components
│   │   └── layout/         # Dashboard layout components
│   ├── context/            # React context providers
│   ├── lib/                # Supabase client configuration
│   ├── pages/              # Dashboard pages
│   ├── router/             # Route configuration
│   ├── styles/             # Global styles
│   ├── App.jsx             # Root application component
│   └── main.jsx            # Application entry point
├── .env                    # Local environment variables
├── index.html
├── package.json
└── vite.config.js
```

## Routing

The application uses a shared dashboard layout with nested routes. The root URL redirects to `/dashboard`, and unmatched routes display a not-found page.

The dashboard includes dedicated routes for analytics, products, categories, brands, orders, customers, inventory, sellers, marketing, finance, and system administration.

## Backend Configuration

Bazarino uses the Supabase JavaScript client to connect to a Supabase project. Configure the required environment variables before using features that depend on backend data.

Database tables, authentication policies, and access permissions must be configured in Supabase according to the application's requirements.

## Production Build

Generate an optimized production build:

```bash
npm run build
```

The generated files are placed in the `dist/` directory and can be deployed to a static hosting provider configured to serve the application and support client-side routing.

## Future Improvements

Potential areas for further development include:

- Complete CRUD workflows with server-side persistence.
- Role-based authorization and protected routes.
- Advanced analytics, filtering, and reporting.
- Automated tests for important user flows.
- Improved accessibility and performance monitoring.

## License

No license information is specified here. Check the repository for a `LICENSE` file before reusing or distributing the project.

## Author

**Bardia**

- GitHub: [@bardia-asd](https://github.com/bardia-asd)
- Repository: [bazarino-dashboard](https://github.com/bardia-asd/bazarino-dashboard)
