# IndicBiz

> **Digital clarity for ambitious businesses.**

IndicBiz is a modern, high-performance creative and digital agency website built with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, **GSAP**, and **Lenis**.

We bring together **strategy, branding, creative design, engineering, and digital growth** to turn business ideas into clear, compelling, and scalable digital experiences.

---

## 📋 Table of Contents

- [About IndicBiz](#-about-indicbiz)
- [Capabilities & Disciplines](#-capabilities--disciplines)
- [Our Process](#-our-process)
- [Tech Stack](#-tech-stack)
- [System Requirements](#-system-requirements)
- [Getting Started](#-getting-started)
- [Project Architecture](#-project-architecture)
- [Environment Variables](#-environment-variables)
- [Adding Portfolio Work](#-adding-portfolio-work)
- [Services & Reviews Integration](#-services--reviews-integration)
- [Deployment](#-deployment)
- [Workflow & Contributions](#-workflow--contributions)

---

## 🌟 About IndicBiz

At IndicBiz, we believe design is more than aesthetics—it connects creativity with measurable business outcomes (visibility, credibility, engagement, and conversion).

### Core Philosophy

**Clarity creates confidence.**
A strong brand makes it effortless for audiences to understand who you are, what you offer, and why they should choose you:
- **Clarity in strategy**
- **Clarity in design**
- **Clarity in digital experiences**

---

## 🚀 Capabilities & Disciplines

### 1. Brand Strategy & Identity
- Brand strategy & positioning
- Logo design & motion marks
- Visual identity systems & brand guidelines
- Corporate identity & marketing collateral

### 2. Creative & Design
- Campaign & promotional design
- Social media creatives & advertising assets
- Presentation & pitch decks
- Art & creative direction

### 3. Websites & Digital Experiences
- Corporate & marketing websites
- High-performance web applications & landing pages
- UI/UX design systems & interactive prototypes
- Responsive, accessible, and SEO-optimized frontend development

### 4. Digital Growth
- Search engine optimization (SEO)
- Content strategy & digital marketing
- Lead-generation workflows & conversion rate optimization (CRO)
- Ongoing performance analytics & optimization

---

## 🔄 Our Process

```
1. Understand  ──►  2. Define  ──►  3. Create  ──►  4. Build  ──►  5. Grow
(Audience/Market)   (Strategy/Plan)   (Design/Brand)    (Engineering)    (Optimization)
```

1. **Understand**: Research business objectives, target market, and audience needs.
2. **Define**: Establish positioning, messaging hierarchy, and technical architecture.
3. **Create**: Craft thoughtful brand assets, user interfaces, and design systems.
4. **Build**: Engineer fast, accessible, and resilient digital solutions.
5. **Grow**: Analyze, refine, and optimize post-launch for sustained momentum.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with CSS Tokens & CSS Modules
- **Motion & Interaction**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/), and [Lenis Smooth Scroll](https://github.com/darkroomengineering/lenis)
- **Visuals & 3D**: [Three.js](https://threejs.org/), [OGL](https://github.com/oframe/ogl), and [Rive](https://rive.app/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Satoshi (Fontshare)](https://www.fontshare.com/fonts/satoshi), Plus Jakarta Sans, Inter, JetBrains Mono

---

## 💻 System Requirements

- **Node.js**: `22.16.0` or newer
- **npm**: `10.9.0` or newer

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/IndicBizProjects/IndicBiz-react.git
cd IndicBiz-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example environment file and add your credentials:

```bash
cp .env.example .env.local
```

### 4. Start development server

```bash
npm run dev
```

### 5. Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with HMR |
| `npm run build` | Bundles the application for production in `dist/` |
| `npm run lint` | Runs ESLint to check for code quality and hook compliance |
| `npm run preview` | Locally preview the production build |
| `npm run validate` | Runs linting and production build verification (`npm run lint && npm run build`) |

---

## 🏗️ Project Architecture

The project enforces a modular structure where UI components do not store raw marketing copy, options, or data sets:

```text
src/
├── app/          # App shell, custom SPA router, layout (Navbar/Footer), scroll coordinator
├── assets/       # Static media, project thumbnails, branding imagery
├── components/   # Presentation primitives (MagneticBtn, BrandMark, SocialIcon), layout, motion
├── data/         # Single source of truth for site content & SEO (services, work, about, team, seo)
├── features/     # Feature-specific page composers (home, services, work, contact, about, pricing)
├── hooks/        # Stateful hooks (e.g. useProjectForm)
├── lib/          # Motion presets, spring physics, and Lenis scroll controllers
├── pages/        # Lightweight route wrapper components
├── services/     # External API clients (contact form webhook, Google Sheets reviews, geo-IP)
└── styles/       # Design tokens (tokens.css), base rules, glassmorphism, 3D buttons
```

---

## 🔐 Environment Variables

Define the following environment variables in `.env.local`:

```env
# Contact Form Endpoint (Google Apps Script Web App URL)
VITE_CONTACT_API_URL=https://script.google.com/macros/s/.../exec

# Customer Reviews Google Sheet Configuration
VITE_REVIEWS_SHEET_ID=your_google_sheet_id
VITE_REVIEWS_SHEET_NAME=Form Responses 1
VITE_REVIEWS_FEED_URL=
VITE_REVIEWS_CSV_URL=

# Geolocation API (Abstract IP API Key for visitor location enrichment)
VITE_ABSTRACT_IP_API_KEY=your_abstract_api_key
```

---

## 📁 Adding Portfolio Work

Portfolio projects are managed declaratively in [`src/data/work.js`](src/data/work.js):

1. Add your project preview image to `src/assets/Projects/` or `public/work/` (16:9 ratio in WebP or AVIF preferred).
2. Add a new object to the `WORK_PROJECTS` array in [`src/data/work.js`](src/data/work.js):

```javascript
{
  id: 'your-project-slug',
  number: '04',
  title: 'Project Name',
  category: 'Web experiences',
  serviceId: 'web-experiences',
  summary: 'Brief overview of the project and engagement.',
  challenge: 'The core challenge faced by the client.',
  approach: 'Strategic approach and execution details.',
  outcome: 'Key business outcomes and results.',
  focus: ['Strategy', 'UI/UX Design', 'Full-Stack Development'],
  highlights: [
    'Key accomplishment 1',
    'Key accomplishment 2',
  ],
  image: projectPreviewImage,
  gallery: [projectPreviewImage, '/work/detail-1.png'],
  imageAlt: 'Project preview screenshot',
  websiteUrl: 'https://example.com/',
  accent: '#86b99d',
}
```

---

## 📡 Services & Backend Integration

### Contact Form & Lead Capture
- Managed via [`src/hooks/useProjectForm.js`](src/hooks/useProjectForm.js) and [`src/services/contactService.js`](src/services/contactService.js).
- Submissions are enriched with visitor geolocation data via Abstract IP API ([`src/services/visitorLocation.js`](src/services/visitorLocation.js)) and submitted to Google Apps Script ([`scripts/google-contact-setup.gs`](scripts/google-contact-setup.gs)).
- Includes an automatic prefilled `mailto:` client fallback if the endpoint is unreachable.

### Live Customer Reviews
- Managed via [`src/services/reviewsService.js`](src/services/reviewsService.js).
- Fetches and parses published client ratings directly from Google Sheets (CSV/JSON feed), calculating multidimensional scores (Design, Communication, Speed, Value).

---

## 🚀 Deployment

The project is pre-configured for **Vercel** with SPA routing support via [`vercel.json`](vercel.json):

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

To deploy via Vercel CLI:
```bash
npm install -g vercel
vercel
```

---

## 🌿 Workflow & Release Process

1. Create a feature branch from `stage`:
   ```bash
   git checkout stage
   git checkout -b feature/your-feature-name
   ```
2. Validate code quality and build integrity:
   ```bash
   npm run validate
   ```
3. Open a Pull Request into `stage`. Once reviewed and verified, promote to `main`.

---

## 🌐 Connect with IndicBiz

- **Website**: [indicbiz.com](https://indicbiz.com/)
- **Email**: [info@indicbiz.com](mailto:info@indicbiz.com)
- **LinkedIn**: [linkedin.com/company/indicbiz](https://www.linkedin.com/company/indicbiz/)
- **Instagram**: [@indicbiz](https://www.instagram.com/indicbiz)
- **X / Twitter**: [@IndicBiz](https://x.com/IndicBiz)

---

&copy; IndicBiz. All rights reserved.
