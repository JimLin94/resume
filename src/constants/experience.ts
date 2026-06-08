export interface XpEntry {
  period: string;
  company: string;
  role: string;
  desc: string;
  points: string[];
  tech: string;
}

export const RESUME_XP: XpEntry[] = [
  {
    period: '2024 — Present',
    company: 'Money Forward Inc.',
    role: 'Senior Frontend Engineer',
    desc: 'Money Forward, Inc. (株式会社マネーフォワード) develops financial software — automatic household account books, personal financial management, and cloud-based accounting solutions.',
    points: [
      'Contributing to migrating the codebase from the legacy service to the latest tech stacks.',
      'Collaborating with multi-national team members to establish a fast-iterate development environment.',
      'Utilizing User-Driven Development to achieve a competitive B2B platform.',
    ],
    tech: 'Amazon AWS, JavaScript, TypeScript, React.js, Next.js, Node.js, HTML5, CSS3, Git',
  },
  {
    period: '2020 — 2024',
    company: 'Trend Micro Inc.',
    role: 'Staff Frontend Developer',
    desc: 'Trend Micro (トレンドマイクロ株式会社) is a multinational cyber-security company. It develops enterprise security software for servers, containers, cloud environments, networks, and endpoints.',
    points: [
      'Spearheaded cross-regional teams building robust frontend applications for new services, improving scalability, engagement, and conversion.',
      'Elevated developer experience through affordable architectures, comprehensive testing, clean documentation, and consistent linting.',
      'Implemented strict security measures to fortify front-end apps against vulnerabilities, passing rigorous security audits.',
      'Drove project success by comprehending client requirements and offering architectural and performance enhancements.',
    ],
    tech: 'Amazon AWS, JavaScript, TypeScript, React.js, Redux.js, Unit Testing, E2E Testing, HTML5, CSS3, Git',
  },
  {
    period: '2018 — 2020',
    company: 'Anue.com Inc.',
    role: 'Senior Front-End Developer',
    desc: 'Anue.com leads the financial online-media market in Taiwan — financial news and real-time trading information. ~450k DAU across web products and ~50k across app products.',
    points: [
      'Pioneered SEO improvements across products, boosting visibility, engagement, and traffic.',
      'Championed UX by optimizing performance against Web Vitals, improving site speed and reducing bounce rate with systematic monitoring.',
      'Collaborated with external ad vendors to integrate ad features while maintaining peak performance and maximizing revenue.',
    ],
    tech: 'JavaScript, TypeScript, React.js, Next.js, Redux.js, SEO, Unit Testing, A/B Testing, HTML5, CSS3, Git',
  },
  {
    period: '2013 — 2018',
    company: 'Wallace Academic Editing',
    role: 'Web Developer',
    desc: 'Wallace Academic Editing provides academic publication services and relies heavily on the web to operate. ~5k DAU.',
    points: [
      'Enhanced SEO performance to maintain top-ranking search keywords, increasing traffic and engagement.',
      'Led fast-paced A/B testing and campaign-page development, boosting sales from the website.',
    ],
    tech: 'SEO, WordPress, PHP, HTML5, CSS3, JavaScript, jQuery, React.js, Git',
  },
];
