# 💡 Feedback Pulse

A community-driven feedback platform where users submit feature ideas, vote on what matters most, and track product development in real-time.

## 🎯 What is this?

Feedback Pulse is a web app that lets communities influence product direction. Users can submit feature requests, upvote ideas they care about, and see exactly what's planned, in progress, or completed. Admins get a dashboard to manage feedback and update statuses. Think of it like a public product roadmap that actually listens to its users.

## ✨ Features

- 📝 **Submit Feedback** – Post feature ideas with titles, descriptions, and category tags
- 👍 **Community Voting** – Upvote suggestions to show what the community wants most
- 🗺️ **Public Roadmap** – See features organized by status: Under Review → Planned → In Progress → Completed
- 🛠️ **Admin Dashboard** – Manage feedback submissions and update their status
- 🌙 **Dark Mode** – Light and dark theme support
- 🔐 **User Authentication** – Secure login with Clerk
- 🏷️ **Category Filters** – Browse feedback by feature categories with vote counts

## 🛠️ Tech Stack

- 🎨 **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 4
- 📦 **UI Components:** shadcn/ui with Radix UI
- ⚙️ **Backend:** Next.js API Routes
- 🗄️ **Database:** PostgreSQL + Prisma ORM
- 🔑 **Authentication:** Clerk
- 🧠 **Utilities:** sonner (toasts), lucide-react (icons), next-themes (dark mode)

## 📁 Project Structure

```
feedback-fusion/
├── app/
│   ├── (auth)/              # Auth pages (sign-in, sign-up)
│   ├── admin/               # Admin dashboard (protected route)
│   ├── api/                 # API routes for feedback, votes
│   ├── feedback/            # Community feedback page
│   ├── feedback/new/        # Submit new feedback form
│   ├── roadmap/             # Public product roadmap
│   ├── layout.tsx           # Root layout with Clerk provider
│   └── page.tsx             # Landing page
├── components/
│   ├── ui/                  # shadcn/ui components (buttons, cards, inputs, etc.)
│   └── [custom components]  # Navbar, footer, feedback lists, admin table
├── lib/
│   ├── prisma.ts            # Prisma client instance
│   ├── sync-user.ts         # Sync Clerk user to DB
│   └── utils.ts             # Utility functions
├── prisma/
│   ├── schema.prisma        # Database models (User, Post, Vote)
│   └── migrations/          # Database migration history
└── public/                  # Static assets
```

## 📸 Screenshots

### 🏠 Landing Page
<img src="screenshot/dashboard_light_mode.png" alt="Landing Page - Light Mode" width="100%">

### 💬 Community Feedback
<img src="screenshot/community_feedback.png" alt="Community Feedback" width="100%">

### 📝 New Feedback Form
<img src="screenshot/new_feedback_form.png" alt="Submit Feedback Form" width="100%">

### 🗺️ Product Roadmap
<img src="screenshot/product_roadmap.png" alt="Product Roadmap" width="100%">

### 🎛️ Admin Dashboard
<img src="screenshot/admin_dashboard.png" alt="Admin Dashboard" width="100%">

### 🌙 Dark Mode
<img src="screenshot/dashboard_signed_dark_mode.png" alt="Dashboard - Dark Mode" width="100%">

## 🚀 Local Setup

### 📋 Prerequisites
- Node.js 18+ and npm
- PostgreSQL database (local or cloud)
- Clerk account for authentication

### 📝 Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Subhradeep-Sikder/feedback_pulse.git
   cd feedback-fusion
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then fill in the values:
   - `DATABASE_URL` – PostgreSQL connection string
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` – From Clerk dashboard
   - `CLERK_SECRET_KEY` – From Clerk dashboard

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   ```
   This creates tables and seeds the database.

5. **Run the dev server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Environment Variables

Create a `.env.local` file with these:

```
# Database (PostgreSQL)
DATABASE_URL=postgresql://user:password@localhost:5432/feedback_pulse

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key

# Clerk URLs (optional - for custom domains)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/feedback
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/feedback
```

Get Clerk keys from [https://dashboard.clerk.com](https://dashboard.clerk.com).

## 🗄️ Database Schema

### 👤 User
- Synced from Clerk with email, name, avatar
- Role: `user` or `admin`

### 📮 Post (Feedback)
- Title, description, category
- Status: `under_review`, `planned`, `in_progress`, `completed`
- Tracks author and vote count

### ✅ Vote
- Links users to posts (unique per user/post)
- Enables upvoting system

## 📜 Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Run ESLint
```

## 🎨 Future Improvements

- 📧 Email notifications when feedback status changes
- 📱 Better mobile responsiveness
- 🔍 Search and sorting options for feedback
- 💬 Comments/discussion threads on feedback items
- 📊 Analytics dashboard for product trends
- ♿ Accessibility improvements 
- 🚫 Rate limiting to prevent spam

