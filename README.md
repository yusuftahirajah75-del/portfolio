# Yusuf Tahir Ajah — Professional Developer Portfolio

> **Production-Ready, Evidence-Driven Developer Portfolio & Engineering Showcase**  
> Built for: **Yusuf Tahir Ajah** — *Junior Full-Stack Developer / Software Engineering Intern*

---

## ⚡ Overview

This repository houses the personal developer portfolio for **Yusuf Tahir Ajah**, an undergraduate Computer Science & IT student at Federal University Dutsin-Ma (Class of 2028) and emerging full-stack software engineer.

Unlike generic student portfolios featuring arbitrary skill percentages and boilerplate templates, this portfolio is built around **verifiable engineering evidence**:
- **Truthful Project Registry**: Every claimed capability is linked directly to inspected Git repositories, live production deployments, and unit/integration test suites.
- **Flagship Deep-Dive (TrustOS Intelligence)**: Complete architectural breakdown with stage-by-stage request flows, PostgreSQL schema migrations, and security engineering.
- **Skill → Evidence Mapping**: Clickable interactive skills that reveal the exact repositories and production services where each technology was written and tested.
- **Collaborative Project Transparency**: Honest separation of individual contributions vs. team responsibilities on collaborative codebases (e.g. NGO Impact Tracker `feature/organization-dashboard`).
- **Engineering Philosophy ("How I Build")**: 8 core working principles detailing root-cause debugging, input validation, and defensive API design.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | React 18 SPA (Modular Component Architecture) |
| **Build Tool** | Vite 5 (Sub-second HMR, optimized production bundle) |
| **Styling** | Vanilla CSS Design System with CSS Custom Properties (Tokens) |
| **Themes** | Persistent Dark Mode (Obsidian/Carbon) & Light Mode (Technical Paper) |
| **Icons** | Lucide React |
| **Typography** | Google Fonts: *Inter* (Headings & Body), *JetBrains Mono* (Code & Specs) |
| **SEO & Access** | Semantic HTML5, WCAG 2.2 AA compliant focus states, OpenGraph & JSON-LD |

---

## 📁 Project Structure

```
My portpolio/
├── index.html                   # Master HTML5 template with SEO meta & JSON-LD
├── vite.config.js               # Vite configuration (Port 3000, build targets)
├── package.json                 # Project dependencies and npm scripts
├── public/
│   ├── favicon.svg              # Custom SVG brand shield icon
│   ├── robots.txt               # Search engine crawler permissions
│   ├── sitemap.xml              # XML Sitemap
│   └── images/
│       ├── trustos-preview.png  # Authentic TrustOS platform UI screenshot
│       └── yusuf-photo.jpg      # Professional portrait of Yusuf
└── src/
    ├── main.jsx                 # Application entry point
    ├── App.jsx                  # Main orchestrator & ThemeContext management
    ├── data/
    │   └── portfolio.js         # Single source of truth (ALL content editable here)
    ├── styles/
    │   ├── variables.css        # Color tokens, dark/light themes, typography scale
    │   ├── base.css             # CSS reset, skip-to-content, base typography
    │   ├── components.css       # Command center, cards, modals, architecture boxes
    │   └── index.css            # Master stylesheet
    └── components/
        ├── Navbar.jsx           # Sticky nav, active section spy, mobile drawer, theme toggle
        ├── Hero.jsx             # Engineering Command Center, status pill, spec console
        ├── RecruiterSnapshot.jsx# 30-second recruiter scannable grid
        ├── About.jsx            # Personal narrative, career goals, authentic photo
        ├── FlagshipCaseStudy.jsx# Deep technical case study on TrustOS Intelligence
        ├── ProjectsExplorer.jsx # Filterable gallery (All, Full-Stack, Backend, Team)
        ├── CaseStudyModal.jsx   # Accessible drawer modal for deep project inspection
        ├── SkillEvidence.jsx    # Interactive skill matrix connected to real code
        ├── EngineeringApproach.jsx # 8 principles of "How I Build"
        ├── Experience.jsx       # Truthfully labeled engineering experience
        ├── Education.jsx        # FUDMA CS & IT, Cohort 8, Coursework timeline
        ├── RecruiterQuickView.jsx # "Why Consider Me?" value propositions
        ├── Contact.jsx          # Direct email copy, verified socials, validated dispatch
        └── Footer.jsx           # Status badge, copyright, smooth back-to-top
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v24+ recommended)
- **npm**: v9.0.0 or higher

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/yusuftahirajah75-del/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 3. Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server at `http://localhost:3000/` |
| `npm run build` | Compiles an optimized production bundle into `dist/` |
| `npm run preview` | Starts a local HTTP server serving the production `dist/` bundle |

