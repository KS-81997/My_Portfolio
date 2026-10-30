export const profile = {
  name: 'Hafiz Khalid Saeed',
  roles: ['React Native Specialist', 'Cross-Platform Engineer', 'Tauri + Rust Builder', 'SaaS Product Engineer'],
  location: 'Lahore, Pakistan',
  phone: '0300 4471275',
  phoneHref: 'tel:+923004471275',
  linkedin: 'https://www.linkedin.com/in/hafiz-khalid-saeed-4239941a4',
  summary:
    'Results-driven Associate Software Engineer with 3+ years of practical experience in React Native mobile development, cross-platform engineering, API integration and SaaS product engineering. I build and publish production-grade apps on Google Play Store, Microsoft Store, Snap Store (Linux), and macOS.',
  summary2:
    'Hands-on with enterprise ERP & FinTech accounting, AI content generation, multi-platform social schedulers, website uptime monitoring, gamified edtech platforms, QuickBooks & Stripe integrations, Tauri + Rust desktop architecture, and Pusher real-time communication.',
}

export const stats = [
  { value: 3, suffix: '+', label: 'Years experience' },
  { value: 4, suffix: '', label: 'App Stores: Play, Microsoft, Snap, Mac' },
  { value: 6, suffix: '+', label: 'Live Store Apps' },
  { value: 100, suffix: '%', label: 'Production Ready' },
]

/* =========================================================
   FLAGSHIP 1: FLOWLEDGER PRO ECOSYSTEM
   ========================================================= */
