/**
 * content.ts
 * ---------------------------------------------------------------------------
 * Single source of truth for editable copy on the DLG homepage.
 * Component structure is driven by this data, so text, links, and ordering
 * can be changed here without touching the UI components.
 *
 * Note: Proof-point figures below are PLAN-PROVIDED POSITIONING numbers,
 * not independently verified statistics. They are grouped together under
 * `positioning.proofPoints` so they are trivial to update.
 */

export const brand = {
  name: 'DEBATE LEADERS GLOBAL',
  shortName: 'DLG',
  wordmarkTop: 'DEBATE LEADERS',
  wordmarkBottom: 'GLOBAL',
}

export const navLinks = [
  { label: 'About', href: '#purpose' },
  { label: 'Services', href: '#services' },
  { label: 'Insights', href: '#insights' },
  { label: 'Global Network', href: '#network' },
  { label: 'Contact', href: '#contact' },
] as const

export const images = {
  hero: '/images/hero-debate.jpg',
  purpose: '/images/students-study.jpg',
  network: '/images/lecture-hall.jpg',
  classroom: '/images/classroom.jpg',
  meeting: '/images/meeting.jpg',
  campus: '/images/campus.jpg',
} as const

/* ------------------------------------------------------------------ Hero */

export const hero = {
  eyebrow: 'DEBATE LEADERS GLOBAL',
  headline: 'Building Stronger Debate Organizations. Transforming Student Futures.',
  copy: 'Debate Leaders Global helps schools, universities, nonprofits, leagues, and governments design, strengthen, and sustain world-class debate programs through expert consulting, strategic planning, leadership development, and organizational excellence.',
  primaryCta: 'Schedule a Blueprint Assessment',
  primaryCtaHref: '#contact',
  secondaryText: 'Explore our approach',
  secondaryHref: '#purpose',
  // Plan-provided positioning figures — not independently verified.
  proofPoints: [
    { value: '50+', label: 'Years Combined Experience' },
    { value: '60+', label: 'Countries Served' },
    { value: 'Global', label: 'Network of Debate Experts' },
  ],
}

/* -------------------------------------------------------------- Purpose */

export const purpose = {
  title: 'Debate changes lives. Organizations still struggle to survive.',
  copy: 'Debate develops critical thinking, communication, confidence, leadership, civic engagement, and workforce readiness. Yet many organizations lack the governance, funding, operating systems, partnerships, and leadership capacity needed to endure.',
  stages: [
    {
      step: '01',
      title: 'Debate changes lives',
      copy: 'Communication, critical thinking, confidence, and civic engagement transform how students show up in the world.',
    },
    {
      step: '02',
      title: 'Programs often begin through passion',
      copy: 'A committed coach or a visionary educator starts something meaningful — often without a durable operating model.',
    },
    {
      step: '03',
      title: 'Capacity gaps stall growth',
      copy: 'Without governance, funding, systems, and leadership capacity, momentum fades and impact plateaus.',
    },
    {
      step: '04',
      title: 'DLG provides the blueprint',
      copy: 'We help organizations build the sustainable foundations that turn passion into lasting institutions.',
    },
  ],
}

/* ------------------------------------------------------------- Services */

export const services = {
  title: 'End-to-end expertise for sustainable debate organizations',
  items: [
    {
      title: 'Organizational Development',
      copy: 'Strategic planning, governance, operational excellence, policy, and risk management.',
      icon: 'building2',
    },
    {
      title: 'Program Design',
      copy: 'Curriculum, teacher training, coach certification, league design, and tournament systems.',
      icon: 'layers',
    },
    {
      title: 'Leadership Development',
      copy: 'Executive coaching, board development, leadership institutes, succession planning, and change management.',
      icon: 'users',
    },
    {
      title: 'Fund Development',
      copy: 'Major gifts, grants, corporate partnerships, campaign strategy, and donor stewardship.',
      icon: 'heartHandshake',
    },
    {
      title: 'Communications',
      copy: 'Brand development, storytelling, media relations, social media, and community engagement.',
      icon: 'megaphone',
    },
    {
      title: 'Government & Institutional Relations',
      copy: 'Advocacy, public funding, policy development, and international collaborations.',
      icon: 'landmark',
    },
    {
      title: 'Crisis Services',
      copy: 'Rapid response, recovery, conflict resolution, reputation management, and emergency planning.',
      icon: 'shieldAlert',
    },
    {
      title: 'Technology Integration',
      copy: 'AI guidance, organizational assessments, dashboards, online learning, and a knowledge library.',
      icon: 'cpu',
    },
  ],
}

