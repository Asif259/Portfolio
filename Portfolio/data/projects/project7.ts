
import { PortfolioProject } from "../portfolio";

export const project7: PortfolioProject = {
    id: 7,
    name: "Nexus: Modern Event Management & Ticketing Platform",
    category: "Full Stack Development",
    coverImage: "/img/nexus/nexus-1.png",
    images: [
      "/img/nexus/nexus-1.png",
      "/img/nexus/nexus-2.png",
      "/img/nexus/nexus-3.png",
      "/img/nexus/nexus-4.png",
      "/img/nexus/nexus-5.png",
    ],
    description:
      "Nexus is a high-performance event management platform that simplifies the entire event lifecycle—from creation and discovery to ticketing and real-time attendee check-ins. Built for speed and scalability, it offers a seamless experience for organizers and attendees alike.",
    longDescription:
      "Nexus is a comprehensive digital ecosystem for event management, built with modern web technologies to handle real-time interactions and complex logistics. The platform enables organizers to host free or paid events, manage attendee lists with an automated waitlist system, and verify tickets via integrated QR scanning. For attendees, Nexus provides a rich discovery experience with advanced location filtering and a premium Pro tier that offers early access, exclusive discounts, and priority status. Powered by a serverless real-time backend, Nexus ensures data integrity and instant updates across all user interfaces.",
    technologies: [
      "Next.js 16.2",
      "React 19",
      "Tailwind CSS v4",
      "Convex",
      "Clerk",
      "Google Generative AI",
      "Zod",
      "TypeScript",
    ],
    features: [
      {
        title: "Organizer Features",
        items: [
          {
            name: "Event Creation Hub",
            description:
              "Effortlessly create events with detailed descriptions, pricing, and location data.",
          },
          {
            name: "Real-time Attendee Management",
            description:
              "Monitor registrations, manage waitlists, and track attendance as it happens.",
          },
          {
            name: "QR Check-in System",
            description:
              "A built-in mobile-responsive scanner to verify attendee tickets at the door.",
          },
          {
            name: "Data Export",
            description:
              "Export attendee lists to CSV for external reporting and logistics.",
          },
          {
            name: "Pro-Only Events",
            description:
              "Capability to host exclusive events limited to premium members.",
          },
        ],
      },
      {
        title: "Attendee Features",
        items: [
          {
            name: "Event Discovery",
            description:
              "Powerful search with hierarchical location filtering (Country > State > City).",
          },
          {
            name: "Seamless Ticketing",
            description:
              "Register for events and receive digital tickets with unique QR codes instantly.",
          },
          {
            name: "Automated Waitlist",
            description:
              "Join waitlists for at-capacity events with automatic promotion upon cancellations.",
          },
          {
            name: "My Tickets Dashboard",
            description:
              "A centralized wallet for all upcoming and past event registrations.",
          },
        ],
      },
      {
        title: "Pro Membership Perks",
        items: [
          {
            name: "Early Access ⚡",
            description:
              "Register for high-demand events 48 hours before the general public.",
          },
          {
            name: "Priority Waitlist 🥇",
            description:
              "Pro members automatically jump to the front of any registration queue.",
          },
          {
            name: "Exclusive Discounts",
            description:
              "A flat 10% discount automatically applied to all paid events.",
          },
          {
            name: "Verified Status",
            description:
              "A glowing #CCFF00 PRO badge and access to exclusive \"Pro-Only\" gatherings.",
          },
        ],
      },
      {
        title: "Platform-Wide Features",
        items: [
          {
            name: "Real-time Updates",
            description:
              "Live synchronization of event availability and ticket status via Convex.",
          },
          {
            name: "Premium Aesthetics",
            description:
              "A dark-themed, glassmorphic UI designed for a modern, high-end feel.",
          },
          {
            name: "Responsive Design",
            description: "Fully optimized for mobile, tablet, and desktop viewing.",
          },
        ],
      },
    ],
    challenges: [
      {
        title: "Server-Side Security",
        description:
          "Transitioning from client-side trust to authoritative server-side validation for Pro membership and event access control.",
      },
      {
        title: "Hierarchical Location Filtering",
        description:
          "Implementing efficient, dependent selectors for Country, State, and City within a serverless architecture.",
      },
      {
        title: "Race Condition Prevention",
        description:
          "Managing simultaneous registrations and QR scans to ensure data integrity and prevent overbooking.",
      },
      {
        title: "Backend Synchronization",
        description:
          "Maintaining a consistent state between Clerk’s authentication metadata and the Convex database records.",
      },
      {
        title: "Performance at Scale",
        description:
          "Optimizing real-time subscriptions to handle high-traffic event launches without latency.",
      },
      {
        title: "Complex Waitlist Logic",
        description:
          "Automating the promotion of waitlisted users while respecting Pro-tier priority and availability.",
      },
    ],
    solution:
      "Nexus addresses these challenges by leveraging the power of Convex’s ACID-compliant transactions, which eliminate race conditions during critical operations like ticket booking. The architecture enforces server-side authoritative checks for all sensitive actions, ensuring that Pro benefits and gated events are securely managed. By using Next.js 16.2 and Tailwind CSS v4, the platform achieves near-instant load times and a premium look, while Clerk provides a robust security layer that seamlessly syncs user status across the entire stack. This combination creates a reliable, real-time, and highly aesthetic event management experience.",
    liveUrl: "https://nexus-one-liard.vercel.app/",
    githubUrl: ["https://github.com/Asif259/Nexus-All-in-one-event-management.git"],
    date: "2026-04-29",
    client: "Self Project",
    role: "Full Stack Developer",
  }