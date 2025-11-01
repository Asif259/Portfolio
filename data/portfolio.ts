export interface FeatureItem {
  name: string;
  description: string;
}

export interface FeatureSection {
  title: string;
  items: FeatureItem[];
}

export interface Challenge {
  title: string;
  description: string;
}

export interface PortfolioProject {
  id: number;
  name: string;
  category:
    | "Frontend Development"
    | "Backend Development"
    | "Full Stack Development";
  coverImage: string;
  images: string[];
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[] | FeatureSection[];
  challenges: string[] | Challenge[];
  solution: string;
  liveUrl?: string;
  githubUrl?: string[];
  date: string;
  client?: string;
  role: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    name: "Redesigned MyBBBGlobal Website",
    category: "Frontend Development",
    coverImage: "/img/cryzen/cryzen-1.png",
    images: [
      "/img/cryzen/cryzen-1.png",
      "/img/cryzen/cryzen-2.png",
      "/img/cryzen/cryzen-3.png",
      "/img/cryzen/cryzen-4.png",
      "/img/cryzen/cryzen-5.png",
      "/img/cryzen/cryzen-6.png",
    ],
    description:
      "Cryzen is a self-billed “global mutual-aid investment community” that offers a web dashboard where members can pool money (PH – Provide Help), receive payouts (GH – Get Help), track MAVRO internal tokens, and view staged profit statistics. The UI mixes classic HYIP language (“up to 30 % per month”, “financial apocalypse”) with familiar fintech components (balance cards, transaction history, referral counters).",
    longDescription:
      "Cryzen wants to look like a neobroker while operating like a closed-loop money-circulation game. New participants deposit USDT which is converted to an in-platform unit called MAVRO. A “Total PH count” shows how much money has been injected; a “Total GH count” shows how much has been withdrawn. A “recommitment” mechanism forces users to redeposit a slice of any withdrawal, keeping liquidity inside the system. The front page showcases fabricated top-performer cards (“Marcus Rodriguez turned $25 k → $89 k in 12 months”) to create FOMO. A “stacking” page and a “port wallet” imitate DeFi staking, but no on-chain contract addresses are supplied. Everything is denominated in dollars and MAVRO, yet no KYC or real-broker license is mentioned ",
    technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    features: [
      "Dual wallet: USDT balance + MAVRO balance",
      "PH / GH ledger: Provide-Help vs Get-Help history with running counters",
      "Recommitment tracker: Forces partial redeposit before next withdrawal",
      "Stacking page: Promises extra yield for “locking” MAVRO",
      "Referral dashboard: Shows down-line participant count & bonus history",
      "Top-performer carousel: Fabricated ROI stories (+256 %, +274 %, etc.)",
      "Quick action buttons: “+ Withdraw”, “Start investing →”",
      "Multi-language placeholder: “already in 15 countries”",
      "Social login: Google / Facebook sign-in options",
      "Live “portfolio performance” ticker: “+34.2 % this year”",
    ],
    challenges: [
      {
        title: "Regulatory Risk",
        description: "Uses securities-like language without license disclosure",
      },
      {
        title: "Sustainability Concerns",
        description: "Classic Ponzi arithmetic – new PH funds old GH",
      },
      {
        title: "Trust Gap",
        description: "No verifiable on-chain contracts or third-party custody",
      },
      {
        title: "Withdrawal Friction",
        description: "Recommitment rule can block full exit",
      },
      {
        title: "Reputation Issues",
        description:
          "Homepage mirrors known HYIP templates (30 % monthly, ideological manifesto)",
      },
      {
        title: "Security Vulnerabilities",
        description:
          "Centralized off-chain database holds all balances; single hack can wipe records",
      },
    ],
    solution:
      "Cryzen claims its “solution” is a peer-to-peer mutual-aid loop that cuts out banks: deposits become MAVRO tokens, an internal algorithm caps supply, and a mandatory recommitment rule recycles a slice of every withdrawal back into the pool, while feel-good education tips and glowing success stories keep newcomers pouring in fast enough to let earlier members cash out—postponing, not solving, the inevitable shortfall.",
    liveUrl: "https://cry-zen.vercel.app/",
    githubUrl: ["https://github.com/Asif259/CryZen"],
    date: "2025-07-01",
    client: "MYBBBGlobal",
    role: "Frontend Developer",
  },
  {
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
  },
  {
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
  },
  {
    id: 4,
    name: "Doctein: Modern Healthcare Practice Management Platform",
    category: "Full Stack Development",
    coverImage: "/img/doctein/doctein-1.png",
    images: [
      "/img/doctein/doctein-1.png",
      "/img/doctein/doctein-2.png",
      "/img/doctein/doctein-3.png",
      "/img/doctein/doctein-4.png",
      "/img/doctein/doctein-5.png",
      "/img/doctein/doctein-6.png",
      "/img/doctein/doctein-7.png",
      "/img/doctein/doctein-8.png",
    ],
    description:
      "Doctein is a healthcare management platform that streamlines medical practice operations through digital prescription management, appointment scheduling, and patient records. The platform enables doctors to create detailed digital prescriptions, track appointments, and maintain secure medical documentation.",
    longDescription:
      "Doctein is a digital healthcare management platform that streamlines medical practice operations. The system enables doctors to manage patients, schedule appointments, and create detailed digital prescriptions with medications, diagnosis, and medical history. Built with modern web technologies, it features role-based access control, secure OTP authentication, and robust file upload capabilities for prescription snapshots while ensuring data security through JWT authentication and encrypted storage.",
    technologies: [
      // Frontend
      "Next.js 14",
      "TypeScript",
      "TailwindCSS",
      "NextUI",
      "Zustand",
      "Formik & Yup",
      // Backend
      "Node.js",
      "Express.js",
      "MongoDB",
      "Multer",
      "Nodemailer",
      // Infrastructure & DevOps
      "Docker",
      "Git",
    ],
    features: [
      {
        title: "Doctor Features",
        items: [
          {
            name: "Multi-Role Authentication",
            description:
              "Login with role-based access for doctors (OTP email verification).",
          },
          {
            name: "Digital Prescription Creation",
            description:
              "Build prescriptions with medications, complaints, diagnosis, investigations, and follow-up dates.",
          },
          {
            name: "Prescription Templates",
            description:
              "Save and reuse prescription templates with drag-and-drop medicine input.",
          },
          {
            name: "Prescription Image Upload",
            description:
              "Securely upload prescription snapshots with automatic file management.",
          },
          {
            name: "Appointment Scheduling",
            description:
              "Create and manage appointments, track status (upcoming, completed, cancelled).",
          },
          {
            name: "Patient Management",
            description:
              "Access patient profiles, view medical history, and track patient data.",
          },
          {
            name: "Prescription Printing",
            description: "Generate print-ready prescription formats.",
          },
          {
            name: "Dashboard Analytics",
            description:
              "Visualize appointment stats and patient counts for practice management.",
          },
          {
            name: "Password Reset",
            description:
              "Request OTP-based password reset for secure account recovery.",
          },
        ],
      },
      {
        title: "Clinic Staff Features",
        items: [
          {
            name: "Multi-Role Authentication",
            description:
              "Login with staff role, access appropriate tools via OTP verification.",
          },
          {
            name: "Staff & Doctor Management",
            description:
              "Add and manage staff profiles, manage doctor accounts for the clinic.",
          },
          {
            name: "Appointment Scheduling",
            description:
              "View, assist, or update appointments as per staff permissions.",
          },
          {
            name: "Patient Management",
            description:
              "Assist with creation and updating of patient records and appointments.",
          },
        ],
      },
      {
        title: "Patient Features",
        items: [
          {
            name: "Multi-Role Authentication",
            description: "Login as a patient with OTP email validation.",
          },
          {
            name: "Appointment Scheduling",
            description:
              "Book and view appointments, track appointment status.",
          },
          {
            name: "Patient Profile Management",
            description:
              "Maintain and update personal information, see medical history and prescriptions.",
          },
          {
            name: "Password Reset",
            description: "Securely reset password using OTP.",
          },
        ],
      },
      {
        title: "Platform-Wide Features",
        items: [
          {
            name: "Responsive Design",
            description: "Mobile-first, seamless UI across all devices.",
          },
          {
            name: "Security",
            description:
              "JWT authentication, encrypted storage, secure file uploads.",
          },
          {
            name: "Role-Based Access Control",
            description:
              "Strict segmentation of permissions for doctors, staff, and patients.",
          },
        ],
      },
    ],
    challenges: [
      {
        title: "CORS Configuration",
        description:
          "Managing image loading from different domains (localhost vs Azure VM)",
      },
      {
        title: "File Upload Security",
        description:
          "Securing sensitive medical document uploads while preventing malicious files",
      },
      {
        title: "Environment Configuration",
        description:
          "Seamlessly managing API endpoints between development and production",
      },
      {
        title: "Azure Deployment",
        description:
          "Configuring remote image patterns and static file serving with proper CORS headers",
      },
      {
        title: "JWT Authentication",
        description:
          "Implementing secure token-based auth with HTTP-only cookies",
      },
      {
        title: "Multi-Role Access Control",
        description:
          "Managing different permissions for doctors, staff, and patients",
      },
      {
        title: "Data Integrity",
        description:
          "Ensuring consistency when linking prescriptions to appointments",
      },
      {
        title: "File Path Normalization",
        description:
          "Handling OS differences (Windows vs Unix) for file storage",
      },
      {
        title: "State Synchronization",
        description: "Keeping frontend state in sync with backend data changes",
      },
      {
        title: "Type Safety",
        description:
          "Maintaining TypeScript consistency across frontend and backend",
      },
    ],
    solution:
      "The project solves these challenges with a robust full-stack setup: Next.js for the frontend, Express.js REST API backend, secure file uploads with Multer, and JWT cookies for auth. Docker ensures consistent deployment. TypeScript, Zustand, and Formik/Yup provide type safety and smooth state and form management. Security and environment settings are handled with best practices across both localhost and Azure VM.",
    liveUrl: "https://doctein.example.com",
    githubUrl: ["https://github.com/asif259/private"],
    date: "2024-04-05",
    client: "Self Project",
    role: "Full Stack Developer",
  },
  {
    id: 5,
    name: "Elegant Tech - Modern Agency Website",
    category: "Frontend Development",
    coverImage: "/img/elegant-tech/elegant-1.png",
    images: [
      "/img/elegant-tech/elegant-1.png",
      "/img/elegant-tech/elegant-2.png",
      "/img/elegant-tech/elegant-3.png",
      "/img/elegant-tech/elegant-4.png",
    ],
    description:
      "A modern, responsive agency website showcasing digital services with interactive animations and professional design.",
    longDescription:
      "Elegant Tech is a fully responsive single-page website for a creative digital agency featuring a transparent navbar that transforms on scroll, interactive sections including portfolio showcases, testimonials, and FAQ accordion. Built with pure HTML5, CSS3, and vanilla JavaScript with performance optimizations including lazy loading and efficient animations. The design uses a symmetric blue color scheme creating a cohesive professional experience with fast load times and smooth interactions.",
    technologies: [
      "HTML5",
      "CSS3 (Variables, Flexbox, Grid)",
      "JavaScript (ES6+)",
      "Font Awesome 6.4.0",
      "Intersection Observer API",
      "RequestAnimationFrame API",
    ],
    features: [
      "Transparent navbar with smooth scroll transition",
      "Smooth scroll navigation",
      "Animated statistics counter",
      "Scroll-triggered fade-in animations",
      "FAQ accordion with smooth transitions",
      "Portfolio showcase with hover overlays",
      "Fully responsive design",
      "Lazy loading for images",
      "9 content sections (Hero, About, Services, Stats, Features, Portfolio, Testimonials, FAQ, Contact)",
      "Symmetric blue color scheme",
      "Interactive hover effects on cards",
      "Contact form with validation",
    ],
    challenges: [
      {
        title: "Performance",
        description:
          "Managing multiple scroll animations without performance issues",
      },
      {
        title: "Color Consistency",
        description: "Ensuring symmetric colors across all sections",
      },
      {
        title: "Responsive Design",
        description: "Seamless experience across all device sizes",
      },
      {
        title: "Smooth Transitions",
        description: "Navbar transparent to solid transition without glitches",
      },
      {
        title: "Animation Coordination",
        description: "Timing multiple animations cohesively",
      },
      {
        title: "Browser Compatibility",
        description: "Modern features across different browsers",
      },
      {
        title: "Layout Consistency",
        description: "Proper spacing and hierarchy across sections",
      },
      {
        title: "FAQ Accordion",
        description: "Smooth accordion that closes other items",
      },
    ],
    solution: [
      "Performance – Used requestAnimationFrame for scroll handling and lazy loading for images",
      "Color Scheme – CSS Custom Properties in :root for centralized color management",
      "Responsive – CSS Grid and Flexbox with mobile-first approach and 768px breakpoint",
      "Navbar – CSS transition with backdrop-filter and requestAnimationFrame for 60fps",
      "Animations – Intersection Observer API with 0.2 threshold and staggered delays",
      "Compatibility – Modern features with graceful degradation fallbacks",
      "Layout – Consistent rem units, 1200px max-width containers, Grid and Flexbox layouts",
      "FAQ – JavaScript closes all items before opening clicked one with CSS transitions for smooth height animations",
    ].join("\n"),
    liveUrl: "https://asif259.github.io/Elegant-Tech/",
    githubUrl: ["https://github.com/Asif259/Elegant-Tech.git"],
    date: "2024-06-18",
    client: "Elegant Tech",
    role: "Frontend Developer",
  },
  {
    id: 6,
    name: "Data Analytics Dashboard",
    category: "Backend Development",
    coverImage: "/img/portfolio-6.jpg",
    images: [
      "/img/portfolio-6.jpg",
      "/img/portfolio-4.jpg",
      "/img/portfolio-2.jpg",
    ],
    description:
      "Advanced analytics platform with real-time data visualization",
    longDescription:
      "Developed a comprehensive data analytics dashboard that processes and visualizes large datasets in real-time. The system includes customizable charts, export functionality, and automated report generation. Built to handle millions of data points efficiently.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React",
      "Chart.js",
      "D3.js",
      "Celery",
    ],
    features: [
      "Real-time data processing",
      "Customizable dashboards",
      "Multiple chart types",
      "Data export (CSV, PDF)",
      "Automated reports",
      "User permissions",
      "Data filtering and search",
    ],
    challenges: [
      {
        title: "Large Dataset Processing",
        description: "Processing large datasets efficiently",
      },
      {
        title: "Real-time Data Updates",
        description: "Handling real-time data updates and synchronization",
      },
      {
        title: "Flexible Visualizations",
        description:
          "Creating flexible visualization options for different data types",
      },
      {
        title: "Query Performance",
        description: "Optimizing query performance for large datasets",
      },
    ],
    solution:
      "Used FastAPI for high-performance API, PostgreSQL with proper indexing, Celery for background tasks, and implemented efficient data aggregation strategies. Used Chart.js and D3.js for visualizations.",
    liveUrl: "https://asif259.github.io/Elegant-Tech/",
    githubUrl: ["https://github.com/Asif259/Elegant-Tech.git"],
    date: "2024-06-18",
    client: "Elegant Tech",
    role: "Frontend Developer",
  },
];

export function getProjectById(id: number): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.id === id);
}
