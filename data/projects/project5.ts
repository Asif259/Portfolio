import { PortfolioProject } from "../portfolio";

export const project5: PortfolioProject = {
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
  solution:
    "Performance – Used requestAnimationFrame for scroll handling and lazy loading for images\nColor Scheme – CSS Custom Properties in :root for centralized color management\nResponsive – CSS Grid and Flexbox with mobile-first approach and 768px breakpoint\nNavbar – CSS transition with backdrop-filter and requestAnimationFrame for 60fps\nAnimations – Intersection Observer API with 0.2 threshold and staggered delays\nCompatibility – Modern features with graceful degradation fallbacks\nLayout – Consistent rem units, 1200px max-width containers, Grid and Flexbox layouts\nFAQ – JavaScript closes all items before opening clicked one with CSS transitions for smooth height animations",
  liveUrl: "https://asif259.github.io/Elegant-Tech/",
  githubUrl: ["https://github.com/Asif259/Elegant-Tech.git"],
  date: "2024-06-18",
  client: "Elegant Tech",
  role: "Frontend Developer",
};