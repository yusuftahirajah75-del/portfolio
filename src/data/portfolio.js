/**
 * ============================================================================
 * YUSUF TAHIR AJAH — PORTFOLIO DATA ARCHITECTURE
 * 100% Repository-Verified Single Source of Truth
 * 
 * Rules:
 * - Zero fabricated metrics, titles, or fake percentages.
 * - Every project entry corresponds directly to inspected code on disk.
 * - Only verified GitHub repositories and live links are included.
 * ============================================================================
 */

export const portfolioData = {
  // --------------------------------------------------------------------------
  // 1. Identity & Brand Positioning
  // --------------------------------------------------------------------------
  personal: {
    name: "Yusuf Tahir Ajah",
    title: "Junior Full-Stack Developer",
    targetRole: "Junior Full-Stack Developer / Software Engineering Intern",
    location: "Nigeria (Open to Remote, Hybrid & Relocation)",
    email: "yusuftahirajah75@gmail.com",
    githubUrl: "https://github.com/yusuftahirajah75-del",
    linkedinUrl: "https://ng.linkedin.com/in/tahir-yusuf-817012331",
    resumeUrl: "/documents/Yusuf_Tahir_Ajah_Resume.pdf", // Verified resume from C:\aaa
    avatarUrl: "/images/ajah.png", // Verified portrait from C:\aaa\ajah.png
    hasPhoto: true,

    // Core positioning statement
    positioningStatement:
      "I build practical web applications, backend APIs, and database-driven systems with a disciplined focus on reliable architecture, input validation, defensive security, and continuous engineering improvement.",
    
    // Availability banner
    availability: {
      status: "OPEN_FOR_OPPORTUNITIES",
      label: "Open to Junior Full-Stack Developer & Software Engineering Internship Opportunities",
      type: "Full-Time / Internship / Remote or Hybrid"
    }
  },

  // --------------------------------------------------------------------------
  // 2. Recruiter Quick Snapshot (30-second scan)
  // --------------------------------------------------------------------------
  recruiterSnapshot: {
    currently: "Computer Science & IT Student (FUDMA)",
    focus: "Full-Stack Web Development & Backend Engineering",
    primaryStack: "React + Node.js + Express + PostgreSQL",
    seeking: "Junior Developer / Software Engineering Internship",
    flagshipWork: "TrustOS Intelligence & PayRescue NG",
    secondaryDirection: "Application Security & Payment Reconciliation"
  },

  // --------------------------------------------------------------------------
  // 3. About & Engineering Story
  // --------------------------------------------------------------------------
  about: {
    summary: [
      "I am an emerging full-stack software developer currently studying Computer Science & IT at Federal University Dutsin-Ma (Class of 2028). My work centers on writing clean, well-tested TypeScript/JavaScript backend services, designing normalized relational databases with PostgreSQL, and building responsive, user-friendly React interfaces.",
      "Rather than pursuing superficial full-stack demos, I focus on the critical details of software reliability: schema design, authentication flows, error boundaries, rate limiting, and debugging root causes. In collaborative team codebases like the NGO Impact Tracker, I have worked on git feature branches, contributed to organization opportunity lifecycles, and built secure APIs against MongoDB.",
      "I maintain an active technical interest in application security and cybersecurity fundamentals, applying principles of defense-in-depth, input sanitization, and cryptographic time-series audit ledgers to platforms like TrustOS Intelligence, PayRescue NG, and TrustShield."
    ],
    currentLearning: "Advanced PostgreSQL indexing, database connection pooling, distributed caching with Redis, and containerization with Docker.",
    careerGoal: "To join a high-standard engineering team where I can contribute to production web systems, learn from experienced senior engineers, and build software that provides real utility."
  },

  // --------------------------------------------------------------------------
  // 4. Engineering Philosophy ("How I Build")
  // --------------------------------------------------------------------------
  engineeringPhilosophy: [
    {
      id: "ep-1",
      number: "01",
      title: "Understand Before Coding",
      description: "Map out domain entities, API contracts, and data flows on paper or architecture diagrams before generating boilerplate."
    },
    {
      id: "ep-2",
      number: "02",
      title: "Inspect Existing Code First",
      description: "When contributing to existing repositories, study conventions, existing middlewares, and models to integrate seamlessly without regressions."
    },
    {
      id: "ep-3",
      number: "03",
      title: "Validate at Every Boundary",
      description: "Never trust incoming HTTP request payloads. Enforce strict schemas using Zod or Joi to prevent malformed or malicious inputs."
    },
    {
      id: "ep-4",
      number: "04",
      title: "Protect Authenticated Resources",
      description: "Hash passwords with bcrypt, sign verifiable JWT tokens, set secure HTTP-only cookies, and enforce ownership checks on all mutating operations."
    },
    {
      id: "ep-5",
      number: "05",
      title: "Handle Errors Intentionally",
      description: "Avoid generic empty catch blocks. Log meaningful error contexts with structured logging tools (Pino/Winston) and return clean HTTP responses."
    },
    {
      id: "ep-6",
      number: "06",
      title: "Debug Root Causes",
      description: "Trace errors through stack traces, database logs, and network inspectors instead of applying quick surface patches."
    },
    {
      id: "ep-7",
      number: "07",
      title: "Test Important Workflows",
      description: "Write unit and integration tests (using Jest, Supertest, and Node test runners) for authentication, cryptographic utilities, and risk assessment logic."
    },
    {
      id: "ep-8",
      number: "08",
      title: "Use Git Responsibly",
      description: "Work on descriptive feature branches, write atomic commit messages, resolve merge conflicts cleanly, and isolate PR deliverables."
    }
  ],

  // --------------------------------------------------------------------------
  // 5. Technical Stack & Skill-to-Evidence Mapping
  // --------------------------------------------------------------------------
  skillCategories: [
    {
      category: "Frontend Engineering",
      skills: [
        { name: "React (v18 & v19)", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos", "trustshield", "impact-tracker", "pern-auth", "school-mgmt"] },
        { name: "JavaScript (ES6+) & TypeScript", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos", "trustshield", "impact-tracker", "pern-auth"] },
        { name: "Responsive UI & Vanilla CSS", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos", "trustshield", "pern-auth"] },
        { name: "React Router & Hooks", usedIn: ["trustos", "payrescue", "trustshield", "school-mgmt", "pern-auth"] },
        { name: "Vite", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos", "trustshield", "school-mgmt"] },
        { name: "React Hook Form & Zod Resolvers", usedIn: ["payrescue", "trustshield", "school-mgmt"] }
      ]
    },
    {
      category: "Backend Engineering",
      skills: [
        { name: "Node.js", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos", "trustshield", "impact-tracker", "pern-auth", "agriverify", "school-mgmt"] },
        { name: "Express.js (v4 & v5)", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos", "trustshield", "impact-tracker", "pern-auth", "agriverify", "school-mgmt"] },
        { name: "REST API Architecture", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos", "trustshield", "impact-tracker", "agriverify"] },
        { name: "Middleware & RBAC Access", usedIn: ["trustos", "payrescue", "trustshield", "school-mgmt", "impact-tracker"] },
        { name: "Prisma ORM & Raw SQL", usedIn: ["payrescue", "trustos", "mvplaunch", "opportunityos"] }
      ]
    },
    {
      category: "Database & Storage",
      skills: [
        { name: "PostgreSQL", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos", "trustshield", "pern-auth", "agriverify", "school-mgmt"] },
        { name: "Database Migrations & Seeds", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos", "trustshield", "school-mgmt"] },
        { name: "MongoDB & Mongoose", usedIn: ["impact-tracker"] },
        { name: "Relational Schema Normalization", usedIn: ["trustos", "payrescue", "mvplaunch", "agriverify"] }
      ]
    },
    {
      category: "Security & Validation",
      skills: [
        { name: "JWT Authentication & HTTP-Only Cookies", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos", "trustshield", "impact-tracker", "pern-auth"] },
        { name: "Password Hashing (bcrypt / bcryptjs)", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos", "trustshield", "impact-tracker", "pern-auth"] },
        { name: "Zod Schema Validation", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos", "trustshield", "school-mgmt"] },
        { name: "Rate Limiting & Helmet Security", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos", "trustshield", "school-mgmt"] },
        { name: "SHA-256 Cryptographic Hashes", usedIn: ["trustos", "payrescue", "agriverify"] }
      ]
    },
    {
      category: "DevOps & Tooling",
      skills: [
        { name: "Git & GitHub (Branches, PRs, Remotes)", usedIn: ["trustos", "payrescue", "mvplaunch", "trustshield", "impact-tracker", "pern-auth"] },
        { name: "Docker & Containerization", usedIn: ["payrescue"] },
        { name: "Deployment (Render & Vercel)", usedIn: ["trustos", "payrescue", "trustshield"] },
        { name: "Jest & Supertest Testing", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos"] },
        { name: "Postman & Swagger/OpenAPI", usedIn: ["trustos", "payrescue", "mvplaunch", "opportunityos"] }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 6. Verified Project Registry
  // Standard: Value Prop -> Problem -> Solution -> My Contribution ->
  // Key Features -> Tech Stack -> Status -> GitHub/Live Demo -> Technical Highlights
  // --------------------------------------------------------------------------
  projects: [
    // ------------------------------------------------------------------------
    // Project 1: TrustOS Intelligence (Flagship)
    // ------------------------------------------------------------------------
    {
      id: "trustos",
      title: "TrustOS Intelligence",
      tagline: "Africa-First Digital Trust & Scam Intelligence SaaS Platform",
      role: "Founder & Full-Stack Developer",
      status: "COMPLETED",
      featured: true,
      category: "fullstack",
      repoUrl: "https://github.com/yusuftahirajah75-del/TrustOS.git",
      liveUrl: "https://trustos-frontend.onrender.com/",
      backendLiveUrl: "https://trustos-api-mr5k.onrender.com",
      image: "/images/trustos-preview.png",
      summary:
        "An enterprise-ready digital trust infrastructure and developer API designed to help businesses, digital banks, and web platforms verify URLs, domains, emails, phone numbers, and payment links against real-time emerging market scam intelligence.",
      
      technologies: [
        "React 18",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Zod",
        "JWT",
        "bcryptjs",
        "Helmet",
        "Jest",
        "Supertest",
        "Render"
      ],

      keyFeatures: [
        "Multi-Signal Trust Engine evaluating URLs, domains, emails, and phone numbers",
        "Regional Scam Signature Database tailored to African digital commerce vectors",
        "Developer API with API Key issuance and granular permission scopes",
        "Interactive React Dashboard featuring scan feeds, threat alerts, and analytics",
        "PostgreSQL database with 6 automated migrations and transactional execution"
      ],

      caseStudy: {
        problem:
          "Emerging market consumers and digital platforms face rampant online fraud—such as phishing domains, cloned merchant portals, and fraudulent mobile payment links—while standard global threat databases lack localized signals for African digital commerce.",
        whyItMatters:
          "Without localized scam intelligence, online shoppers lose funds and legitimate emerging e-commerce platforms struggle with low digital trust. Platforms need an API to answer in real-time: 'Can I trust this digital entity?'",
        solution:
          "TrustOS evaluates digital entities through a multi-signal risk analysis engine. It calculates composite confidence scores (0-100), identifies scam campaigns, generates threat alerts, and exposes programmatic REST endpoints for developers.",
        
        architecture: {
          flow: [
            { step: "01", name: "Client & Developer API", desc: "React SPA dashboard and authenticated REST clients transmitting verification queries." },
            { step: "02", name: "Security & API Gateway", desc: "Express server enforcing Helmet headers, IP rate limiting, JWT session validation, and API key authentication." },
            { step: "03", name: "Trust Intelligence Engine", desc: "Multi-signal scoring analyzer modules: URL lexical analysis, email SPF/domain checks, phone risk heuristics, and regional scam signature pattern matching." },
            { step: "04", name: "PostgreSQL Database", desc: "Normalized relational schema (users, organizations, entities, checks, threat_reports, audit_logs) with versioned migrations." }
          ]
        },

        myContribution: [
          "Architected and implemented the entire Node.js/Express backend and modular scoring engine (urlAnalyzer, emailAnalyzer, phoneAnalyzer, riskScorer).",
          "Engineered the PostgreSQL database schema across 6 migration files, including organizations, entities, trust checks, threat reports, and API keys.",
          "Implemented robust security controls: Helmet headers, express-rate-limit, bcrypt password hashing, JWT authentication, and Zod request payload validation.",
          "Built and integrated the responsive React frontend with interactive scanning forms, risk breakdown charts, threat campaign feeds, and guest demo sessions.",
          "Wrote automated unit and integration tests using Jest and Supertest across crypto utilities and analyzer modules.",
          "Configured deployment infrastructure with render.yaml for both the Express API and Vite React frontend."
        ],

        engineeringChallenges: [
          {
            challenge: "Legacy schema collision during early migration rollouts on hosted PostgreSQL.",
            solution: "Authored a clean reset script (migrate.js) enforcing transactional DDL execution and migration tracking to guarantee repeatable builds from migration 001 to 006."
          },
          {
            challenge: "401 interceptor loop in the frontend when guest users accessed public scan capabilities.",
            solution: "Refactored Axios interceptors to differentiate between authenticated developer sessions and guest scans, adding ErrorBoundaries and anti-cache headers."
          }
        ],

        testingEvidence: [
          "Unit tests: tests/unit/cryptoUtils.test.js, emailAnalyzer.test.js, phoneAnalyzer.test.js, riskScorer.test.js.",
          "Integration tests: tests/integration/trustCheck.test.js, authAndIsolation.test.js verifying tenant data isolation."
        ],

        implementedVsPlanned: {
          implemented: [
            "Real-time URL, email, and phone scam verification API",
            "Multi-signal risk scoring algorithm (0-100 score + risk level)",
            "JWT user authentication and organization API key issuance",
            "PostgreSQL migrations (001-006) and seed data for regional scams",
            "Interactive React dashboard with live scan results and threat feeds",
            "Rate limiting and input validation with Zod"
          ],
          planned: [
            "Automated WHOIS domain age lookup worker via Redis task queue",
            "Community scam reporting submission flow with moderation queue",
            "Webhook notifications for enterprise monitoring of watched domains"
          ]
        }
      }
    },

    // ------------------------------------------------------------------------
    // Project 2: PayRescue NG
    // ------------------------------------------------------------------------
    {
      id: "payrescue",
      title: "PayRescue NG",
      tagline: "Digital Transaction Recovery & Payment Reconciliation Infrastructure",
      role: "Full-Stack Engineer & Creator",
      status: "COMPLETED",
      featured: true,
      category: "fullstack",
      repoUrl: "https://github.com/yusuftahirajah75-del/payrescue-ng.git",
      liveUrl: "",
      image: "",
      summary:
        "A production-grade digital transaction recovery, cryptographic evidence vault, payment reconciliation, and dispute management platform engineered for Nigerian commercial banks, PSPs, Telcos, and payment gateways.",
      
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "Express.js",
        "Prisma ORM",
        "PostgreSQL",
        "Docker",
        "Zod",
        "Jest",
        "Pino Logging",
        "Swagger"
      ],

      keyFeatures: [
        "One Transaction → One Rescue Case engine with regulatory SLA countdowns",
        "Cryptographic Evidence Vault with SHA-256 file hashing to guarantee non-repudiation",
        "Automated Dispute Rules-Based Classification (Debited Not Credited, Failed Service, Duplicate)",
        "Nigerian Provider Directory & Adapters generating CBN/NCC compliant formal complaint packages",
        "Multi-Tenant Payment Reconciliation matching customer claims against settlement CSV feeds"
      ],

      caseStudy: {
        problem:
          "In Nigeria's financial ecosystem, millions of electronic transactions fail every month (debited without value delivered). Consumers and merchants endure endless circular blame between issuer banks, acquiring gateways, and service providers with zero unified evidence.",
        whyItMatters:
          "Without structured cryptographic proof of transaction failure, consumers wait weeks for refunds while businesses absorb chargebacks and reconciliation losses.",
        solution:
          "PayRescue creates an immutable, SHA-256 hashed audit trail for failed payments, maps provider dispute endpoints, tracks regulatory resolution timelines, and automates CSV batch reconciliation.",

        myContribution: [
          "Built the TypeScript/Express backend adhering to strict Prisma data models and PostgreSQL schemas.",
          "Implemented the Cryptographic Evidence Vault with SHA-256 file hashing, MIME validation, and secure Multer uploads.",
          "Engineered CSV parse adapters for automated reconciliation matching bank settlement feeds against user dispute claims.",
          "Created Docker and docker-compose configurations for repeatable containerized local development.",
          "Developed React frontend with React Query, React Hook Form, and Zod validation schemas for dispute submissions."
        ],

        engineeringChallenges: [
          {
            challenge: "Preventing counterfeit proof-of-payment receipts from contaminating dispute evidence.",
            solution: "Enforced server-side SHA-256 checksum generation, MIME-type sniffing, and strict payload schemas before saving file metadata to PostgreSQL."
          }
        ]
      }
    },

    // ------------------------------------------------------------------------
    // Project 3: MVPLaunch NG
    // ------------------------------------------------------------------------
    {
      id: "mvplaunch",
      title: "MVPLaunch NG",
      tagline: "Vetted Developer & Founder MVP Launch Platform for Emerging Markets",
      role: "Full-Stack Developer",
      status: "COMPLETED",
      featured: true,
      category: "fullstack",
      repoUrl: "https://github.com/yusuftahirajah75-del/MVPLaunch-NG-.git",
      liveUrl: "",
      image: "",
      summary:
        "A Nigerian MVP Launch Platform connecting students, aspiring founders, and small businesses with vetted developers to turn validated ideas into production-ready web MVPs in 2–4 weeks.",
      
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Raw SQL (pg)",
        "Paystack Webhooks",
        "Zod",
        "JWT",
        "Helmet",
        "Jest"
      ],

      keyFeatures: [
        "Controller-Service-Repository modular monolith with zero ORM overhead",
        "Normalized PostgreSQL schema with UUID keys, foreign key constraints, and updated_at triggers",
        "Dual-mode JWT authentication (HTTP-only secure cookies + Bearer tokens for API clients)",
        "HMAC SHA-512 cryptographic verification for Paystack webhooks with Kobo precision",
        "Comprehensive OpenAPI/Swagger documentation and automated Jest test suites"
      ],

      caseStudy: {
        problem:
          "Early-stage builders in Nigeria frequently face abandoned projects, misaligned technical scopes, and unvetted developers who deliver non-functional prototypes.",
        whyItMatters:
          "Founders waste limited capital on unverified developers, while competent young developers struggle to find structured, milestone-backed clients.",
        solution:
          "MVPLaunch NG enforces milestone-driven delivery, structured requirements definitions, Paystack payment processing, and transparent developer verification.",

        myContribution: [
          "Architected the entire Express backend utilizing raw parameterized SQL via pg connection pools for maximum execution speed.",
          "Implemented HMAC SHA-512 Paystack webhook listener ensuring zero double-crediting on milestone payments.",
          "Built full Zod validation pipelines across request parameters, query strings, and body payloads.",
          "Crafted responsive React frontend interfaces for project discovery, builder proposals, and milestone tracking."
        ],

        engineeringChallenges: [
          {
            challenge: "Handling concurrent webhook callbacks from Paystack without race conditions.",
            solution: "Used PostgreSQL row-level locking (`SELECT ... FOR UPDATE`) during transaction verification to guarantee idempotent state updates."
          }
        ]
      }
    },

    // ------------------------------------------------------------------------
    // Project 4: OpportunityOS
    // ------------------------------------------------------------------------
    {
      id: "opportunityos",
      title: "OpportunityOS",
      tagline: "Opportunity-to-Application Readiness SaaS Platform",
      role: "Full-Stack Developer",
      status: "COMPLETED",
      featured: true,
      category: "fullstack",
      repoUrl: "https://github.com/yusuftahirajah75-del",
      liveUrl: "",
      image: "",
      summary:
        "An opportunity-to-application infrastructure SaaS transforming passive discovery of scholarships, fellowships, grants, and internships into a disciplined 6-stage preparation lifecycle: Discover → Match → Prepare → Apply → Track → Learn.",
      
      technologies: [
        "React",
        "Node.js (v24)",
        "Express.js 5",
        "PostgreSQL",
        "Zod",
        "JWT",
        "Multer",
        "Swagger",
        "Jest"
      ],

      keyFeatures: [
        "Strict Information Integrity separating Verified Official Facts from AI Analysis and User Drafts",
        "Preparation Readiness Scoring measuring requirement completeness rather than false selection probabilities",
        "Normalized PostgreSQL schema with automated migration runners and seed files",
        "Document & Draft Management with secure server-side file handling and MIME validation",
        "End-to-end integration test suites (test-e2e.js and test-admin-campaign.js)"
      ],

      caseStudy: {
        problem:
          "Students and graduates miss out on high-impact fellowships, scholarships, and startup grants because existing aggregators only list links without helping applicants track eligibility criteria, draft essays, or meet deadlines.",
        whyItMatters:
          "Submitting an incomplete or unvetted application leads to instant disqualification, wasting dozens of hours of applicant effort.",
        solution:
          "OpportunityOS breaks each opportunity into an actionable preparation checklist, verifies criteria from official primary sources, and tracks applicant progress from initial discovery to final submission.",

        myContribution: [
          "Developed Express 5 backend with comprehensive migration scripts (`src/db/migrate.js`).",
          "Engineered multi-stage application state lifecycle enforcing task checklist verification.",
          "Built automated end-to-end testing scripts (`test-e2e.js`) validating opportunity matching and application submission workflows.",
          "Developed the responsive React frontend dashboard for applicant tracking and checklist completion."
        ],

        engineeringChallenges: [
          {
            challenge: "Preventing ambiguous AI-generated recommendations from being confused with official host criteria.",
            solution: "Designed strict metadata tags in the PostgreSQL schema categorizing all data into VERIFIED_FACT, OFFICIAL_SOURCE, or AI_ASSISTED."
          }
        ]
      }
    },

    // ------------------------------------------------------------------------
    // Project 5: TrustShield System
    // ------------------------------------------------------------------------
    {
      id: "trustshield",
      title: "TrustShield System",
      tagline: "Foundational Digital Risk Scoring & Merchant Security Verification Engine",
      role: "Full-Stack Developer",
      status: "COMPLETED",
      featured: true,
      category: "security",
      repoUrl: "https://github.com/yusuftahirajah75-del/Trustshield-System.git",
      liveUrl: "",
      image: "",
      summary:
        "A full-stack risk scoring and security verification platform featuring modular controllers for merchant risk analysis, threat reports, developer API access, and billing management.",
      
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Zod",
        "JWT",
        "Helmet",
        "Tailwind CSS",
        "React Hook Form"
      ],

      keyFeatures: [
        "Modular risk scoring controllers (analysis, threat reports, developer API keys, billing)",
        "PostgreSQL database with automated database migration runner (`migrate.js`)",
        "Native Node test runner integration (`node --test test/*.test.js`)",
        "React frontend with typed form validation (React Hook Form + Zod)",
        "Vercel deployment readiness configuration"
      ],

      caseStudy: {
        problem:
          "Small businesses and consumers lack accessible tools to verify online merchant legitimacy and report fraudulent digital entities before financial exposure occurs.",
        whyItMatters:
          "Centralized, verified reporting channels allow digital communities to aggregate scam indicators and prevent widespread fraud.",
        solution:
          "A full-stack architecture exposing risk analysis endpoints, developer API tokens, community threat submissions, and real-time merchant security ratings.",

        myContribution: [
          "Engineered backend routes and controllers: `analysisRoutes.js`, `reportRoutes.js`, `developerRoutes.js`, `billingRoutes.js`.",
          "Configured PostgreSQL database schemas and automated table migration scripts.",
          "Built React client forms for threat reporting and API key management with Zod validation."
        ]
      }
    },

    // ------------------------------------------------------------------------
    // Project 6: Volunteer & NGO Impact Tracker
    // ------------------------------------------------------------------------
    {
      id: "impact-tracker",
      title: "Volunteer & NGO Impact Tracker",
      tagline: "Collaborative Platform for Community Volunteer Opportunities & Impact Analytics",
      role: "Backend Developer (Collaborative Capstone Team)",
      status: "IN PROGRESS",
      featured: false,
      category: "collaborative",
      repoUrl: "https://github.com/ChiomyCodes/IMPACT_TRACKER_.git",
      liveUrl: "",
      image: "",
      summary:
        "A collaborative team backend built to connect non-governmental organizations with passionate volunteers, providing structured opportunity workflows and impact measurement.",
      
      technologies: [
        "Node.js",
        "Express.js 5",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Cloudinary",
        "Multer",
        "Git (Feature Branches)"
      ],

      keyFeatures: [
        "Multi-stage opportunity lifecycle: draft → published → active → completed",
        "Organization ownership authorization checks preventing unauthorized modifications",
        "Dashboard aggregation endpoints compiling volunteer hours and application metrics",
        "Cloudinary integration for organization and volunteer profile verification"
      ],

      caseStudy: {
        problem:
          "NGOs struggle with fragmented processes for creating, managing, and tracking volunteer opportunities, leading to poor communication and unverified impact records.",
        whyItMatters:
          "Structured opportunity lifecycles ensure organizations only show active openings to volunteers and accurately measure hours and outcomes upon completion.",
        solution:
          "A modular REST API providing role-based organization management, multi-stage opportunity publication workflows, and applicant tracking.",

        myContribution: [
          "Worked on git branch: `feature/organization-dashboard` (Commit `c1ca873 feat: implement organization opportunity lifecycle and approval`).",
          "Implemented organization opportunity state transitions: `draft` → `published` → `active` → `completed` / `closed`.",
          "Engineered organization ownership verification middleware ensuring organizations can only modify their own opportunities.",
          "Built organization dashboard endpoints aggregating opportunity status metrics, applicant counts, and volunteer participation.",
          "Collaborated via Git pull requests with team members adhering to repository conventions and Express 5 async handlers."
        ],

        teamVsIndividual: {
          myResponsibility: "Organization-side opportunity lifecycle, ownership validation, organization controller endpoints, and dashboard aggregation logic.",
          teamResponsibility: "Volunteer user registration, profile file uploads via Cloudinary, email notifications, and frontend UI."
        }
      }
    },

    // ------------------------------------------------------------------------
    // Project 7: PERN Authentication System
    // ------------------------------------------------------------------------
    {
      id: "pern-auth",
      title: "PERN Authentication System",
      tagline: "Production-Oriented Authentication & Session Management Reference Architecture",
      role: "Full-Stack Developer",
      status: "COMPLETED",
      featured: false,
      category: "security",
      repoUrl: "https://github.com/yusuftahirajah75-del/PERN-Authentication-system.git",
      liveUrl: "",
      image: "",
      summary:
        "A secure full-stack authentication system built with PostgreSQL, Express.js, React, and Node.js featuring salted password hashing, JWT verification, and protected client routes.",
      
      technologies: [
        "React",
        "Node.js",
        "Express.js 5",
        "PostgreSQL",
        "bcryptjs",
        "jsonwebtoken",
        "cookie-parser",
        "Vite"
      ],

      keyFeatures: [
        "Salted password hashing with bcryptjs (10 salt rounds)",
        "HTTP-Only, SameSite secure cookie JWT storage resisting XSS token theft",
        "Declarative `<ProtectedRoute />` wrapper components in React Router",
        "Centralized AuthContext managing reactive login/logout states",
        "Parameterized SQL queries preventing SQL injection vulnerabilities"
      ],

      caseStudy: {
        problem:
          "Many early-career developer portfolios use insecure client-only authentication or store raw JWT tokens in browser localStorage, making them vulnerable to XSS attacks.",
        whyItMatters:
          "Authentication is the primary perimeter of any web application; implementing secure cookie handling and server-side validation is foundational engineering.",
        solution:
          "A complete reference implementation separating token issuance from client consumption, featuring HTTP-only cookies, password hashing with salt rounds, and declarative route guards in React.",
        
        myContribution: [
          "Developed backend `auth.js` routes for user registration, login, logout, and `/me` verification.",
          "Configured PostgreSQL user table with unique email constraints and timestamped audit fields.",
          "Built frontend `AuthContext` and `<ProtectedRoute />` wrapper components in React to manage authenticated user state and redirect unauthenticated requests."
        ]
      }
    },

    // ------------------------------------------------------------------------
    // Project 8: AgriVerify
    // ------------------------------------------------------------------------
    {
      id: "agriverify",
      title: "AgriVerify — Sovereign Supply-Chain Verification API",
      tagline: "Cryptographic Farm-to-Export Batch Certification via Immutable Ledger",
      role: "Backend Developer",
      status: "IN PROGRESS",
      featured: false,
      category: "backend",
      repoUrl: "https://github.com/yusuftahirajah75-del",
      liveUrl: "",
      image: "",
      summary:
        "A Node.js/Express/PostgreSQL backend certifying farm-to-export agricultural batches via an immutable SHA-256 cryptographic time-series ledger, dynamic QR verification, and official PDF Export Passports.",
      
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma / SQL Schema",
        "SHA-256 Cryptography",
        "Dynamic QR",
        "PDF Generation"
      ],

      keyFeatures: [
        "Immutable SHA-256 cryptographic time-series audit ledger",
        "Dynamic QR code verification for instant customs and border compliance checks",
        "Automated official PDF Export Passport generation",
        "Strict foreign trade compliance tracking (EU MRL limits, FDA standards)"
      ],

      caseStudy: {
        problem:
          "Agricultural exporters face strict compliance hurdles (EU MRL limits, FDA standards). Traditional paper certificates are vulnerable to tampering and fraud.",
        whyItMatters:
          "A single forged phytosanitary certificate can lead to entire export shipments being rejected at destination ports, causing catastrophic losses for producers.",
        solution:
          "AgriVerify binds batch inspection checkpoints into an immutable cryptographic hash chain where each log entry contains the SHA-256 hash of the previous checkpoint, verifiable via dynamic QR codes.",
        
        myContribution: [
          "Designed database schema for agricultural batches, checkpoints, and immutable ledger events.",
          "Implemented cryptographic hashing utility chaining checkpoint timestamps, inspector IDs, and chemical residue readings into a tamper-evident audit trail."
        ]
      }
    }
  ],

  // --------------------------------------------------------------------------
  // 7. Education & Academic Background
  // --------------------------------------------------------------------------
  education: [
    {
      institution: "Federal University Dutsin-Ma",
      degree: "B.Sc. in Computer Science & IT",
      period: "2024 — Expected 2028",
      status: "Currently Enrolled (Undergraduate)",
      location: "Katsina State, Nigeria",
      coursework: [
        "Data Structures & Algorithms",
        "Introduction to Cyber Security (CYB 201)",
        "Database Systems & Information Management",
        "Object-Oriented Programming",
        "Computer Systems & Networking Fundamentals"
      ],
      academicNotes:
        "Focusing on foundational software engineering, algorithmic problem solving, system architecture, and defensive cybersecurity practices."
    },
    {
      institution: "Full-Stack Engineering Program (Cohort 8)",
      degree: "Practical Full-Stack & Backend Engineering Intensive",
      period: "2025 — 2026",
      status: "Completed / Capstone Contributor",
      location: "Remote",
      coursework: [
        "Modern JavaScript (ES6+)",
        "Node.js & Express Architecture",
        "Relational & Document Databases (PostgreSQL, MongoDB)",
        "Git Branching, Pull Requests & Team Collaboration (Group 19 Capstone)"
      ],
      academicNotes:
        "Collaborated on group capstone projects, built backend services, handled PR code reviews, and implemented production-grade REST APIs."
    }
  ],

  // --------------------------------------------------------------------------
  // 8. Selected Engineering Experience
  // --------------------------------------------------------------------------
  experience: [
    {
      role: "Founder & Full-Stack Developer",
      organization: "TrustOS Intelligence",
      type: "Production SaaS Initiative",
      period: "2025 — Present",
      location: "Remote",
      description:
        "Designed and implemented an Africa-first digital trust and scam intelligence SaaS platform from scratch.",
      highlights: [
        "Built modular risk scoring engine evaluating URLs, emails, phone numbers, and regional fraud indicators.",
        "Engineered full PostgreSQL schema with versioned migrations, seeders, and tenant isolation tests in Jest.",
        "Deployed production live demo on Render (Vite React frontend + Express REST API)."
      ]
    },
    {
      role: "Full-Stack Engineer & Creator",
      organization: "PayRescue NG",
      type: "Financial Infrastructure Project",
      period: "2025 — Present",
      location: "Remote",
      description:
        "Engineered digital transaction recovery, payment dispute management, and evidence verification platform for Nigerian fintechs and banks.",
      highlights: [
        "Built TypeScript/Express backend with Prisma ORM, PostgreSQL, and Docker.",
        "Created Cryptographic Evidence Vault with SHA-256 checksums and automated CSV settlement reconciliation.",
        "Developed React frontend with React Query, React Hook Form, and Zod schemas."
      ]
    },
    {
      role: "Backend Developer (Capstone Contributor)",
      organization: "Cohort 8 — Group 19 Capstone (IMPACT_TRACKER_)",
      type: "Collaborative Team Project",
      period: "2026",
      location: "Remote",
      description:
        "Collaborated within a team of engineers building an NGO and Volunteer Impact Tracking backend service.",
      highlights: [
        "Led organization-side opportunity lifecycle backend on branch `feature/organization-dashboard`.",
        "Engineered status state machine (draft, published, active, completed) and ownership authorization rules.",
        "Participated in Git branch workflows, pull request reviews, and async Express 5 controller patterns."
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 9. Recruiter "Why Consider Me?" Value Proposition
  // --------------------------------------------------------------------------
  whyConsiderMe: [
    {
      icon: "Code2",
      title: "I Build Real Software",
      desc: "I build full-stack web applications with actual databases, migrations, API route handlers, and error handling—not just shallow tutorials."
    },
    {
      icon: "Search",
      title: "I Debug Root Causes",
      desc: "When code breaks, I inspect stack traces, check SQL execution plans, and examine HTTP headers rather than hiding bugs under blind try/catch blocks."
    },
    {
      icon: "GitBranch",
      title: "I Can Collaborate on Git",
      desc: "I have verified experience working on feature branches, resolving merge conflicts, and writing clean pull requests in multi-developer repositories."
    },
    {
      icon: "ShieldCheck",
      title: "I Am Security-Conscious",
      desc: "I treat authentication, input validation (Zod/Joi), password hashing (bcrypt), and role authorization as primary requirements, not afterthoughts."
    },
    {
      icon: "GraduationCap",
      title: "I Learn Continuously",
      desc: "As a Computer Science student at FUDMA, I pair formal theoretical computer science with hands-on, daily software engineering practice."
    }
  ],

  // --------------------------------------------------------------------------
  // 10. Contact & Professional Channels
  // --------------------------------------------------------------------------
  contact: {
    headline: "Let's Build Something Useful Together",
    subheadline:
      "Whether you're looking for a dedicated Junior Full-Stack Developer, a Software Engineering Intern, or an engineering collaborator, my inbox is open.",
    email: "yusuftahirajah75@gmail.com",
    github: "https://github.com/yusuftahirajah75-del",
    linkedin: "https://ng.linkedin.com/in/tahir-yusuf-817012331",
    availabilityNotice: "Available for technical interviews and coding discussions."
  }
};
