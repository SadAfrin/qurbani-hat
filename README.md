# 📋 QurbanirHaT — Livestock Booking Platform

**QurbanirHaT** is a minimalist marketplace designed for browsing and booking Qurbani animals. While the initial version utilized local storage, this production-ready application is now fully integrated with **MongoDB** and **BetterAuth** for a robust, database-driven experience.

🌐 **Live Site:** [qurbani-hat-ruddy.vercel.app](https://qurbani-hat-ruddy.vercel.app/)

<img width="1742" height="842" alt="QurbanirHaT Screenshot" src="https://github.com/user-attachments/assets/5729bcc2-acf7-4287-90f6-7cdf8f2b6432" />

---

## 📖 Overview

QurbanirHaT is a livestock booking platform built for browsing and reserving Qurbani animals. It evolved from a local-storage prototype into a full production app backed by MongoDB Atlas and secure authentication, with a clean, responsive UI and real-time user feedback throughout the booking flow.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js (App Router) | Frontend & backend framework |
| MongoDB Atlas | Database |
| BetterAuth | Authentication (Google Social Login + Email) |
| Tailwind CSS | Styling |
| Animate.css | UI transitions & animations |
| React Toastify | Real-time notifications |
| React Icons | Icon library |

---

## ✨ Core Features

- **Database Integration** — all user profiles are managed securely via MongoDB Atlas
- **Secure Authentication** — supports Google Social Login and email registration powered by BetterAuth
- **User Profiles** — logged-in users can view and update their name and photo URL via the `/my-profile` route
- **Advanced UI** — dynamic price sorting, fully responsive layouts, and Animate.css transitions
- **Interactive Notifications** — real-time feedback via React-Toastify for login, registration, and bookings

---

## 📁 Routes

| Type | Routes |
|------|--------|
| Public | `/`, `/animals`, `/login`, `/register` |
| Private | `/details-page`, `/my-profile` |

---

## 📦 Dependencies (Key Packages)

- `next` — framework (frontend + backend)
- `mongodb` — database connection
- `better-auth` — authentication (Google provider + email)
- `tailwindcss` — utility-first styling
- `animate.css` — UI animations
- `react-toastify` — toast notifications
- `react-icons` — icon library

> Full list available in `package.json`.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory with the necessary variables, including:

```env
MONGODB_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

## 🏃 Run Locally

**Clone the repository:**
```bash
git clone https://github.com/SadAfrin/qurbani-hat.git
```

**Navigate to the project directory:**
```bash
cd qurbani-hat
```

**Install dependencies:**
```bash
npm install
```

**Set up environment variables:**
Create a `.env.local` file in the root directory and add the variables listed in the [Environment Variables](#️-environment-variables) section above.

**Run the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔗 Links

- 🌐 Live Site: [qurbani-hat-ruddy.vercel.app](https://qurbani-hat-ruddy.vercel.app/)
- 💻 Repo: [github.com/SadAfrin/qurbani-hat](https://github.com/SadAfrin/qurbani-hat)
