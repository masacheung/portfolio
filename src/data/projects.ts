export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
  image?: string;
};

export const Projects: Project[] = [
  {
    name: 'Quick History',
    tagline: 'Java → React & Redux · production delivery in four months',
    description:
      'Owned the rewrite of a legacy trade and order history application from Java to React and Redux. Implemented APIs, SQL queries, and Credit Match schema mappings, eliminating the Market Data dependency and delivering to production within four months.',
    highlights: [
      'Built APIs and SQL queries for trade and order history backed by Credit Match.',
      'Delivered the React and Redux rewrite to production within four months.',
    ],
    tech: ['React', 'Redux', 'JavaScript', 'SQL', 'APIs', 'Legacy modernization'],
    links: [{ label: 'Resume', href: '/resume.pdf' }],
    featured: true,
  },
  {
    name: 'Credit Match Entitlements',
    tagline: 'Java & Oracle · configurable trading permissions',
    description:
      'Delivered SEF/DTO access overrides in Java for a major trading desk within three days. Extended the solution with an Oracle configuration table in the DataDepot schema and cross-schema Credit Match entitlement checks.',
    highlights: [
      'Enabled Product Support to manage buyer and seller permissions by business, desk, and product.',
      'Delivered the initial trading desk access overrides within three days.',
    ],
    tech: ['Java', 'Oracle', 'SQL', 'Access controls'],
    links: [{ label: 'Resume', href: '/resume.pdf' }],
    featured: true,
  },
  {
    name: 'Volume Match',
    tagline: '2 → 7 desks · 6 → 22 layouts across the UK and US',
    description:
      'Partnered with trading desks and project managers to build reusable Vue.js and Backbone.js components and JSON-driven matrix, triangular, and list layout builders. Enabled expansion from 2 to 7 desks and from 6 to 22 layouts over three years.',
    highlights: [
      'Enabled live-auction spread and butterfly creation with drag-and-drop and search workflows.',
      'Integrated WebSocket updates, instrument naming, price calculation, and buy/sell order submission.',
    ],
    tech: ['Vue.js', 'Backbone.js', 'JavaScript', 'WebSockets', 'JSON'],
    links: [{ label: 'Resume', href: '/resume.pdf' }],
    featured: true,
  },
  {
    name: 'Product Builder',
    tagline: 'React auction tools · distributed team delivery',
    description:
      'Owned React development and delivery, coordinating sprint priorities across distributed teams. Built dynamic forms with reusable components and integrated instrument-enrichment services for storage in Credit Match’s Oracle database.',
    highlights: [
      'Built reusable dynamic forms and integrated instrument-enrichment services.',
      'Implemented a reusable API for weighted and unweighted spreads and butterflies, defining WebSocket contracts with backend engineers.',
    ],
    tech: ['React', 'JavaScript', 'Oracle', 'WebSockets', 'APIs'],
    links: [{ label: 'Resume', href: '/resume.pdf' }],
    featured: true,
  },
  {
    name: 'Deployment & Event Monitoring',
    tagline: 'GitLab CI/CD · one hour less manual monitoring per day',
    description:
      'Automated testing, Docker image publishing to Nexus, and Docker Compose deployments across eight development/QA environments, beta, and production. Built a Dockerized Node.js and Express service to capture user events and trade round-trip latency.',
    highlights: [
      'Enabled single-click releases and rollback to prior versions, restricting production deployments to Git tags.',
      'Integrated Prometheus metrics, PostgreSQL event logs, and Grafana dashboards and failure alerts, saving one hour of manual monitoring per day.',
    ],
    tech: ['Node.js', 'Express', 'Docker', 'GitLab CI/CD', 'Nexus', 'Prometheus', 'PostgreSQL', 'Grafana'],
    links: [{ label: 'Resume', href: '/resume.pdf' }],
    featured: true,
  },
  {
    name: 'MasaNote',
    tagline: 'Evernote-style note app (side project)',
    description:
      'A single-page note-taking app with a rich-text editor, image uploading, autosaving, and notebook organization.',
    highlights: [
      'BCrypt-hashed authentication with cryptographically strong session tokens.',
      'Customized ReactQuill for a clean WYSIWYG experience with native autosave.',
      'Unidirectional state management via React-Redux container/selector patterns.',
    ],
    tech: ['Rails', 'React', 'Redux', 'PostgreSQL', 'SCSS'],
    links: [{ label: 'GitHub', href: 'https://github.com/masacheung/MasaNote' }],
    image: '/masanote.png',
  },
  {
    name: 'Triolingo',
    tagline: 'Multilingual flash-card app (side project)',
    description:
      'A single-page flash-card app with dictionary, definitions, examples, synonyms, audio pronunciation, and a discussion board — across up to four languages.',
    highlights: [
      'Vocabulary search across English, Korean, Japanese, and Spanish with auto-generated definitions and audio.',
      'One-click flash-card creation from any dictionary result.',
      'Project lead for a three-person team (Frontend Lead + Backend Lead).',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    links: [{ label: 'GitHub', href: 'https://github.com/masacheung/Triolingo' }],
    image: '/triolingo.png',
  },
  {
    name: 'Dropping Down',
    tagline: 'One-player stair-descent game (side project)',
    description:
      'A one-player game: go down as many stairs as possible with 10 health points. Stairs are randomly generated — Normal, Trampoline, Trap, and Fake — each with different effects.',
    highlights: [
      'Randomized level generation with four stair types and distinct mechanics.',
      'Health-based game-over loop with restart flow.',
      'Built from scratch: JavaScript, NPM, Webpack.',
    ],
    tech: ['JavaScript', 'Webpack', 'Canvas'],
    links: [
      { label: 'GitHub', href: 'https://github.com/masacheung/dropping_down' },
      { label: 'Play it', href: 'https://masacheung.github.io/dropping_down/' },
    ],
    image: '/dropping.png',
  },
];
