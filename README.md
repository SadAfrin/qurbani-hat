# 📋 QurbanirHaT - Livestock Booking Platform

**QurbanirHaT** is a minimalist marketplace designed for browsing and booking Qurbani animals. While the initial version utilized local storage, this production-ready application is now fully integrated with **MongoDB** and **BetterAuth** for a robust, database-driven experience.

### 🌐 [Live URL](https://qurbani-hat-ruddy.vercel.app/)

---

### 🚀 Key Features
*   **Database Integration**: All User profiles are managed securely via **MongoDB Atlas**.
*   **Secure Authentication**: Supports Google Social Login and Email registration powered by **BetterAuth**.
*   **User Profiles**: Logged-in users can view and update their Name and Photo-URL via the `/my-profile` route.
*   **Advanced UI**: Features dynamic price sorting, fully responsive layouts, and **Animate.css** transitions.
*   **Interactive Notifications**: Real-time feedback using **React-Toastify** for login, registration, and bookings.

---

### 🛠️ Tech Stack & Packages
*   **Framework**: Next.js (App Router)
*   **Database**: MongoDB
*   **Auth**: BetterAuth
*   **Styling**: Tailwind CSS
*   **Packages**: `animate.css`, `react-toastify`, `react-icons`

---

### 📁 Routes
*   **Public**: `/`, `/animals`, `/login`, `/register`
*   **Private**: `/details-page`, `/my-profile`

---

### 💻 Local Setup
1.  **Clone**: `git clone https://github.com/SadAfrin/qurbani-hat.git`

---