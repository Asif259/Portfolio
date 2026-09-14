import { PortfolioProject } from "../portfolio";

export const project8: PortfolioProject = {
  id: 8,
  name: "BariVara: Smart Rental & Property Management Platform",
  category: "Full Stack Development",
  coverImage: "/images/bariara/barivara1.png",
  images: [
    "/images/bariara/barivara1.png",
    "/images/bariara/barivara2.png",
    "/images/bariara/barivara3.png",
    "/images/bariara/barivara4.png",
    "/images/bariara/barivara5.png",
    "/images/bariara/barivara6.png",
    "/images/bariara/barivara7.png",
    "/images/bariara/barivara8.png",
    "/images/bariara/barivara9.png",
    "/images/bariara/barivara10.png",
  ],
  description:
    "BariVara is a modern property and rental management platform designed for landlords in Bangladesh. It simplifies property management, tenant management, rent collection, payments, expenses, reminders, and financial reporting through a centralized dashboard.",
  longDescription:
    "BariVara is a comprehensive property and rental management ecosystem built to streamline the day-to-day operations of landlords and property owners. The platform allows users to manage properties and units, maintain detailed tenant profiles, create and manage rental agreements, generate monthly rents, track outstanding balances, record payments, manage expenses, and generate financial reports. It also provides document and image management through Supabase Storage with signed URLs, Bangla and English reminder support, tenant statements, property financial reports, and dashboard-level collection and occupancy insights. The system uses a modular NestJS backend with Prisma and PostgreSQL, while the Next.js frontend provides a responsive interface with TanStack Query, Zustand, React Hook Form, Zod, and shadcn/ui.",
  technologies: [
    "Next.js 16.3.4",
    "React 19.2.8",
    "TypeScript 5.x",
    "Tailwind CSS v4",
    "shadcn/ui",
    "NestJS 10.4.15",
    "Prisma 5.22.0",
    "PostgreSQL",
    "Zustand 5.0.15",
    "TanStack Query 5.102.8",
    "Axios 1.20.0",
    "React Hook Form 7.87.0",
    "Zod 3.25.76",
    "JWT",
    "Argon2",
    "Supabase Storage",
    "Swagger",
    "Helmet",
  ],
  features: [
    {
      title: "Authentication & Security",
      items: [
        {
          name: "JWT Authentication",
          description:
            "Custom JWT authentication with short-lived access tokens and long-lived refresh tokens.",
        },
        {
          name: "Automatic Token Refresh",
          description:
            "Axios interceptors automatically refresh expired access tokens and retry failed authenticated requests.",
        },
        {
          name: "Rate Limiting",
          description:
            "Authentication endpoints are protected with request rate limits to reduce abuse and unauthorized access attempts.",
        },
        {
          name: "Protected Resources",
          description:
            "Property, tenant, rental, payment, expense, reporting, and other application resources require authenticated access.",
        },
      ],
    },
    {
      title: "Property & Unit Management",
      items: [
        {
          name: "Property Management",
          description:
            "Create, view, update, and delete properties while keeping property data scoped to the authenticated owner.",
        },
        {
          name: "Unit Management",
          description:
            "Manage individual rental units with information such as floor, unit type, bedrooms, and bathrooms.",
        },
        {
          name: "Bulk Unit Creation",
          description:
            "Create multiple units efficiently through the bulk unit management workflow.",
        },
        {
          name: "Property Financial Summary",
          description:
            "View financial information associated with individual properties through dedicated summary and reporting APIs.",
        },
      ],
    },
    {
      title: "Tenant & Rental Management",
      items: [
        {
          name: "Tenant Management",
          description:
            "Maintain tenant profiles including contact information, occupation, emergency contacts, profile pictures, and identification documents.",
        },
        {
          name: "Rental Agreements",
          description:
            "Create and manage rental agreements with start and end dates, security deposits, due-day configuration, and active or ended status.",
        },
        {
          name: "Tenant Documents",
          description:
            "Manage tenant-related documents such as NID files through the platform's file management workflow.",
        },
        {
          name: "Tenant Details",
          description:
            "Centralize tenant information, rental agreements, documents, and payment history in a dedicated tenant view.",
        },
      ],
    },
    {
      title: "Rent & Payment Management",
      items: [
        {
          name: "Monthly Rent Generation",
          description:
            "Generate monthly rent records in batches based on rental agreement information.",
        },
        {
          name: "Rent Status Tracking",
          description:
            "Track rent as paid, partially paid, due, or overdue using dedicated status calculation logic.",
        },
        {
          name: "Outstanding Rent",
          description:
            "View outstanding monthly rent balances through a dedicated collection and outstanding-rent workflow.",
        },
        {
          name: "Payment Collection",
          description:
            "Record tenant payments and maintain transaction information for rental collections.",
        },
        {
          name: "Payment Reversal",
          description:
            "Reverse recorded payments when necessary while maintaining the corresponding payment history.",
        },
        {
          name: "Receipt Generation",
          description:
            "Generate payment receipts for recorded rental transactions.",
        },
      ],
    },
    {
      title: "Financial Management & Reporting",
      items: [
        {
          name: "Expense Tracking",
          description:
            "Record and categorize property-related expenses with amounts, dates, categories, and notes.",
        },
        {
          name: "Dashboard Analytics",
          description:
            "View collection rate, occupancy rate, and other quick property-management statistics from a centralized dashboard.",
        },
        {
          name: "Monthly Reports",
          description:
            "Generate monthly financial summaries in JSON and CSV formats.",
        },
        {
          name: "Property Financial Reports",
          description:
            "View financial information and performance for individual properties.",
        },
        {
          name: "Tenant Statements",
          description:
            "Generate tenant-specific financial statements containing relevant rental and payment information.",
        },
      ],
    },
    {
      title: "Files, Reminders & Administration",
      items: [
        {
          name: "Secure File Management",
          description:
            "Handle property images, tenant documents, payment receipts, and owner signatures through Supabase Storage signed URLs.",
        },
        {
          name: "Bangla & English Reminders",
          description:
            "Create and manage reminders using Bangla and English message templates.",
        },
        {
          name: "Audit Logs",
          description:
            "Track user actions through a protected audit-log system with administrative access.",
        },
        {
          name: "Owner Signature",
          description:
            "Upload and manage the owner's signature for supported application workflows.",
        },
        {
          name: "Bilingual Interface",
          description:
            "Provide Bangla and English translations across the frontend interface.",
        },
      ],
    },
  ],
  challenges: [
    {
      title: "Complex Rental Management Workflow",
      description:
        "Connecting properties, units, tenants, rental agreements, monthly rents, payments, expenses, and reports into a consistent end-to-end management workflow.",
    },
    {
      title: "Authentication & Token Management",
      description:
        "Implementing custom JWT authentication with short-lived access tokens, refresh tokens, automatic refresh, queued requests, and logout handling after refresh failure.",
    },
    {
      title: "Financial Data Consistency",
      description:
        "Maintaining accurate rent balances and payment statuses across monthly rent generation, payment collection, outstanding-rent tracking, and financial reporting.",
    },
    {
      title: "Secure File Handling",
      description:
        "Managing property images, tenant documents, payment receipts, and owner signatures without exposing storage credentials or relying on direct unrestricted storage access.",
    },
    {
      title: "Ownership-Scoped Data",
      description:
        "Ensuring property and rental-management resources are associated with the authenticated owner and protected from unauthorized access.",
    },
    {
      title: "Reusable Frontend Data Management",
      description:
        "Managing API-driven application state across multiple pages while keeping data fetching, caching, and synchronization efficient and maintainable.",
    },
  ],
  solution:
    "BariVara addresses these challenges through a modular NestJS backend backed by Prisma and PostgreSQL, with dedicated modules and APIs for each major rental-management domain. Custom JWT authentication provides short-lived access tokens and refresh-token handling, while Axios interceptors manage automatic token renewal and failed-request retries. TanStack Query is used on the frontend for server-state fetching and caching, while Zustand manages client-side application state. Supabase Storage is integrated through backend-generated signed URLs to handle property images, tenant documents, payment receipts, and owner signatures securely. The platform separates property, tenant, rental, financial, reporting, file, reminder, and administrative concerns into dedicated workflows, creating a centralized system for managing rental operations.",
  liveUrl: "https://barivara-web.vercel.app",
  githubUrl: ["https://github.com/Asif259/barivara-web", "https://github.com/Asif259/barivara-api"],
  date: "2026",
  client: "Self Project",
  role: "Full Stack Developer",
};