/* ------------------------------------------------------------- Products */

export const products = {
  title: 'Specialized products. Repeatable value.',
  items: [
    {
      name: 'Blueprint Assessment™',
      summary: 'A comprehensive organizational health review across governance, finance, programming, fundraising, operations, marketing, and leadership.',
      detail:
        'A structured diagnostic that scores organizational health across seven domains and produces a prioritized roadmap your board and leadership can act on with confidence.',
    },
    {
      name: 'Debate Health Index™',
      summary: 'Annual benchmarking for organizational sustainability.',
      detail:
        'A recurring benchmarking tool that tracks sustainability trends over time, letting you compare progress against global peers and demonstrate impact to funders.',
    },
    {
      name: 'Rapid Response Consulting™',
      summary: 'Emergency support for organizations facing high-stakes challenges.',
      detail:
        'On-call senior expertise for crises — from governance failures and funding gaps to public reputation issues — deployed quickly to protect mission and momentum.',
    },
    {
      name: 'Debate Excellence Certification™',
      summary: 'Recognition for best-in-class debate organizations worldwide.',
      detail:
        'A credible, externally validated standard that signals operational maturity and institutional quality to partners, funders, and governments.',
    },
    {
      name: 'Leadership Academy™',
      summary: 'Executive education for leaders across the debate ecosystem.',
      detail:
        'Cohort-based executive education covering governance, strategy, fundraising, and change leadership for the people building debate organizations.',
    },
  ],
}

/* ------------------------------------------------------- Global Network */

export const network = {
  title: 'A global network built for local impact',
  copy: 'DLG brings together senior expertise, regional partnerships, and institutional insight to help debate organizations thrive in diverse local contexts.',
  regions: ['North America', 'Europe', 'Africa', 'Middle East', 'Asia-Pacific', 'Latin America'],
}

/* ---------------------------------------------------------- AI Advisor */

export const aiAdvisor = {
  title: 'Meet the DLG AI Advisor',
  copy: 'Whether you are launching a new debate initiative, strengthening an existing program, seeking funding, preparing for accreditation, or navigating an organizational challenge, the DLG AI Advisor helps connect you to the right next step.',
  // Simulated conversation prompts. These drive the mockup UI only and do
  // NOT imply a live AI service is connected (see AISection.tsx comment).
  prompts: [
    'Launch a Debate Program',
    'Improve an Existing Program',
    'Board Development',
    'Funding Strategy',
  ],
  welcomeMessage: 'Welcome to Debate Leaders Global. How can we help today?',
}

/* ------------------------------------------------------------ Insights */

export const insights = {
  title: 'Blueprints for Sustainable Debate Programming',
  copy: 'A monthly point of view for leaders building the future of debate.',
  topics: [
    'Executive Perspective',
    'Debate Innovation',
    'Board Spotlight',
    'Funding Opportunities',
    'AI & Debate',
    'Global Partner Profile',
  ],
  emailPlaceholder: 'Your work email',
  cta: 'Receive DLG insights',
  successMessage: 'Thank you — subscription functionality will be connected soon.',
}

/* ------------------------------------------------------------ Final CTA */

export const finalCta = {
  headline: 'Every child deserves the opportunity to discover their voice.',
  body: 'Debate Leaders Global exists to ensure the organizations making this possible are built to last.',
  cta: 'Schedule a Blueprint Assessment',
  ctaHref: '#contact',
  secondary: 'For institutions, funders, governments, and global partners.',
}

/* ------------------------------------------------------------- Footer */

export const footer = {
  mission:
    'Debate Leaders Global helps debate organizations around the world become sustainable, high-performing institutions.',
  // Placeholder contact links — replace with real institutional URLs before launch.
  social: {
    linkedin: '#', // TODO: replace with real LinkedIn profile URL
    email: '#', // TODO: replace with real contact email address
  },
  attribution: 'Image credits',
  attributionHref: '/ASSETS.md',
  copyright: '© 2026 Debate Leaders Global. All rights reserved.',
}