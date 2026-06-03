# 💡 Feedback Pulse


**Feedback Pulse** is a community-driven feedback platform that allows users to submit feature requests, vote on ideas they care about, and track development in real-time. It helps product creators listen to their community, prioritize popular requests, and share progress transparently.

---

## ✨ Benefits

* 🗳️ **Upvotes:** Highlights popular requests.
* 🗺️ **Roadmap:** Visualizes live progress in columns.
* 🛡️ **No Spam:** Groups duplicate feedback together.
* 🎛️ **Admin Control:** Streamlined post moderation.

---

## 📖 User Guide (How to use the app)

* 🔑 **Sign In:** Log in in the navbar. *(First user automatically becomes Admin).*
* ✍️ **Submit Ideas:** Click "New Feedback" to post a request.
* 🔼 **Upvote:** Click the arrow next to any post to vote.
* 📊 **Roadmap:** Track feature status on the roadmap.
* ⚙️ **Manage (Admins):** Toggle statuses or delete posts on the Admin page.

---

## 🛠️ Technologies Used

* 💻 **Framework:** 
  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
* 🎨 **Styling & UI:** 
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
* 🗄️ **Database & ORM:** 
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
  [![Prisma](https://img.shields.io/badge/Prisma-398200?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
* 🔒 **Authentication:** 
  [![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
* 🔧 **Utilities:** 
  [![Lucide Icons](https://img.shields.io/badge/Lucide_React-FF5E00?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
  [![Sonner](https://img.shields.io/badge/Sonner-00D2C4?style=for-the-badge)](https://github.com/emilkowalski/sonner)

---

## 📸 UI Screenshots (Grid View)

Here is a visual overview of Feedback Pulse’s interface:

| 🏠 Landing Page (Light Mode) | 🌙 Landing Page (Dark Mode) |
|:---:|:---:|
| <img src="screenshot/dashboard_light_mode.png" alt="Landing Page - Light Mode" width="100%"> | <img src="screenshot/dashboard_signed_dark_mode.png" alt="Landing Page - Dark Mode" width="100%"> |
| **💬 Community Feedback Board** | **📝 New Feedback Submission Form** |
| <img src="screenshot/community_feedback.png" alt="Community Feedback" width="100%"> | <img src="screenshot/new_feedback_form.png" alt="Submit Feedback Form" width="100%"> |
| **🗺️ Product Roadmap Progress** | **🎛️ Admin Dashboard & Moderation** |
| <img src="screenshot/product_roadmap.png" alt="Product Roadmap" width="100%"> | <img src="screenshot/admin_dashboard.png" alt="Admin Dashboard" width="100%"> |

---

## 🚀 How to Set Up Locally

### 📋 Prerequisites
Ensure you have the following installed on your machine:
* 🟢 Node.js 18+ and npm
* 🐘 PostgreSQL Database (local or cloud-hosted)
* 🔑 Clerk Account (for authentication)

### 🚀 Setup Steps

1. 📂 **Clone the repository:**
   ```bash
   git clone https://github.com/Subhradeep-Sikder/feedback_pulse.git
   cd feedback-fusion
   ```

2. 📦 **Install dependencies:**
   ```bash
   npm install
   ```

3. ⚙️ **Configure Environment Variables:**
   Copy the example environment file: `cp .env.example .env`.
   Get your credentials: [Database (Neon DB)](https://neon.tech/) | [Auth Keys (Clerk Dashboard)](https://dashboard.clerk.com/)
   
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

4. 🗄️ **Initialize Database and Apply Migrations:**
   ```bash
   npx prisma migrate dev
   ```

5. 🖥️ **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 📜 Available Scripts
* ⚡ `npm run dev` - Runs the application in development mode.
* 🏗️ `npm run build` - Builds the application for production deployment.
* 🚀 `npm start` - Launches the production build server.
* 🔍 `npm run lint` - Runs ESLint to check for code issues.

---

<p align="center">Buid with ❤️</p>
