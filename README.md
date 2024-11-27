# Cyclades A11Y

The goal of this project is to enhance the design and accessibility features of the [Cyclades](https://candidat.examens-concours.gouv.fr/cyccandidat/portal/accueil?codeER=&domaine=) website.

## Project Overview

This project is divided into two main components: the frontend and the backend.

### Frontend

The frontend is built using the following technologies:

- [Vite](https://vite.dev/): A next-generation frontend tooling that provides a faster and leaner development experience.
- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript that adds optional types.
- [React](https://react.dev/): A JavaScript library for building user interfaces.

The frontend is currently deployed on [Vercel](https://vercel.com/).

### Backend

The backend is built using the following technologies:

- [Deno](https://deno.com/): A modern runtime for JavaScript and TypeScript that is secure by default.
- [TypeScript](https://www.typescriptlang.org/): A statically typed superset of JavaScript that adds optional types.
- [Supabase](https://supabase.com/): A platform for hosting and managing databases.

## Design

The design for this project is created using [Figma](https://www.figma.com/design/tITLtWt8fb8qXBo5D3ykFn/Cyclades?node-id=1-2&t=MXg00dPxTn1BiBww-1).

## Getting Started

### Prerequisites

- Node.js and npm (for frontend development)
- Deno (for backend development)

#### Supabase Integration

Supabase is used in this project for:
- Database: PostgreSQL database for storing application data.
- Authentication: Handling user authentication and authorization.
- Real-time subscriptions: For live data updates.
- Storage: For file uploads and management.

To set up Supabase:
1. Create a Supabase account and start a new project.
2. Copy your Supabase project URL and API key.
3. Add these credentials in your .env file (check .env.exemple) :

```bash
FRONTEND_URL="your_frontend_url"    #can be localhost

SUPABASE_URL="your_supabase_project_url" 
SUPABASE_KEY="your_supabase_api_key"
```

4. Install the Supabase client in your project: `npm install @supabase/supabase-js`
5. The Database is already set up for you.


### Prerequisites

Node.js and npm, yarn or pnpm (for frontend development) 
Deno (for backend development)
Supabase account and project (for the database)

### Installation

#### Frontend

1. Clone the [repository](https://github.com/Hitch95/Cyclades_A11Y.git).
2. Navigate to the cyclades directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.

#### Backend

1. Clone the [repository](https://github.com/Hitch95/Cyclades_A11Y.git).
2. Navigate to the cyclades-server directory.
3. Set up your Supabase environment variables.
4. Run `deno task dev` to start the backend server.


## Contact

For any questions or feedback, you can contact me in my [LinkedIn](https://www.linkedin.com/in/bahloul-moufidi).
