import Image from 'next/image';
import { GITHUB_REPO_NAME } from '@constants/config';
import './styles.css';

const CORE_STACK = [
  { src: `/${GITHUB_REPO_NAME}/Javascript.svg`, label: 'JavaScript' },
  { src: `/${GITHUB_REPO_NAME}/Typescript.svg`, label: 'TypeScript' },
  { src: `/${GITHUB_REPO_NAME}/React.svg`, label: 'React.js' },
  { src: `/${GITHUB_REPO_NAME}/nodejs.svg`, label: 'Node.js' },
  { src: `/${GITHUB_REPO_NAME}/sass.svg`, label: 'Sass' },
];

export default function Skills() {
  return (
    <div>
      <div className="sec-head">
        <h2>Skills</h2>
        <span className="meta">Tools I reach for daily</span>
      </div>
      <div className="skill-grid">
        <div className="skill-card">
          <h3 className="skill-card-label">Core Stack</h3>
          <div className="icon-row">
            {CORE_STACK.map(({ src, label }) => (
              <div className="icon-tile" key={label}>
                <Image src={src} alt={label} width={38} height={38} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <div className="chip-group">
            <div className="chip-group-label">Languages</div>
            <div className="chips">
              <span className="chip">JavaScript</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Node.js</span>
              <span className="chip">HTML5</span>
              <span className="chip">CSS3</span>
            </div>
          </div>
          <div className="chip-group">
            <div className="chip-group-label">Technologies</div>
            <div className="chips">
              <span className="chip">React.js</span>
              <span className="chip">Next.js</span>
              <span className="chip">Nest.js</span>
              <span className="chip">AI Harness</span>
              <span className="chip">Micro Frontend</span>
              <span className="chip">Amazon AWS</span>
              <span className="chip">Unit Testing</span>
              <span className="chip">E2E Testing</span>
              <span className="chip">Git</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
