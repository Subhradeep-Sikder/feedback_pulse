# Feedback Pulse

**Feedback Pulse** is a community-driven feedback platform that allows users to submit feature requests, vote on ideas they care about, and track development in real-time. It helps product creators listen to their community, prioritize popular requests, and share progress transparently.

---

## Benefits

* **Upvotes:** Highlights popular requests.
* **Roadmap:** Visualizes live progress in columns.
* **No Spam:** Groups duplicate feedback together.
* **Admin Control:** Streamlined post moderation.

---

## User Guide (How to use the app)

* **Sign In:** Log in in the navbar. *(First user automatically becomes Admin).*
* **Submit Ideas:** Click "New Feedback" to post a request.
* **Upvote:** Click the arrow next to any post to vote.
* **Roadmap:** Track feature status on the roadmap.
* **Manage (Admins):** Toggle statuses or delete posts on the Admin page.

---

## Technologies Used

* **Framework:** Next.js 16 (App Router), React 19, TypeScript
* **Styling & UI:** Tailwind CSS v4, Shadcn/ui (Radix UI components)
* **Database & ORM:** PostgreSQL, Prisma ORM
* **Authentication:** Clerk (User sign-in & role assignment)
* **Utilities:** Sonner (notifications), Lucide React (icons), Next Themes (dark mode)

---

## UI Preview

Here is a visual overview of the interface:

### Landing Page (Light Mode)
<img src="screenshot/dashboard_light_mode.png" alt="Landing Page - Light Mode" width="100%">

### Landing Page (Dark Mode)
<img src="screenshot/dashboard_signed_dark_mode.png" alt="Landing Page - Dark Mode" width="100%">

### Community Feedback Board
<img src="screenshot/community_feedback.png" alt="Community Feedback" width="100%">

### New Feedback Submission Form
<img src="screenshot/new_feedback_form.png" alt="Submit Feedback Form" width="100%">

### Product Roadmap Progress
<img src="screenshot/product_roadmap.png" alt="Product Roadmap" width="100%">

### Admin Dashboard & Moderation
<img src="screenshot/admin_dashboard.png" alt="Admin Dashboard" width="100%">

---

## How to Set Up Locally

### Prerequisites
Ensure you have the following installed on your machine:
* Node.js 18+ and npm
* PostgreSQL Database (local or cloud-hosted)
* Clerk Account (for authentication)

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Subhradeep-Sikder/feedback_pulse.git
   cd feedback-fusion
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file: `cp .env.example .env`.
   
   
   Open the `.env` file and fill in your keys:
   ```env
   # Database Connection URL
   DATABASE_URL="postgresql://user:password@localhost:5432/feedback_pulse?schema=public"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...

   # Clerk Redirection URLs
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/feedback
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/feedback
   ```
   Get your credentials: [Database (Neon DB)](https://neon.tech/) | [Auth Keys (Clerk Dashboard)](https://dashboard.clerk.com/)

4. **Initialize Database and Apply Migrations:**
   ```bash
   npx prisma migrate dev
   ```

5. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Available Scripts
* `npm run dev` - Runs the application in development mode.
* `npm run build` - Builds the application for production deployment.
* `npm start` - Launches the production build server.
* `npm run lint` - Runs ESLint to check for code issues.

---

<p align="center">Build by [Subhradeep Sikder](https://github.com/Subhradeep-Sikder)</p>