export const flowLedgerPro = {
  id: 'flowledger',
  title: 'FlowLedger Pro',
  badge: 'Flagship Mobile & Cloud ERP',
  tagline: 'The Localized Double-Entry ERP & Cloud Accounting Suite',
  overview:
    'A complete cross-platform enterprise ecosystem comprising a production React Native mobile app on Google Play Store, a high-performance React/TypeScript web app portal (app.flowledgerpro.com), and the official SaaS marketing platform (flowledgerpro.com). FlowLedger Pro streamlines multi-entity operations, localized tax compliance, CRM, and financial accounting.',
  mobile: {
    title: 'FlowLedger Pro Mobile',
    tagline: 'Manage CRM, sales, projects, finance, and teams in one app.',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.appliconsoft.flowledgerpro&pcampaignid=web_share',
    packageId: 'com.appliconsoft.flowledgerpro',
    icon: '/flowledger-icon.png',
    developer: 'AppliconSoft',
    highlights: [
      'Customer Relationship Management (CRM) — leads, contacts, and deal pipelines',
      'Double-entry mobile transactions with automated general ledger posting',
      'Real-time sales & purchase order tracking with instant invoice generation',
      'Hierarchical project management, milestones, and task collaboration',
      'Live bidirectional cloud sync with role-based security & auth',
    ],
    tech: ['React Native', 'Redux Toolkit', 'RESTful APIs', 'Google Play', 'Android SDK', 'Offline Cache'],
    screenshots: [
      { src: '/flowledger/mobile-ss1.png', label: 'Executive Dashboard & Metrics' },
      { src: '/flowledger/mobile-ss2.png', label: 'Double-Entry Accounting & Ledger' },
      { src: '/flowledger/mobile-ss3.png', label: 'Sales Invoices & Billing Workflow' },
      { src: '/flowledger/mobile-ss4.png', label: 'Projects & Team Task Tracking' },
      { src: '/flowledger/mobile-ss5.png', label: 'CRM Contacts & Pipeline View' },
    ],
  },
  web: {
    title: 'FlowLedger Pro Cloud Web App & Portal',
    tagline: 'Localized double-entry ERP with configurable tax workflows and multi-entity control.',
    appUrl: 'https://app.flowledgerpro.com',
    siteUrl: 'https://flowledgerpro.com',
    logo: '/flowledger/logo.png',
    metrics: [
      { val: '$2.4M+', label: 'Tracked Revenue', change: '+12.5% YoY' },
      { val: '847+', label: 'Active Invoices', change: 'Auto-posted' },
      { val: '98.5%', label: 'Tax Compliance', change: 'Sales / WHT / FED' },
      { val: '12+', label: 'Entity Accounts', change: 'Isolated Ledgers' },
    ],
    capabilities: [
      {
        icon: '🏢',
        title: 'Multi-Entity Architecture',
        desc: 'Onboard multiple business entities with fully segregated general ledgers, customized fiscal years, and isolated tax registers.',
      },
      {
        icon: '⚖️',
        title: 'Double-Entry Accounting Engine',
        desc: 'Automated debit/credit balancing, manual journal vouchers, real-time general ledger, Trial Balance, P&L, and Balance Sheet.',
      },
      {
        icon: '🧾',
        title: 'Configurable Tax Workflows',
        desc: 'Built-in support for localized sales tax (18%), withholding tax (10%), and federal excise duty calculations and audit filings.',
      },
      {
        icon: '📦',
        title: 'Procurement & Inventory (SKUs)',
        desc: 'Complete asset intelligence, low-stock reorder alerts, multi-warehouse support, and automated order-to-cash pipeline.',
      },
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js / Data Viz', 'REST APIs', 'Multi-Tenant Architecture'],
  },
}

/* =========================================================
   FLAGSHIP 2: TRACKPILOT AI ECOSYSTEM
   ========================================================= */
export const trackPilotAI = {
  id: 'trackpilot',
  title: 'TrackPilot AI',
  badge: 'Desktop & Workforce Ecosystem',
  tagline: 'Automated Time Tracking, Productivity Monitoring & Remote Team Management',
  overview:
    'A cross-platform workforce tracking and productivity suite engineered with Tauri + Rust for high-performance desktop execution, live on Microsoft Store, Snap Store (Linux), and macOS App Store, connected to a cloud tracker portal (tracker.trackpilotai.com). Features OS-level event tracking, automated screenshots, smart idle detection, and webcam verification.',
  desktop: {
    title: 'TrackPilot AI Desktop App',
    tagline: 'Lightweight, native desktop application engineered with Tauri + Rust.',
    msStoreUrl: 'https://apps.microsoft.com/detail/9N3VP429W7QD?hl=en-us&gl=US&ocid=pdpshare',
    msStoreId: '9N3VP429W7QD',
    logo: '/trackpilot/logo.png',
    stores: [
      { name: 'Microsoft Store', icon: '🪟', status: 'Live on Store', note: 'Windows 10/11' },
      { name: 'Snap Store', icon: '🐧', status: 'Published', note: 'Linux / Ubuntu' },
      { name: 'macOS App Store', icon: '🍎', status: 'Published', note: 'Apple Silicon & Intel' },
    ],
    highlights: [
      'One-Click Automated Time Tracking: Start, pause, and stop tracking tasks with single-click precision',
      'OS-Level App & Web URL Tracking: Monitors active software and browser URLs with zero CPU overhead',
      'Smart Idle & Fraud Detection: Auto-detects keyboard/mouse inactivity and pauses timer for billing accuracy',
      'Work Verification & Screenshots: Automated periodic screen captures with built-in Privacy Blur mode',
      'Camera Capture Verification: Periodic webcam capture for transparent remote team presence and accountability',
      'Offline Resilience & Background Tray: Runs silently in System Tray with minimal CPU and <15MB RAM usage',
    ],
    tech: ['Tauri', 'Rust', 'React', 'TypeScript', 'OS Hooks', 'System Tray', 'Pusher'],
    screenshots: [
      { src: '/trackpilot/screenshot-1.png', label: 'Task Workspace & One-Click Timer' },
      { src: '/trackpilot/screenshot-2.png', label: 'Activity Logs & App Usage Tracking' },
      { src: '/trackpilot/screenshot-3.png', label: 'Project Memos & Team Timesheets' },
      { src: '/trackpilot/screenshot-4.png', label: 'Lightweight System Tray Execution' },
    ],
  },
  web: {
    title: 'TrackPilot AI Web Tracker & Cloud Portal',
    tagline: 'Cloud management dashboard for team analytics, timesheets, and productivity reports.',
    trackerUrl: 'https://tracker.trackpilotai.com/',
    siteUrl: 'https://trackpilotai.com/',
    metrics: [
      { val: '< 15MB', label: 'RAM Footprint', change: 'Tauri + Rust engine' },
      { val: '3 Stores', label: 'Published Platforms', change: 'Windows, Linux, Mac' },
      { val: '100%', label: 'Offline Resilient', change: 'Auto-sync on reconnect' },
      { val: 'Real-Time', label: 'Pusher WebSocket', change: 'Live status & chat' },
    ],
    capabilities: [
      {
        icon: '📊',
        title: 'Team Timesheets & Audits',
        desc: 'Review detailed employee timesheets, activity percentages, work hours, and automated billing exports with manager approvals.',
      },
      {
        icon: '🌐',
        title: 'App & Website Analytics',
        desc: 'Categorize productive vs unproductive software applications and websites visited across your entire remote workforce.',
      },
      {
        icon: '📸',
        title: 'Proof-of-Work Screenshots',
        desc: 'Secure timeline of recorded work screenshots with customizable blur intervals and optional webcam verification snapshots.',
      },
      {
        icon: '⚡',
        title: 'Instant Cloud Sync & Pusher',
        desc: 'Live activity streams, instant team chat, and real-time remote commands sent directly to desktop agents.',
      },
    ],
    tech: ['React', 'TypeScript', 'WebSockets', 'Pusher', 'REST APIs', 'Cloud Analytics'],
  },
}

/* =========================================================
   FLAGSHIP 3: SOCIAL ROCKET AI
   ========================================================= */
export const socialRocketAI = {
  id: 'socialrocket',
  title: 'Social Rocket AI',
  badge: 'AI Social Suite & Uptime Sentinel',
  tagline: 'Create & Schedule AI Social Posts, Manage Multi-Clients & Monitor Domain Uptime',
  storeUrl: 'https://play.google.com/store/apps/details?id=com.appliconsoft.socialrocketai&pcampaignid=web_share',
  packageId: 'com.appliconsoft.socialrocketai',
  icon: '/socialrocket/icon.png',
  developer: 'AppliconSoft',
  overview:
    'All-in-one mobile control center that consolidates AI content generation, multi-platform social scheduling (Facebook, Instagram, X/Twitter, LinkedIn, Pinterest), agency multi-client management, and live website/SSL uptime monitoring down to 10-second check intervals.',
  screenshots: [
    { src: '/socialrocket/screenshot-1.png', label: 'AI Post Generator & Visual Calendar' },
    { src: '/socialrocket/screenshot-2.png', label: 'Multi-Platform Social Auto-Publishing' },
    { src: '/socialrocket/screenshot-3.png', label: 'Agency Multi-Client Workspace Switcher' },
    { src: '/socialrocket/screenshot-4.png', label: 'Website & SSL Expiry Live Monitor' },
    { src: '/socialrocket/screenshot-5.png', label: 'Stripe Subscriptions & Biometric Security' },
  ],
  workflowSteps: [
    {
      step: '01',
      title: 'AI Content Generation & Creative Suite',
      desc: 'Generate on-brand captions, auto-produce high-ranking hashtags, and create custom AI images directly inside the app with instant platform auto-formatting.',
      tag: 'Generative AI',
    },
    {
      step: '02',
      title: 'Multi-Platform Visual Scheduling',
      desc: 'Connect Facebook, Instagram, Twitter/X, LinkedIn & Pinterest. Schedule posts on a drag-and-drop calendar with team approval gates and recurring rules.',
      tag: 'Social Automation',
    },
    {
      step: '03',
      title: 'Agency & Multi-Client Workspaces',
      desc: 'Switch between isolated client workspaces instantly under a single login with dedicated connection credentials and customized usage quotas.',
      tag: 'Agency Multi-Tenant',
    },
    {
      step: '04',
      title: 'High-Frequency Uptime & SSL Sentinel',
      desc: 'Active uptime monitoring with configurable intervals down to every 10 seconds, SSL certificate expiry countdowns, and instant push incident alerts.',
      tag: 'Infrastructure Health',
    },
    {
      step: '05',
      title: 'Biometric Auth, Stripe & Offline Queue',
      desc: 'Secure fingerprint biometric login, in-app Stripe billing with tiered quotas, and offline-first queue that auto-publishes when reconnected.',
      tag: 'FinTech & Security',
    },
  ],
  tech: ['React Native', 'OpenAI / Gemini APIs', 'Social Graph APIs', 'Stripe SDK', 'Biometrics', 'Redux Toolkit', 'Uptime Daemon'],
}

/* =========================================================
   FLAGSHIP 4: PROADVISOR COACH (PACx)
   ========================================================= */
export const proAdvisorCoach = {
  id: 'proadvisor',
  title: 'ProAdvisorCoach (PACx)',
  badge: 'Gamified EdTech & Mentorship',
  tagline: 'Empowering Professional Growth Through Learning, Coaching & Gamified Milestones',
  storeUrl: 'https://play.google.com/store/apps/details?id=com.appliconsoft.proadvisorcoach&pcampaignid=web_share',
  packageId: 'com.appliconsoft.proadvisorcoach',
  icon: '/proadvisor/icon.png',
  developer: 'AppliconSoft',
  overview:
    'A next-generation mobile learning and professional coaching platform designed to accelerate professional development through interactive assignments, gamified achievements, real-time coach messaging, and dynamic leaderboards.',
  screenshots: [
    { src: '/proadvisor/screenshot-1.png', label: 'Interactive Learning & Course Dashboard' },
    { src: '/proadvisor/screenshot-2.png', label: 'Structured Assignments & Task Submissions' },
    { src: '/proadvisor/screenshot-3.png', label: 'Gamified Badges, Streaks & Rewards' },
    { src: '/proadvisor/screenshot-4.png', label: 'Direct Coach & Mentor Messaging' },
    { src: '/proadvisor/screenshot-5.png', label: 'Peer Leaderboards & Growth Insights' },
  ],
  highlights: [
    'Interactive Course Library: Structured professional learning modules with rich multimedia',
    'Practical Task & Assignment Submission: Hands-on learning with measurable real-world outcomes',
    'Gamification & Rewards Engine: Badges, levels, streak tracking, and achievement unlocks',
    'Direct 1-on-1 Coach Messaging: Built-in secure chat with mentors for feedback and guidance',
    'Competitive Leaderboards: Recognition programs encouraging continuous professional growth',
    'Intelligent Notification Reminders: Timely nudges for assignment deadlines and learning goals',
  ],
  tech: ['React Native', 'Gamification Engine', 'Real-Time Chat', 'Push Notifications', 'REST APIs', 'Redux'],
}

/* =========================================================
   PROJECT 5: WHOLESALE EZ (SUPPLIER SUITE)
   ========================================================= */
export const wholesaleEZ = {
  id: 'wholesaleez',
  title: 'Wholesale EZ (Supplier App)',
  badge: 'B2B E-Commerce & Invoicing',
  tagline: 'Manage Customers, Products, Orders, and QuickBooks with Palm-of-the-Hand Ease',
  storeUrl: 'https://play.google.com/store/apps/details?id=wholesaleez.wholesaleezapp.supplierapp&pcampaignid=web_share',
  packageId: 'wholesaleez.wholesaleezapp.supplierapp',
  icon: '/wholesaleez/icon.png',
  overview:
    'Comprehensive B2B e-commerce and inventory supplier application that enables wholesalers and suppliers to manage products, place orders, process invoices, integrate with QuickBooks, and monitor real-time sales dashboards.',
  screenshots: [
    { src: '/wholesaleez/screenshot-1.png', label: 'Supplier Dashboard & Sales Metrics' },
    { src: '/wholesaleez/screenshot-2.png', label: 'Product Catalog & Stock Management' },
    { src: '/wholesaleez/screenshot-3.png', label: 'Customer Accounts & Pricing Rules' },
    { src: '/wholesaleez/screenshot-4.png', label: 'Order Placement & QuickBooks Sync' },
  ],
  highlights: [
    'Full Product Catalog & Inventory: SKU listings, pricing tiers, and real-time stock balances',
    'One-Touch Order Placement: Fast B2B bulk orders, draft saves, and direct invoice dispatch',
    'QuickBooks Accounting Integration: Automated bidirectional ledger and transaction synchronization',
    'Customer & Supplier Accounts: Tiered wholesale pricing, payment terms, and credit lines',
    'Sales Performance Dashboards: Revenue analytics, top-moving SKUs, and rep order tracking',
  ],
  tech: ['React Native', 'QuickBooks API', 'Redux Toolkit', 'RESTful APIs', 'Invoicing Engine', 'B2B Commerce'],
}

/* =========================================================
   STRUCTURED PROFESSIONAL EXPERIENCE
   ========================================================= */
export const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'AppliconSoft',
    type: 'Full-Time, Permanent',
    period: 'Mar 2025 - Present',
    current: true,
    place: 'Lahore, Pakistan',
    summary:
      'Core software engineer spearheading multi-platform product architecture across desktop (Tauri + Rust), mobile (React Native), and cloud ERP systems. Shipped 4 commercial products to Microsoft Store and Google Play Store.',
    deliverables: [
      {
        icon: '💻',
        title: 'TrackPilot AI (Desktop & Web Ecosystem)',
        badge: 'Microsoft Store · Snap · macOS',
        desc: 'Architected and published the native desktop app with Tauri + Rust (<15MB RAM footprint) and web tracker portal. Implemented low-level OS hooks for active app/URL usage, automated screenshots with Privacy Blur, smart idle & fraud detection, and camera verification.',
        tech: ['Tauri', 'Rust', 'React', 'TypeScript', 'Pusher', 'System Tray'],
      },
      {
        icon: '💼',
        title: 'FlowLedger Pro (Mobile & Cloud ERP Suite)',
        badge: 'Google Play & app.flowledgerpro.com',
        desc: 'Engineered the React Native mobile app on Google Play and core modules of the double-entry accounting web portal. Delivered multi-entity ledger isolation, balance sheet / P&L reporting, and localized tax automation (Sales Tax 18%, WHT 10%, FED).',
        tech: ['React Native', 'Double-Entry ERP', 'Redux Toolkit', 'Tax Workflows', 'REST APIs'],
      },
      {
        icon: '🚀',
        title: 'Social Rocket AI & ProAdvisorCoach (PACx)',
        badge: 'Commercial Google Play Releases',
        desc: 'Shipped Social Rocket AI featuring AI post generator, visual calendar scheduler, agency workspaces, and 10s website/SSL uptime monitor. Developed PACx gamified edtech platform with interactive coursework, streaks, and 1-on-1 mentor messaging.',
        tech: ['React Native', 'OpenAI / Gemini', 'Stripe SDK', 'Gamification', 'Biometrics'],
      },
      {
        icon: '⚡',
        title: 'Real-Time Sync, Media & Payments',
        badge: 'High-Concurrency Backends',
        desc: 'Built Pusher WebSockets real-time sync and live chat across desktop and mobile, Zoom video services inside the ROI Mobile App, dynamic form engines, and offline-first data sync queues.',
        tech: ['Pusher WebSockets', 'Zoom SDK', 'Authorize.Net', 'Stripe', 'Offline Sync'],
      },
    ],
  },
  {
    role: 'React Native Developer',
    company: '7kingscode',
    type: 'Full-Time',
    period: 'Aug 2024 - Jun 2025',
    current: false,
    place: 'Lahore, Pakistan',
    summary:
      'Engineered B2B wholesale e-commerce apps, inventory management pipelines, shipping carrier API integrations, and payment gateways.',
    deliverables: [
      {
        icon: '📦',
        title: 'Wholesale EZ Supplier Suite',
        badge: 'Google Play Store Live',
        desc: 'Built the Wholesale EZ mobile supplier app enabling wholesale merchants to manage catalogs, execute one-touch bulk order placement, generate invoices, and sync directly with QuickBooks accounting.',
        tech: ['React Native', 'QuickBooks API', 'Redux', 'Order Lifecycle', 'Invoicing'],
      },
      {
        icon: '🚚',
        title: 'Logistics, Inventory & Payment Gateways',
        badge: 'Enterprise Architecture',
        desc: 'Integrated FedEx API (live carrier rates, label generation, barcode tracking) and Authorize.Net payment processing. Engineered multi-warehouse inventory tracking with low-stock alerts and CSV bulk imports.',
        tech: ['FedEx API', 'Authorize.Net', 'RBAC', 'Multi-Warehouse', 'CI/CD'],
      },
    ],
  },
]

