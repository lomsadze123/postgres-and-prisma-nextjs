# Next.js Blog with Authentication

This is a simple blog application built using Next.js, Prisma, and authentication with NextAuth. It allows users to create, edit, and view blog posts after signing up or logging in.

## Features

- Authentication: Users can sign up, sign in, and sign out.
- Create new blog posts with a title, content, and author name.
- Edit existing blog posts.
- View individual post details.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- PostgreSQL database server running locally or accessible via URL.
- Prisma CLI installed globally: `npm install prisma -g`.

### Installation

1. Clone the Repository: Start by cloning the repository to your local machine using the following command:

```bash
git clone https://github.com/lomsadze123/postgres-and-prisma-nextjs.git
```

2. Install Dependencies: Install the project dependencies using npm:

```bash
npm install
```

4. Create a .env file in the root directory and add your MongoDB URI:

```bash
DATABASE_URL=your_postgres_database_url
```

5. Run Prisma migrations to create database tables:

```bash
npx prisma migrate dev --name init
```

5. Start the Application: Run the development server to see the application in action:

```bash
npm run dev
```
