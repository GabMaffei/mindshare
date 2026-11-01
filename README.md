# Mindshare

Mindshare is a team idea board: members can propose ideas, discuss them, and vote. This repository is my implementation of the GraphQL project from Rocketseat's Tech Developer 360 postgraduate program. The project brief and learning path came from the course; the code here is my implementation and includes a separate React frontend.

## What it does

- Register and sign in with email and password. Passwords are hashed, and the API issues short-lived access and refresh JWTs.
- Create, update, list, and delete ideas.
- Add comments and toggle a vote on an idea. The database enforces one vote per user per idea.
- Browse the member list and edit or remove members from the UI.
- Request related data such as an idea's author, comments, votes, and vote count through GraphQL.

## Stack

- **Frontend:** React 19, TypeScript, Vite, React Router, Apollo Client, Zustand, Tailwind CSS, and Radix UI components.
- **Backend:** Node.js, TypeScript, Express 5, Apollo Server, GraphQL, and TypeGraphQL.
- **Persistence:** Prisma ORM with SQLite and checked-in Prisma migrations.
- **Package manager:** pnpm (the backend package declares pnpm 10.33.2).

## Run locally

You need Node.js, pnpm, and a terminal. The frontend and API run as separate processes.

### 1. Start the API

```bash
cd backend
pnpm install
```

Copy `.env.example` to `.env`. Keep the SQLite URL for a local database and replace `JWT_SECRET` with a long, private random value. Then apply the checked-in migrations, generate the Prisma client, and start the API:

```bash
pnpm exec prisma migrate deploy
pnpm exec prisma generate
pnpm dev
```

The GraphQL endpoint is `http://localhost:4000/graphql`.

### 2. Start the frontend

In a second terminal:

```bash
cd frontend
pnpm install
pnpm dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). The frontend currently targets the API at `http://localhost:4000/graphql`; the API's CORS configuration allows `http://localhost:5173`.

## Repository layout

```text
backend/    Express + Apollo GraphQL API, Prisma schema, migrations
frontend/   React application
```

## Current scope and limitations

- This is a learning project configured for local development. The API uses a local SQLite database, and the frontend/API URLs and CORS origin are currently fixed to localhost.
- Authentication middleware checks a signed-in user on protected GraphQL resolvers. Although user roles are represented in the schema and UI, the code does not implement a complete role-based permission policy.
- There is no deployment configuration or automated test script in the package manifests.

## Learning context

Mindshare was the hands-on application in the program's Back-end GraphQL module. The module covered GraphQL modeling, authentication, ideas, comments, votes, and querying related data. This repository is an educational implementation, not a claim of production use.