/* =========================================================
   KEY PROJECTS LIST
   ========================================================= */
export const projects = [
  {
    title: 'FlowLedger Pro (Mobile & Web ERP)',
    tag: 'Mobile + Cloud ERP',
    color: '#38bdf8',
    desc: 'Production-grade double-entry ERP ecosystem featuring a React Native Google Play Store app and a multi-tenant React/TypeScript cloud accounting web portal.',
    tech: ['React Native', 'React', 'TypeScript', 'Redux', 'REST APIs', 'Cloud ERP'],
    feats: ['Google Play Store live', 'Double-entry ledger', 'Multi-entity isolation', 'Localized tax workflows'],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.appliconsoft.flowledgerpro&pcampaignid=web_share',
      app: 'https://app.flowledgerpro.com',
      web: 'https://flowledgerpro.com',
    },
  },
  {
    title: 'TrackPilot AI (Desktop & Web Suite)',
    tag: 'Desktop + Cloud Tracker',
    color: '#22d3ee',
    desc: 'Complete workforce and productivity ecosystem: a native Tauri + Rust desktop app published on Microsoft Store, Snap Store, and macOS, with a cloud tracker web dashboard.',
    tech: ['Tauri', 'Rust', 'React', 'TypeScript', 'Pusher', 'System Tray'],
    feats: ['Microsoft Store live', 'Snap Store & macOS', 'App/URL & idle detection', 'Screenshots & camera verification'],
    links: {
      msStore: 'https://apps.microsoft.com/detail/9N3VP429W7QD?hl=en-us&gl=US&ocid=pdpshare',
      tracker: 'https://tracker.trackpilotai.com/',
      site: 'https://trackpilotai.com/',
    },
    stores: ['Microsoft Store', 'Snap Store (Linux)', 'macOS App Store'],
  },
  {
    title: 'Social Rocket AI',
    tag: 'AI Studio & Uptime',
    color: '#f43f5e',
    desc: 'AI social media management and infrastructure monitoring suite. Generates on-brand content with AI, schedules posts across 5 platforms, manages agency clients, and monitors website/SSL uptime.',
    tech: ['React Native', 'OpenAI/Gemini', 'Social APIs', 'Stripe', 'Biometrics', 'Uptime Monitor'],
    feats: ['Google Play live', 'AI image & captions', 'Multi-client agency', '10s uptime & SSL alerts'],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.appliconsoft.socialrocketai&pcampaignid=web_share',
    },
  },
  {
    title: 'Wholesale EZ (Supplier App)',
    tag: 'B2B E-Commerce',
    color: '#10b981',
    desc: 'B2B wholesale e-commerce and supplier management app enabling businesses to manage products, bulk order placement, invoicing, and real-time QuickBooks integration.',
    tech: ['React Native', 'QuickBooks API', 'Redux', 'REST APIs', 'Order Management'],
    feats: ['Google Play live', 'QuickBooks sync', 'Real-time catalog', 'Invoicing & reports'],
    links: {
      play: 'https://play.google.com/store/apps/details?id=wholesaleez.wholesaleezapp.supplierapp&pcampaignid=web_share',
    },
  },
  {
    title: 'ProAdvisorCoach (PACx)',
    tag: 'EdTech & Gamification',
    color: '#8b5cf6',
    desc: 'Next-generation professional coaching and gamified learning platform with interactive coursework, assignment grading, real-time 1-on-1 coach chat, and competitive leaderboards.',
    tech: ['React Native', 'Gamification Engine', 'Real-time Chat', 'Redux Toolkit', 'Push Notifications'],
    feats: ['Google Play live', 'Gamified streaks', 'Direct coach messaging', 'Interactive assignments'],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.appliconsoft.proadvisorcoach&pcampaignid=web_share',
    },
  },
  {
    title: 'ROI Mobile App',
    tag: 'Mobile SaaS',
    color: '#a78bfa',
    desc: 'SaaS React Native app with task management, milestones, meetups, channels, video-watching services and dynamic form creation.',
    tech: ['React Native', 'Zoom', 'AI Chatbot', 'Voice Assistant'],
    feats: ['Dynamic forms', 'Social integrations', 'Payments', 'Notifications'],
  },
]

