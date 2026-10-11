import { PortfolioProject } from "../portfolio";

export const project3: PortfolioProject = {
  id: 3,
  name: "Home Decor And More - E-commerce Website",
  category: "Full Stack Development",
  coverImage: "/img/home-decor-and-more/home-1.png",
  images: [
    "/img/home-decor-and-more/home-1.png",
    "/img/home-decor-and-more/home-2.png",
    "/img/home-decor-and-more/home-3.png",
    "/img/home-decor-and-more/home-4.png",
    "/img/home-decor-and-more/home-5.png",
  ],
  description:
    "A modern full-stack e-commerce website for home decor, offering seamless shopping with search, cart, favorites, and secure multi-option checkout.",
  longDescription:
    "Home Decor And More is a modern e-commerce site for home decor, featuring a responsive Next.js frontend and a NestJS backend. It offers an admin panel, product search, cart, favorites, order tracking, and secure checkout with cash and mobile payment options. Features include product reviews, email notifications, and category filtering for a seamless shopping experience.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Framer Motion",
    "Tailwind CSS",
    "Radix UI",
    "NestJS",
    "MongoDB",
    "JWT",
    "Nodemailer",
  ],
  features: [
    {
      title: "User Features",
      items: [
        {
          name: "Product Catalog & Search",
          description:
            "Browse products with images, descriptions, pricing, and ratings",
        },
        {
          name: "Advanced Search",
          description: "Real-time product search with keyboard navigation",
        },
        {
          name: "Category Filtering",
          description: "Filter products by categories and rooms",
        },
        {
          name: "Shopping Cart & Favorites",
          description: "Add/remove items with quantity management",
        },
        {
          name: "Favorites/Wishlist",
          description: "Save products for later",
        },
        {
          name: "Product Reviews",
          description: "View and submit product ratings and reviews",
        },
        {
          name: "Order Management",
          description: "Place orders with detailed shipping information",
        },
        {
          name: "Multiple Payment Methods",
          description:
            "Cash on Delivery, Mobile Banking (bKash/Nagad/Rocket)",
        },
        {
          name: "Responsive Design",
          description: "Mobile-first, fully responsive UI",
        },
      ],
    },
    {
      title: "Admin Features",
      items: [
        {
          name: "Product Management",
          description:
            "Create, update, delete, and manage products with image uploads",
        },
        {
          name: "Category Management",
          description: "Organize products with categories and room types",
        },
        {
          name: "Order Management",
          description: "Process orders, update status, and manage shipping",
        },
        {
          name: "Review Moderation",
          description: "Approve/reject customer reviews",
        },
        {
          name: "Dashboard Analytics",
          description: "View sales statistics and order summaries",
        },
        {
          name: "User Authentication",
          description: "Secure admin login with JWT",
        },
      ],
    },
    {
      title: "Technical Features",
      items: [
        {
          name: "Server-Side Rendering",
          description: "Fast initial page loads",
        },
        {
          name: "State Management",
          description: "Client-side state with Zustand",
        },
        {
          name: "Form Validation",
          description: "Client and server-side validation",
        },
        {
          name: "Image Optimization",
          description: "Efficient image handling and display",
        },
        {
          name: "Email Notifications",
          description: "Automated order confirmation emails",
        },
        {
          name: "Error Handling",
          description: "Comprehensive error handling and user feedback",
        },
        {
          name: "SEO Optimized",
          description: "Meta tags and semantic HTML",
        },
      ],
    },
  ],
  challenges: [
    {
      title: "Complex State Management",
      description:
        "Managing complex state across cart, favorites, and user sessions",
    },
    {
      title: "Efficient Product Search",
      description:
        "Implementing efficient product search with debouncing and suggestions",
    },
    {
      title: "Secure Admin Authentication",
      description: "Implementing secure JWT-based admin authentication",
    },
    {
      title: "Data Consistency",
      description: "Keeping frontend and backend data consistent",
    },
    {
      title: "Cross-Device Experience",
      description: "Creating seamless experience across all device sizes",
    },
    {
      title: "Order Lifecycle Management",
      description: "Handling order lifecycle from creation to completion",
    },
  ],
  solution:
    "Built with a modern, scalable architecture, the project uses Next.js for fast, SEO-friendly frontend and Zustand for simple state management. The backend leverages NestJS and MongoDB for flexibility and easy feature expansion. Secure JWT authentication and efficient, debounced search enhance usability. Payment and email notifications are modular and handled asynchronously. TypeScript ensures type safety, and the modular codebase and Tailwind CSS provide easy maintenance and responsiveness.",
  liveUrl: "https://portfolio.example.com",
  githubUrl: ["https://github.com/username/portfolio"],
  date: "2024-03-10",
  role: "Full Stack Developer",
};