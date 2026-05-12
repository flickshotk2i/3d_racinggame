# Pulse — Futuristic Social Platform

Pulse is a modern full-stack social media platform inspired by Discord, X/Twitter, Instagram, Threads, and TikTok dark mode.

## Stack
- Frontend: Next.js 15 (App Router), React, Tailwind CSS, Framer Motion
- Backend: Node.js, Express, Socket.io
- Database: PostgreSQL + Prisma
- Auth: JWT + Google OAuth scaffolding
- Storage: Cloudinary/Supabase-ready abstraction
- Deployment: Docker + docker-compose

## Monorepo Structure
- `frontend/` - Next.js application
- `backend/` - Express API + Socket.io server
- `docker/` - docker configs

## Features Implemented (Scaffold + Working MVP)
- Email/username login/register + JWT APIs
- Google OAuth route placeholders
- User profile model (avatar, bio, banner, verification)
- Feed, stories, explore, messages, notifications, settings, admin pages
- Post actions data model (likes, comments, reposts, bookmarks)
- Infinite-feed ready endpoint + recommendation service stub
- Real-time chat, typing, presence, notifications with Socket.io
- Stories with 24h expiry model
- Report/block/mute models and moderation endpoint
- AI caption + toxic moderation endpoint stubs
- Video reels, polls, communities, events, music share models
- Dark/light mode toggle, neon glassmorphism UI foundation
- Responsive sidebar layout + loading skeletons
- Dockerized local dev setup

## Quick Start
```bash
cd pulse
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local

docker compose -f docker/docker-compose.yml up --build
```

## Run without Docker
```bash
# terminal 1
cd pulse/backend
npm install
npm run prisma:generate
npm run dev

# terminal 2
cd pulse/frontend
npm install
npm run dev
```

## Default URLs
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## Notes
This repo ships with realistic dummy seed-style data in frontend and API response mocks. Replace AI stubs with real providers (OpenAI moderation/captions, custom recommendation models) before production.