---

## ✏️ Customization Guide

All data, text, projects, and links are centralized in a single file:  
`src/data/portfolio.js`

You never need to edit JSX code or CSS to update your personal details!

### Common Customizations:

1. **Add Your Resume URL**:
   In `src/data/portfolio.js`, set:
   ```javascript
   personal: {
     resumeUrl: "https://your-resume-link.pdf", // or "/documents/Yusuf_Resume.pdf"
   }
   ```
   *(Note: If left empty, the resume download button automatically hides or displays "Request via Email", preventing dead links!)*

2. **Update Your Location**:
   ```javascript
   personal: {
     location: "Abuja, Nigeria",
   }
   ```

3. **Update Availability Status**:
   ```javascript
   availability: {
     status: "OPEN_FOR_OPPORTUNITIES",
     label: "Available for Immediate Full-Time or Internship Roles",
     type: "Full-Time / Remote / Hybrid"
   }
   ```

4. **Add a New Project**:
   Add a new object to `projects: [...]` in `src/data/portfolio.js`:
   ```javascript
   {
     id: "my-new-project",
     title: "Project Title",
     tagline: "One line summary",
     role: "Backend Developer",
     status: "COMPLETED", // PLANNED | IN PROGRESS | PROTOTYPE | COMPLETED
     category: "backend", // fullstack | backend | collaborative | security
     repoUrl: "https://github.com/...",
     liveUrl: "https://...",
     technologies: ["Node.js", "Express", "PostgreSQL"],
     summary: "Short description...",
     caseStudy: { ... }
   }
   ```

5. **Replace Portrait or Project Images**:
   - Replace `/public/images/yusuf-photo.jpg` with your newest photo.
   - Replace `/public/images/trustos-preview.png` with new screenshots.

---

## 🌐 Production Deployment

This project builds to standard static HTML/CSS/JS in `dist/` and can be deployed with zero configuration to any modern hosting provider:

### Deploying to Render
1. Push this repository to GitHub.
2. In Render Dashboard, click **New +** → **Static Site**.
3. Connect your repository.
4. Set **Build Command**: `npm run build`
5. Set **Publish Directory**: `dist`
6. Click **Create Static Site**.

### Deploying to Vercel
```bash
npm install -g vercel
vercel
```

### Deploying to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 🛡️ Anti-Fabrication & Truthful Positioning Declaration

This portfolio strictly adheres to engineering honesty:
- **Zero Fabricated Job Titles**: Experience entries are labeled accurately as *Personal SaaS Initiatives*, *Capstone Collaborations*, and *Student Engineering*.
- **Zero Fabricated Metrics**: No arbitrary percentage bars (e.g. "React 95%"). Skills are tied directly to verified source code.
- **Transparent Collaborative Boundaries**: On team codebases (`IMPACT_TRACKER_`), Yusuf's exact Git branch (`feature/organization-dashboard`) and specific PR responsibilities are explicitly separated from team-wide work.

---

## 📬 Contact & Connect

- **Email**: [yusuftahirajah75@gmail.com](mailto:yusuftahirajah75@gmail.com)
- **GitHub**: [github.com/yusuftahirajah75-del](https://github.com/yusuftahirajah75-del)
- **LinkedIn**: [linkedin.com/in/tahir-yusuf-817012331](https://ng.linkedin.com/in/tahir-yusuf-817012331)
- **Current Institution**: Federal University Dutsin-Ma (B.Sc. Computer Science & IT, Expected 2028)
