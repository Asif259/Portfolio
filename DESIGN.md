---
name: Futuristic Editorial Tech - Ashraful Asif
version: 2.0.0
colors:
  background: "#000000"
  canvas: "#0B0C0F"
  surface: "#101010"
  surface-hover: "#181818"
  surface-elevated: "#1C1C1C"
  primary: "#FFFFFF"
  primary-soft: "#F3F1EB"
  secondary: "#A0A1A6"
  muted-94: "#949494"
  muted-aa: "#AAAAAA"
  muted-b8: "#B8B8B8"
  border: "#1E2028"
  divider-22: "#222222"
  divider-33: "#333333"
  accent: "#FF630F"
  accent-hover: "#FF7728"
  accent-glow: "rgba(255, 99, 15, 0.25)"
  success: "#22C55E"
typography:
  font-display: "MonaSemi, -apple-system, sans-serif"
  font-body: "Mona, Inter, -apple-system, sans-serif"
  font-utility: "Inter, 'PP Neue Montreal', -apple-system, sans-serif"
  font-mono: "'JetBrains Mono', 'Fira Code', monospace"
  hero-title:
    fontFamily: "{typography.font-display}"
    fontSize: "clamp(42px, 16cqw, 231px)"
    fontWeight: 500
    lineHeight: 0.727
    letterSpacing: "-0.06em"
  statement:
    fontFamily: "{typography.font-display}"
    fontSize: "clamp(30px, 6.7cqw, 96px)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  featured-title:
    fontFamily: "{typography.font-display}"
    fontSize: "clamp(52px, 13.3cqw, 180px)"
    fontWeight: 500
    lineHeight: 0.84
    letterSpacing: "-0.04em"
  h2:
    fontFamily: "{typography.font-display}"
    fontSize: "clamp(30px, 6.4cqw, 86px)"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "-0.045em"
rounded:
  pill: "9999px"
  sm: "2px"
  md: "4px"
  lg: "8px"
components:
  pill-btn:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.pill}"
    padding: "16px 20px"
    hoverBackgroundColor: "{colors.accent}"
    hoverTextColor: "#000000"
  pill-btn-outline:
    backgroundColor: "transparent"
    border: "1px solid {colors.accent}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
  cursor:
    defaultSize: "20px"
    cardHoverSize: "100px"
    cardHoverBackground: "rgba(255, 99, 15, 0.92)"
---

# Editorial Tech: Ashraful Asif Portfolio

## Overview
A confident, high-credibility personal portfolio for Ashraful Asif — Full-Stack Developer, Frontend Engineer, and Coding Instructor.
The design balances the rigor of systems engineering with refined editorial typography and tactile contrast. It deliberately avoids AI-clichés (no default purple glows, no floating blobs, no generic bento grids, no arbitrary percentage bars) in favor of clear product presentation, authentic project case studies, and structured technical transparency.

## Colors
- **Main Background (`#0B0C0F`):** Deep charcoal near-black providing cinematic contrast without harsh pure black.
- **Surface / Card (`#14161D`):** Rich, subtly warm dark surface for cards, code panels, and container blocks.
- **Primary Text (`#F3F1EB`):** Warm white off-white that prevents eye fatigue while providing crisp readability.
- **Secondary Text (`#A0A1A6`):** Balanced gray for paragraphs, meta descriptions, and secondary details.
- **Borders (`#1E2028`):** Sharp, restrained hair-lines that define hierarchy and structure without visual noise.
- **Accent (`#FF630F`):** Warm signal orange used with strict discipline for focal actions, active states, key tags, and subtle emphasis.
- **Glow & Soft Tints (`rgba(255, 99, 15, 0.12)`):** Subtle ambient accents, avoiding excessive glassmorphism.

## Typography
- **Primary Display & Body:** `Inter` (with native system fallbacks), tightly tracked at display scales (`-0.03em`) and generously spaced for body prose.
- **Technical & Meta:** Monospace (`JetBrains Mono`, `monospace`) reserved for stack tags, timelines, metrics, and terminal labels.

## Layout & Spatial System
- **Desktop Grid:** 12-column editorial structure with generous negative space and deliberate asymmetry.
- **Featured Project:** Heroic lead project spotlight (BariVara) with high-fidelity preview, live links, and architectural notes, followed by a structured secondary product index.
- **Responsive Adaptations:** Intentional stacking and reflow across breakpoints (320px, 375px, 560px, 768px, 900px, 1200px, 1440px).

## Components
- **Navbar:** Sticky, compact, translucent dark bar with wordmark, section anchors, and resume download action.
- **Hero:** Asymmetric split: strong headline, concise positioning copy, authentic developer portrait (`/img/asif4.jpg`), and direct CTAs.
- **Project Cards:** Content-first cards featuring real application screenshots, clear domain tags, role disclosures, and dual demo/code links.
- **Skills Architecture:** Categorized grouping (Frontend, Backend, Databases, Mobile, Tooling) with concrete stack descriptions replacing arbitrary percentage meters.
- **Timeline:** Clean chronological experience and education records with verified dates and institutional details.
- **Contact:** Frictionless contact channels featuring verified email (`asrafulmdasif@gmail.com`), LinkedIn, GitHub, and pre-filled email dispatch.

## Do's and Don'ts
- **DO** feature real projects (BariVara, Nexus, Doctein, Culinary Odyssey, Cryzen).
- **DO** use the authentic portraits (`/img/asif4.jpg`, `/img/profile.png`).
- **DO** maintain strict WCAG AA contrast between `#F3F1EB` and `#0B0C0F`.
- **DON'T** use purple, teal gradients, or neon mesh grids.
- **DON'T** invent testimonials, fake follower statistics, or template quotes.
- **DON'T** disclose private personal data (birthdates, exact physical addresses).
