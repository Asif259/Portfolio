import { PortfolioProject } from "../portfolio";

export const project6: PortfolioProject = {
  id: 6,
  name: "Careem Website",
  category: "Frontend Development",
  coverImage: "/img/careem/careem-1.png",
  images: [
    "/img/careem/careem-1.png",
    "/img/careem/careem-2.png",
    "/img/careem/careem-3.png",
  ],
  description:
    "A modern, responsive multi-page website for Careem showcasing ride-hailing, food delivery, grocery services, and payment solutions with a fully dynamic navigation system.",
  longDescription:
    "A comprehensive redesign of the Careem website featuring a contemporary, professional aesthetic with improved user experience across five dedicated pages. The project implements a reusable navbar component that dynamically loads on all pages with active state highlighting, ensuring consistent navigation and brand identity. Built entirely with Tailwind CSS utility classes, the site offers seamless navigation, smooth animations, and a fully responsive design that works flawlessly across all devices from mobile phones to desktop computers.",
  technologies: [
    "HTML5",
    "Tailwind CSS (CDN)",
    "JavaScript (Vanilla)",
    "Google Fonts (Inter)",
    "Boxicons",
    "Font Awesome",
  ],
  features: [
    "Multi-page website structure with five dedicated pages (Home, About, Services, Partners, Contact)",
    "Reusable navbar component with dynamic loading and active page highlighting",
    "Fully responsive design with mobile-first approach and optimized breakpoints",
    "Interactive mobile menu with hamburger icon and smooth animations",
    "Custom Careem green color palette integrated into Tailwind configuration",
    "Sticky navigation header that remains visible while scrolling",
    "Hero sections with gradient backgrounds and call-to-action buttons",
    "Service showcase sections displaying all Careem offerings",
    "Contact form with validation and modern styling",
    "FAQ sections with card-based layouts",
    "Social media integration in footer with hover animations",
    "Image optimization with responsive images and hover effects",
    "Smooth transitions and animations throughout the site",
    "Accessibility features including semantic HTML and proper ARIA labels",
  ],
  challenges: [
    {
      title: "Tailwind Refactor",
      description:
        "Converting from custom CSS to Tailwind CSS utility classes required complete refactoring of existing styles",
    },
    {
      title: "Design Consistency",
      description:
        "Maintaining design consistency across all five pages during the conversion process",
    },
    {
      title: "Responsive Breakpoints",
      description:
        "Creating responsive breakpoints that work seamlessly across different screen sizes",
    },
    {
      title: "Dynamic Navbar",
      description:
        "Implementing a dynamic navbar component that loads consistently on all pages with active state management",
    },
    {
      title: "Hero Section Readability",
      description:
        "Balancing background image visibility with text readability in hero sections",
    },
    {
      title: "Mobile Menu Functionality",
      description:
        "Building a smooth mobile menu functionality using vanilla JavaScript",
    },
    {
      title: "Tailwind Forms & Accessibility",
      description:
        "Styling forms using only Tailwind utilities while maintaining accessibility",
    },
    {
      title: "Cross-Browser Compatibility",
      description:
        "Ensuring cross-browser compatibility for all Tailwind classes and custom animations",
    },
    {
      title: "Performance & Animations",
      description:
        "Performance optimization while maintaining smooth animations and transitions",
    },
    {
      title: "Reusability Without Frameworks",
      description:
        "Managing component reusability without using a build system or framework",
    },
  ],
  solution:
    "The project was completed using Tailwind CSS for rapid development and consistent styling. Custom Tailwind config ensured brand colors, and responsive design was handled with built-in breakpoints. A reusable navbar and mobile menu were created with vanilla JS and Tailwind utilities. Backgrounds and forms were styled entirely with Tailwind, and minimal custom CSS was used only for unique animations. Tailwind's CDN enabled easy deployment and fast loading.",
  liveUrl: "https://asif259.github.io/Careem/",
  githubUrl: ["https://github.com/Asif259/Careem.git"],
  date: "2023-01-",
  client: "Self Project",
  role: "Frontend Developer",
};