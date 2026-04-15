# Crypto Website

A full-stack cryptocurrency platform with real-time market data, user authentication, and newsletter subscription.

## Tech Stack

**Frontend** — Next.js 16, React 19, TypeScript, MUI, Tailwind CSS, Redux Toolkit  
**Backend** — NestJS, MongoDB (Mongoose), Passport.js, JWT, Brevo (email)

---

## Project Structure

```
crypto-website/
├── client/   # Next.js frontend
└── server/   # NestJS backend
```

---

## Features

- Live crypto market data (prices, trends, global stats) via CoinGecko
- JWT-based authentication (signup / login)
- Google OAuth2 login
- Newsletter subscription via Brevo
- User profile management
- Responsive UI with MUI + Tailwind

---

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB Atlas account (or local MongoDB)
- Google OAuth credentials
- Brevo account for email

---

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

BREVO_API_KEY=your_brevo_api_key
BREVO_SENDER_EMAIL=your_sender_email
BREVO_SENDER_NAME=CryptoPlatform

CLIENT_URL=http://localhost:3000
```

Start the server:

```bash
npm run start:dev
```

Server runs at `http://localhost:5000`

---

### Frontend Setup

```bash
cd client
npm install
```

Create a `.env.local` file in `client/`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Start the dev server:

```bash
npm run dev
```

App runs at `http://localhost:3000`

---

## API Endpoints

### Auth — `/api/auth`

| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| POST   | `/signup`          | Register a new user  |
| POST   | `/login`           | Login with email/password |
| GET    | `/google`          | Initiate Google OAuth |
| GET    | `/google/callback` | Google OAuth callback |

### Crypto — `/api/crypto`

| Method | Endpoint       | Description                        |
|--------|----------------|------------------------------------|
| GET    | `/markets`     | Get market listings (paginated)    |
| GET    | `/trending`    | Get trending coins                 |
| GET    | `/global`      | Get global market stats            |
| GET    | `/:id`         | Get details for a specific coin    |

### Newsletter — `/api/newsletter`

| Method | Endpoint      | Description              |
|--------|---------------|--------------------------|
| POST   | `/subscribe`  | Subscribe to newsletter  |

---

## Pages

| Route            | Description              |
|------------------|--------------------------|
| `/`              | Landing page             |
| `/login`         | Login page               |
| `/signup`        | Signup page              |
| `/dashboard`     | User dashboard           |
| `/profile`       | User profile             |
| `/auth/callback` | Google OAuth callback    |
