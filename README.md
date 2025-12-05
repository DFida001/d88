# UNC Charlotte Sustainability Dashboard

A full-stack Single Page Application (SPA) showcasing UNC Charlotte's STARS Gold rating achievements with user authentication and interactive data visualizations.

## Tech Stack

- **Frontend:** React, Vite, Recharts, Axios, React Router
- **Backend:** Express.js, JSON Web Token (JWT), Mongoose, bcryptjs
- **Database:** MongoDB Atlas
- **Deployment:** Vercel

## Prerequisites

- Node.js (v20+)
- MongoDB Atlas account

## Setup & Run

### 1. Backend

Create a `.env` file in the `server` directory:

```bash
cd server
npm install
node index.js
```

The server will start on port 3000.

### 2. Frontend

Create a `.env` file in the `client` directory:

```bash
cd client
npm install
npm run dev
```

The frontend will start on port 80 (or another available port).

## Authentication

This application features a full user registration and login system:

- **Register:** Create a new account with username and password (minimum 3 and 6 characters respectively)
- **Login:** Authenticate with your credentials to access protected routes
- **JWT Tokens:** 1-hour validity with secure bcrypt password hashing

## Features

- **User Authentication:** Full registration and login system with MongoDB user storage
- **Dashboard:** Overview of UNC Charlotte's sustainability achievements
- **Summary:** Bar chart showing operational reductions (energy, water, emissions)
- **Reports:** Pie chart displaying academic and research engagement metrics
- **Reports:** Dynamic pie chart fetching data from the backend.
- **Accessibility:** Semantic HTML and ARIA labels.
