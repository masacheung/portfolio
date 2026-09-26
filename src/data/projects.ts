export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const Projects: Project[] = [
  {
    name: 'Quick History',
    tagline: 'AI-assisted rewrite: Java → JavaScript',
    description:
      'A legacy-modernization rewrite of a trading history application, from Java to JavaScript. Leveraged AI-assisted development to accelerate the port while keeping behavior faithful to the original system.',
    highlights: [
      'Rewrote the application from Java to JavaScript with AI assistance, cutting porting effort.',
      'Re-plumbed trade history and order history onto a different data source, decoupling the app from the legacy pipeline.',
      'Kept the user-facing history experience identical while changing the plumbing underneath.',
    ],
    tech: ['JavaScript', 'AI-assisted rewrite', 'Data integration', 'Legacy modernization'],
    links: [
      { label: 'Talk about it', href: 'https://www.linkedin.com/in/man-tat-masa-cheung-725b39b8/' },
    ],
    featured: true,
  },
  {
    name: 'Volume Match',
    tagline: 'Global volume-based trading platform · ~4 years',
    description:
      'A JavaScript trading platform for volume-matched auctions of bonds and rates. I served as the primary engineer and led its expansion from a UK-only tool into a global system.',
    highlights: [
      'Architected the expansion from UK-centric to a global trading system — market reach grew 800%, client base 500%.',
      'Built trading flows for Interest Rate Options, UK/EU Inflation, and European Government Bonds — entirely new product lines.',
      'Designed the drag-and-drop UI for custom spread instruments (flexible 1:1 or default weighting) integrated with server-side instrument creation APIs.',
    ],
    tech: ['JavaScript', 'React', 'WebSockets', 'Trading systems'],
    links: [
      { label: 'Resume', href: '/resume.pdf' },
    ],
    featured: true,
  },
  {
    name: 'Product Builder',
    tagline: 'Mission-critical auction platform · ~2 years',
    description:
      'A React application for launching and configuring auctions. As its sole owner, I lead its roadmap, sprint planning, and cross-time-zone stakeholder alignment.',
    highlights: [
      'Sole owner: roadmap, Agile sprint planning across multiple time zones, and engineering/business alignment.',
      'End-to-end delivery of React auction interfaces, coordinating Java-side auction launches.',
      'Rigorous WebSocket message validation for reliability and throughput; TDD as the standard for new work.',
    ],
    tech: ['React', 'Redux', 'TypeScript', 'WebSockets', 'TDD'],
    links: [
      { label: 'Resume', href: '/resume.pdf' },
    ],
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
  },
];
