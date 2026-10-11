import { PortfolioProject } from "../portfolio";

export const project2: PortfolioProject = {
  id: 2,
  name: "Culinary Odyssey - Catering Management System",
  category: "Full Stack Development",
  coverImage: "/img/culinary-odissey/culinary-1.png",
  images: [
    "/img/culinary-odissey/culinary-1.png",
    "/img/culinary-odissey/culinary-2.png",
    "/img/culinary-odissey/culinary-3.png",
    "/img/culinary-odissey/culinary-4.png",
    "/img/culinary-odissey/culinary-5.png",
    "/img/culinary-odissey/culinary-6.png",
  ],
  description:
    "Modern, full-stack catering management system built with Next.js that enables customers to browse menus, place orders, and manage their catering needs seamlessly.",
  longDescription:
    "Culinary Odyssey is a modern catering management system built with Next.js 14 and TypeScript. It features secure OTP-based authentication, an intuitive search for meal plans, and a flexible shopping cart with selective checkout. Users can manage orders, view history, and track statuses easily. The platform offers customer profile management and a polished UI using Radix UI and Tailwind CSS, all optimized for desktop and mobile.",
  technologies: [
    "Next.js",
    "Nest.js",
    "PostgreSQL",
    "TypeScript",
    "Tailwind CSS",
    "Radix UI",
  ],
  features: [
    "User authentication with OTP-based email verification",
    "Password reset functionality with OTP verification",
    "Menu browsing with real-time search and categorized meal plans",
    "Shopping cart with quantity management and item selection",
    "Order placement from selected cart items",
    "Order history with detailed tracking and status updates",
    "Payment processing and order management",
    "Responsive design optimized for all devices",
  ],
  challenges: [
    {
      title: "State Management Complexity",
      description:
        "Centralizing app state for auth, cart, and orders to avoid prop drilling",
    },
    {
      title: "Data Synchronization",
      description:
        "Syncing cart data between client and backend across sessions",
    },
    {
      title: "Authentication Security",
      description:
        "Securing authentication (OTP, password reset, sessions) with smooth UX",
    },
    {
      title: "Real-time User Feedback",
      description: "Delivering real-time user feedback without full reloads",
    },
    {
      title: "Responsive Design",
      description: "Building a responsive, consistent UI for all devices",
    },
  ],
  solution:
    "The project addressed these challenges through a comprehensive technical approach. Zustand was implemented for centralized state management, creating stores for authentication, cart, and orders with automatic localStorage persistence. A hybrid cart management system was developed to synchronize client-side state with backend APIs while providing offline resilience through fallback mechanisms. The authentication flow was built using modular Next.js API routes with separate endpoints for registration, OTP generation, and password reset, integrated with Nodemailer for email delivery. Optimistic UI updates with debounced search queries, loading states, and toast notifications provide immediate user feedback. A mobile-first responsive design was achieved using Tailwind CSS with flexible layouts that adapt to all screen sizes. Additionally, Formik with Yup schemas handled form validation, Radix UI components ensured accessibility, RESTful API architecture enabled scalability, and TypeScript provided type safety throughout the application.",
  liveUrl: "https://api.example.com",
  githubUrl: [
    "https://github.com/Asif259/catering-frontend.git",
    "https://github.com/Asif259/catering-backend.git",
  ],
  date: "2025-01-01",
  client: "Culinary Odyssey",
  role: "Full Stack Developer",
};