export const skills = [
  { group: 'Mobile Development', items: ['React Native', 'JavaScript', 'TypeScript', 'React Native CLI', 'Expo', 'Google Play Store', 'Offline First'] },
  { group: 'Desktop & Systems', items: ['Tauri', 'Rust', 'Microsoft Store', 'Snap Store (Linux)', 'macOS App Store', 'OS-Level Events', 'System Tray'] },
  { group: 'Web & Cloud ERP', items: ['React', 'TypeScript', 'Responsive UI', 'Web Dashboards', 'Double-Entry Accounting', 'REST APIs'] },
  { group: 'FinTech & Payments', items: ['Stripe In-App Subscriptions', 'QuickBooks API', 'Authorize.Net', 'Tax Automation (Sales/WHT/FED)'] },
  { group: 'AI & Real-Time', items: ['AI Content Engines', 'Voice Assistants', 'AI Chatbots', 'Pusher WebSockets', 'Real-Time Sync'] },
  { group: 'Security & Monitoring', items: ['Biometric Auth', 'SSL/Uptime Monitoring', 'Keyboard/Mouse Hooks', 'Screenshots & Privacy Blur', 'RBAC'] },
  { group: 'State & Storage', items: ['Redux Toolkit', 'RTK Query', 'Redux Persist', 'AsyncStorage', 'Offline Queues'] },
  { group: 'DevOps & Tools', items: ['Git', 'CI/CD Pipelines', 'Code Signing', 'Multi-Store Deployment', 'Performance Tuning'] },
]

export const education = {
  degree: 'BS Computer Science',
  school: 'Virtual University of Pakistan',
  period: 'Oct 2017 - Dec 2022',
}

export const certs = [
  'MS Office Foundation CIT (2023)',
  'Certificate in Information Technology (CIT), NAVTTC with UET Lahore',
  'Computer Hardware, Repair & Networking Professional, PVTC (2021-2022)',
  'Social Media Marketing, E-Rozgar with PITB (2024)',
  'Silver Medal, Branis IT Competition',
]

export const languages = ['English: Full Professional', 'Urdu: Native']
