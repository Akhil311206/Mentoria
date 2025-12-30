# Mentora · Next-Gen Mentor–Student Bridge

**Mentora** is a sophisticated dashboard application designed to streamline the connection between educators and students. Built with a focus on **role-based access control** and **intuitive discovery**, it provides a seamless experience for finding, scheduling, and managing educational content.

---

## 🌟 Key Features

### 🔐 Intelligent Authentication
- **Role-Based Redirection**  
  Routes users to dedicated interfaces based on their account type (`student` vs `teacher`).
- **Secure Onboarding**  
  A comprehensive multi-field signup process collecting academic and professional backgrounds.

### 🔍 Discovery Engine
- **Live Filtering**  
  Real-time course filtering by category, search terms, and enrollment status.
- **My Courses Integration**  
  Dedicated view for users to track enrolled classes and monitor progress.

### 📅 Dynamic Classroom
- **Contextual Actions**  
  The UI adapts to the user's relationship with a course  
  (e.g., *Join Class* → *Schedule Session* upon enrollment).
- **Schedule Management**  
  Detailed breakdown of class timings and mentor information.

---

## 🛠️ Tech Stack

| Category | Technology |
|--------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Navigation** | Next.js Navigation Hooks (`useRouter`, `useParams`) |
| **Icons** | Lucide React / Heroicons |

---

## 📂 Project Architecture

```text
├── app/
│   ├── (auth)/           # Authentication logic
│   │   ├── login/        # Sign-in page (Entry Point)
│   │   └── signup/       # Comprehensive registration form
│   ├── discover/         # Course marketplace & search
│   │   └── [id]/         # Dynamic course detail pages
│   ├── students/         # Directory view for student management
│   ├── lib/              # Centralized data (SignupData.ts, data.ts)
│   └── layout.tsx        # Global styles and layout
├── public/               # Static assets & images
└── tailwind.config.ts    # Custom design tokens

