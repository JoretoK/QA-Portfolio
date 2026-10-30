'use strict';

/* ============================================================
   LOCALE - English (default)
   Every UI string lives here. Keys are mirrored in bg.js.
   ============================================================ */
window.LOCALES = window.LOCALES || {};
window.LOCALES.en = {
  meta: {
    title: 'Georgi Koleshanski | QA Workspace',
    description: 'Georgi Koleshanski - QA Engineer workspace. Manual and automated testing specialist.'
  },

  common: {
    brand: 'QA Workspace',
    name: 'Georgi Koleshanski',
    role: 'QA Engineer',
    openToWork: 'Open to Work',
    status: 'Status',
    location: 'Location',
    skills: 'Skills',
    completed: 'Completed',
    inProgress: 'In Progress',
    bulgaria: 'Bulgaria',
    panagyurishte: 'Panagyurishte',
    locationWorkMode: 'Bulgaria, Remote / Hybrid',
    qaSpecialist: 'Quality Assurance Specialist',
    cctvInstaller: 'CCTV Camera Installer',
    master: "Master's Degree - Pedagogy of Mathematics Education",
    bachelor: "Bachelor's Degree - Software Technologies and Design",
    qaDiploma: 'QA Automation Engineer Diploma',
    softuni: 'Software University (SoftUni)',
    puShort: 'University of Plovdiv',
    puFull: 'University of Plovdiv "Paisii Hilendarski" - Faculty of Mathematics and Informatics (FMI)',
    school: '"Nesho Bonchev" Secondary School'
  },

  a11y: {
    toggleSidebar: 'Toggle sidebar',
    closeNav: 'Close navigation',
    primaryNav: 'Primary navigation',
    breadcrumb: 'Breadcrumb',
    language: 'Language'
  },

  dates: {
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    present: 'Present'
  },

  nav: {
    dashboard: 'Dashboard',
    profile: 'Profile',
    sectionWork: 'Work',
    board: 'Work Board',
    skills: 'Skills & Tools',
    projects: 'Projects',
    sectionCredentials: 'Credentials',
    certs: 'Certifications',
    education: 'Education',
    sectionConnect: 'Connect',
    downloadCv: 'Download CV',
    cvFile: 'Georgi-Koleshanski-CV.pdf',
    email: 'Email'
  },

  dashboard: {
    subtitle: 'QA Engineering Overview',
    metrics: {
      experience: 'Years Experience',
      activeRoles: 'Active Roles',
      certifications: 'Certifications',
      tools: 'Testing Tools'
    },
    profile: {
      title: 'Profile Overview',
      languages: 'Bulgarian · English',
      bio: '2+ years delivering reliable software through comprehensive manual and automated testing. Specialized in test strategy, automation frameworks, and quality advocacy across the full SDLC.'
    },
    timeline: {
      title: 'Career Timeline',
      school: 'Secondary School Diploma - Completed'
    },
    status: {
      availability: 'Availability',
      locationValue: 'Panagyurishte / Plovdiv, Bulgaria',
      workType: 'Work Type',
      workMode: 'Remote / Hybrid',
      focusArea: 'Focus Area',
      focusValue: 'Manual & Automated QA',
      sdlcRole: 'SDLC Role',
      sdlcValue: 'QA Specialist'
    },
    skills: {
      title: 'Skill Coverage',
      automation: 'Automation Tools',
      api: 'API & Performance',
      types: 'Testing Types',
      languages: 'Languages',
      reporting: 'Reporting',
      process: 'Process'
    },
    quick: {
      title: 'Quick Access',
      issues: '3 issues',
      credentials: '12 credentials',
      skills: '22 skills',
      entries: '4 entries'
    }
  },

  profile: {
    story: 'Story',
    subtitle: 'QA Engineer - Professional Profile',
    description: 'Description',
    p1: 'QA Engineer with 2+ years of experience in both Manual and Automated Software Testing, focused on delivering reliable, high-quality software products.',
    p2: 'Experienced in designing, executing, and maintaining test cases, identifying defects, and collaborating closely with development teams throughout the software development lifecycle.',
    p3: 'Passionate about improving software quality through efficient testing strategies, automation, and continuous process improvement.',
    tc: {
      heading: 'Test Case Summary',
      runInfo: 'Last run: Present  ·  6/6 passed',
      tableAria: 'Candidate profile test cases',
      colId: 'ID',
      colObjective: 'Objective',
      colResult: 'Result',
      pass: 'Pass',
      footer: '6 / 6 passed  ·  Pass rate: 100%  ·  Environment: Production',
      experience: 'QA Experience',
      experienceRes: '2+ yrs · Manual & Automation',
      frameworks: 'Automation Frameworks',
      api: 'API & Performance Testing',
      planning: 'Test Planning & Strategy',
      planningRes: 'Full SDLC Collaboration',
      certification: 'Continuous Certification',
      certificationRes: '12 Certifications Earned',
      communication: 'Communication',
      communicationRes: 'Bulgarian (Native) · English (Pro)'
    },
    details: {
      aria: 'Profile details',
      assignee: 'Assignee',
      priority: 'Priority',
      high: 'High',
      experience: 'Experience',
      experienceValue: '2+ Years',
      focus: 'Focus',
      focusValue: 'Manual & Automated Testing',
      collaboration: 'Collaboration',
      collaborationValue: 'Cross-functional Teams',
      languages: 'Languages',
      bulgarian: 'Bulgarian',
      native: 'Native',
      english: 'English',
      professional: 'Professional',
      viewProfile: 'View Profile'
    }
  },

  board: {
    filterAria: 'Filter issues',
    all: 'All',
    active: 'Active',
    closed: 'Closed',
    summary: '3 issues  ·  0 active  ·  3 closed',
    columnsAria: 'Work board columns',
    inProgress: 'In Progress',
    done: 'Done',
    issueCount: { one: '{count} issue', other: '{count} issues' },
    storyType: 'Story type',
    story: 'Story',
    taskType: 'Task type',
    task: 'Task',
    highPriority: 'High priority',
    mediumPriority: 'Medium priority',
    assignedTo: 'Assigned to Georgi Koleshanski',
    closedBadge: 'Closed',
    years2: '2 yrs',
    months2: '2 mos',
    inversoDesc: 'First invoicing platform with integrated AI in Bulgaria. Functional, performance, and security testing.',
    voidwebDesc: 'Comprehensive testing methodologies across multiple projects and testing domains.',
    systeraDesc: 'Implementation and maintenance of electronic surveillance systems.',
    tags: {
      apiTesting: 'API Testing',
      testPlanning: 'Test Planning',
      mobileTesting: 'Mobile Testing',
      cctvInstall: 'CCTV Install',
      securitySystems: 'Security Systems',
      troubleshooting: 'Troubleshooting'
    }
  },

  skills: {
    subtitle: 'Test Coverage Report - 22 skills across 6 domains',
    coverageBadge: '97% Coverage',
    summaryTitle: 'Coverage Summary',
    tableAria: 'Skill coverage by domain',
    colDomain: 'Domain',
    colCoverage: 'Coverage',
    colProgress: 'Progress',
    domains: {
      automation: 'Automation Tools',
      languages: 'Languages',
      api: 'API & Performance',
      types: 'Testing Types',
      reporting: 'Reporting & Collab',
      process: 'Process & Strategy'
    },
    lists: {
      types: 'Manual, API, Performance, Mobile, Cross-browser, Unit',
      reporting: 'Allure Reports, GitHub, Defect Tracking',
      process: 'Test Planning & Strategy, Test Case Design, SDLC Collaboration'
    },
    overall: 'Overall Coverage',
    overallSub: '22 skills across 6 domains',
    stack: {
      title: 'QA Tech Stack',
      languages: {
        title: 'Languages',
        js: '- main language for the E2E test suite',
        csharp: '- backend/API test automation (.NET)',
        python: '- AI test-generation tooling (Jira → Claude → Google Sheets pipeline)',
        yaml: '- feature manifest for coverage tracking and GitHub Actions workflows',
        bash: '- CI scripts and local automation entry points (generate.sh)',
        web: '- custom QA dashboard'
      },
      e2e: {
        title: 'E2E / UI Testing',
        playwright: '- core E2E framework; covers auth, onboarding, invoices, offers, clients, reports across Chromium / Firefox / WebKit',
        storageState: '- reuses authenticated sessions across tests instead of logging in every time',
        fixtures: '- per-worker authenticated browser contexts for safe parallel runs'
      },
      api: {
        title: 'API / Backend Testing',
        nunit: '- test framework for the .NET backend suite',
        restsharp: '- HTTP client for hitting API endpoints in tests',
        fluent: '- readable assertion syntax for API responses',
        bogus: '- generates realistic fake test data'
      },
      cicd: {
        actions: '- runs tests on macOS, Windows, and Linux; nightly regression run; manual suite-selection triggers; merges multi-platform reports'
      },
      reporting: {
        title: 'Reporting & Observability',
        allure: '- rich test reporting with history/trends and custom failure categorization',
        chartjs: '- powers the visual metrics on the custom QA dashboard',
        netlify: '- auto-deploys the QA dashboard to a live public URL after each CI run',
        scriptsName: 'Custom Node.js scripts',
        scripts: '- merge .NET (TRX) and Playwright (JSON) results into one unified coverage report, tracked against a feature manifest'
      },
      email: {
        title: 'Email Testing',
        mailosaur: '- verifies real emails sent by the app (invoices, invites, password reset) using disposable test inboxes'
      },
      ai: {
        title: 'AI-Assisted QA Tooling',
        claude: '- orchestrated programmatically to read actual app source and auto-generate test plans/cases from a Jira ticket',
        jira: '- fetches ticket details to feed the AI generation pipeline',
        sheets: '- writes the generated test plan into a shared Google Sheet template',
        flask: '- webhook server that auto-triggers test generation when a Jira ticket changes'
      },
      tooling: {
        title: 'Tooling',
        git: '- version control and PR workflow',
        vscode: '- primary IDE, with project-specific run/debug configs',
        dotenv: '- manages environment-based config/secrets locally and in CI'
      }
    }
  },

  projects: {
    subtitle: "Products and tools I've built - from QA automation to a live mobile app",
    count: '5 Projects',
    groups: {
      qa: 'QA & Test Automation',
      other: 'Other Projects'
    },
    why: 'Why I built it',
    problem: 'What problem it solves',
    how: 'How it works',
    testforge: {
      badge: "Bachelor's Thesis",
      subtitle: 'An AI-powered web platform that turns user stories, HTML, and UI screenshots into reviewed, versioned Playwright tests',
      why: "Writing Playwright tests by hand from requirements is slow, and AI-generated test code can't go straight into a suite - someone still has to check it. For my bachelor's thesis I wanted to build a platform where AI writes the first draft, while the team keeps a real QA process around it: review and approval, version history, roles, and a full audit trail.",
      problem: [
        'Generates a complete Playwright test from three kinds of input: a user story, the raw HTML of a component, or a screenshot of the UI (analyzed with an OpenAI vision model).',
        'Returns more than just test code - every generation also includes edge cases, negative scenarios, and a short explanation of what the test covers.',
        'Puts every generated test through a review workflow (Draft → Ready for Review → Approved / Rejected), with Team Lead comments and in-app notifications at each step.',
        'Keeps a full version history: each new generation becomes a new version, and approved versions are locked against further edits.',
        'Role-based access for QA engineers, Team Leads, and Admins, with per-role daily generation limits and usage and token logging to keep AI costs under control.',
        'Exports approved tests as ready-to-run .spec.ts files.'
      ],
      how: [
        'A QA engineer picks a project and submits a user story, an HTML snippet, or a screenshot.',
        'A dedicated service layer sends it to OpenAI with a QA-focused system prompt that enforces Playwright best practices (web-first assertions, resilient selectors) and a strict JSON response format.',
        'The response is parsed into test code, edge cases, negative scenarios, and an explanation, then saved as a new test version in SQL Server through Entity Framework Core.',
        'The QA engineer reviews and edits the draft, then submits it for review.',
        'A Team Lead approves it, which locks the version, or rejects it with a comment; the author is notified either way.',
        'Role-specific dashboards built with Chart.js show generation activity and test statuses, while Admins manage users and browse the audit logs.'
      ]
    },
    kolario: {
      badge: 'Google Play',
      badgeIos: 'App Store',
      subtitle: 'A digital service book and personal garage for your car - a mobile app live on Google Play and the App Store',
      why: "I've always wanted to build something that real people actually use, not just a demo. Kolario is a vibe-coded project: I built it with AI coding tools, while I owned the product decisions, the testing, and the whole release process up to Google Play and the App Store. Seeing it installed and used by drivers in Bulgaria is exactly what I was after.",
      problem: [
        'Replaces the paper service book, scattered invoices, and notebook notes with one organized, always-available history for each car.',
        'Logs every service visit with date, mileage, parts, labor, and cost, and tracks other car expenses (insurance, tax, vignette, fines) with charts by month and category.',
        "Tracks what's about to expire - insurance, annual inspection, vignette, tax, warranty - and warns on the dashboard when something is overdue or due soon, with optional push reminders.",
        'Scans service invoices with the camera and reads the amount, date, and mileage on the device, without uploading anything for analysis.',
        "Supports several cars per account and exports a car's full history as a PDF - useful proof of maintenance when selling it.",
        'Free, with no ads and no behavioral tracking; users sign in with email, Google, or as a guest, and can delete their account at any time from the app.'
      ],
      how: [
        'Built with Flutter and Dart, using Riverpod for state management and go_router for navigation, in a layered structure (core / domain / data / presentation).',
        'Supabase is the backend: Postgres with Row Level Security so every user only sees their own data, authentication (email, Google, Apple, guest), file storage, and Edge Functions for account deletion.',
        'The invoice scanner uses Google ML Kit on-device text recognition, and reminders are scheduled as local notifications.',
        'Quality is covered by 350+ automated unit, widget, and integration tests, plus live tests against the real backend and Android emulator smoke tests.',
        'GitHub Actions runs static analysis, the test suite, and a coverage gate on every push; Codemagic builds the iOS version.',
        'Every release goes through Google Play closed testing and review before it reaches production.'
      ]
    },
    dashboard: {
      subtitle: 'Unified test coverage visualization across the entire project',
      why: 'Test results were scattered across different places - Playwright reports, .NET .trx files, separate CI runs - with no single view of how much of the actual product was covered by tests and where the gaps were.',
      problem: [
        'Merges results from two different test stacks (Playwright/JS frontend + NUnit/.NET backend) into one unified dashboard.',
        'Shows not just "how many tests pass," but which critical product features actually have coverage - via a risk-weighted score (critical modules count more than low-risk ones).',
        'Surfaces coverage "blind spots" - modules with zero passing tests.',
        'Tracks trends over time (coverage history across runs), instead of each CI run being an isolated snapshot.',
        'Auto-generates and publishes to a live URL after every CI run, so the whole team (QA, devs, PM) can see the current state without going into GitHub Actions.'
      ]
    },
    generator: {
      subtitle: 'Auto-generates QA test plans and test cases from Jira tickets',
      why: "Writing detailed test plans (functional, negative, edge case, regression) for every new feature manually is slow and repetitive, and it's easy to miss cases when working straight from a ticket description instead of the actual implementation.",
      problem: [
        'Takes a Jira ticket ID and automatically produces a complete test plan + test cases, instead of a QA writing them by hand from scratch.',
        "Bases the generated tests on the actual code (both backend and frontend repos), not just the ticket text - so it catches edge cases, validations, and error handling that aren't mentioned in the ticket description.",
        'Delivers the result directly into a shared Google Sheet (from a template), ready for the QA to review and execute - no manual formatting or copy-pasting.',
        "Notifies by email when generation is done, so there's no need to babysit the process (which takes a few minutes per ticket).",
        'Can be triggered automatically via a Jira webhook when a ticket changes, removing the manual step entirely.'
      ],
      how: [
        'You run <code>./generate.sh IN-184</code> (or it triggers automatically via a Jira webhook when the ticket changes).',
        'A Python script fetches the ticket (summary, description, acceptance criteria) from Jira through the Jira REST API.',
        'It builds a detailed QA prompt and feeds it to the Claude Code CLI, pointing it directly at the real backend (Laravel) and frontend (Vue.js) repos so it analyzes the actual implementation, not just the ticket text.',
        'Claude returns structured test cases (functional, negative, edge case, regression), which the script parses into JSON.',
        'The parsed result is written into a new Google Sheet, copied from a shared template, via the Google Sheets/Drive API.',
        'An email notification is sent once the sheet is ready, with a link to it.',
        'Optionally, a small Flask webhook server (exposed via Cloudflare Tunnel) listens for Jira ticket updates and re-triggers the whole flow automatically, ignoring irrelevant changes like status or assignee updates.'
      ]
    },
    copilot: {
      subtitle: 'A custom /qa-test Claude Code command that code-reviews, live-tests, and documents a ticket end-to-end',
      why: 'Testing a ticket end-to-end always meant repeating the same tedious sequence by hand: reading the code, checking the database, hitting the API, testing the UI, then re-testing on the mobile app - and writing up the findings in a way a developer could actually act on took just as long as the testing itself.',
      problem: [
        'Turns a single command, <code>/qa-test 19</code>, into a full QA pass on a specific ticket: pulls the latest code, looks up the ticket number and its description, and locates exactly where and how it was implemented in the Laravel codebase.',
        'Runs a detailed code review of the change first - including how it touches other modules - to catch logic and integration issues before any test is even executed.',
        'Runs real functional tests two ways on the backend: direct API requests plus Laravel Tinker and database checks, and separately drives the UI live through Playwright MCP.',
        'Extends the same testing pass to the mobile app by launching an Android Studio emulator and running live test flows, taking screenshots along the way to track progress and decide what to check next.',
        "Writes every issue it finds into a developer-ready Markdown report: what's broken, exact steps to reproduce, the actual effect, and why it's happening - everything needed to fix it without back-and-forth.",
        'Persists everything into a session Markdown file, so a QA pass can be resumed exactly where it left off instead of losing context between sessions.'
      ],
      how: [
        'You type <code>/qa-test 19</code> in Claude Code, where 19 is the ticket number.',
        "Claude pulls the latest changes from the repo and looks up ticket #19's description in the tracker.",
        'It searches the PHP/Laravel codebase to find exactly where and how the ticket was implemented.',
        'It code-reviews that implementation, tracing how it interacts with other modules to flag risky or broken integrations before testing starts.',
        'It runs backend tests via direct API calls, Laravel Tinker, and database queries, then runs live UI tests through Playwright MCP.',
        'It launches the mobile app in an Android Studio emulator and runs live test flows, capturing screenshots to track state and guide the next test step.',
        'Every issue found is written into a Markdown report formatted for handoff: the bug, reproduction steps, the effect, and the root cause.',
        'Everything is saved into a session Markdown file, so the QA process for that ticket can be picked up later without losing history.'
      ]
    }
  },

  certs: {
    subtitle: '12 credentials - Professional development milestones',
    filterAria: 'Filter certifications',
    all: 'All (12)',
    flagship: 'Flagship Credential',
    issued: 'Issued: October 2025',
    monthProgram: 'Month program',
    totalCredentials: 'Total credentials',
    certified: 'Certified',
    rowStatus: 'Certified',
    colCert: 'Certification',
    colIssuer: 'Issuer',
    colIssued: 'Issued',
    tags: {
      backendAutomation: 'Back-End Test Automation',
      frontendAutomation: 'Front-End Test Automation',
      performance: 'Performance Testing',
      automationEngineering: 'Automation Engineering',
      aiCoding: 'AI Coding',
      dataStructures: 'Data Structures',
      unitTesting: 'Unit Testing',
      manualTesting: 'Manual Testing',
      defectTracking: 'Defect Tracking',
      hardwareSoftware: 'Hardware & Software',
      osFundamentals: 'OS Fundamentals',
      qaFundamentals: 'QA Fundamentals',
      testingTypes: 'Testing Types'
    }
  },

  education: {
    subtitle: 'Academic background and training programs',
    masterDesc: "Master's program focused on the methodology and pedagogy of teaching mathematics.",
    bachelorDesc: 'Developing expertise in software technologies, design principles, and logical thinking. Building a strong foundation in software engineering and quality assurance practices.',
    thesisLabel: "Bachelor's thesis:",
    thesisDesc: '- an AI-powered platform for generating and reviewing Playwright tests',
    softuniTitle: 'QA Engineer Program - Computer Programming',
    softuniDesc: 'Comprehensive 17-month QA Automation Engineer program covering manual and automated testing. Curriculum included QA fundamentals, programming for QA, back-end and front-end test automation, and career development. Hands-on experience with Selenium, Appium, Postman, Swagger, Mocha, Chai, JMeter, K6, NUnit, and RestSharp.',
    softuniNote: 'Participated in live sessions, collaborative projects, peer reviews, and the IT Career Booster program.',
    schoolTitle: 'Secondary School Diploma - Mathematics and Computer Science',
    schoolDesc: 'Focused on Mathematics and Informatics. Built strong analytical and logical thinking skills that form the foundation of quality-driven software testing.'
  },

  loading: {
    welcome: 'Welcome'
  }
};
