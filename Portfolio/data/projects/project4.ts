import { PortfolioProject } from "../portfolio";

export const project4: PortfolioProject = {
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
};