import { RESUME_XP } from '@constants/experience';
import './styles.css';

export default function Experience() {
  return (
    <div>
      <div className="sec-head">
        <h2>Work Experience</h2>
        <span className="meta">2013 — Present</span>
      </div>
      <div className="timeline">
        {RESUME_XP.map((entry) => (
          <article className="xp" key={entry.company}>
            <div className="xp-top">
              <div>
                <h3>
                  <span className="node" />
                  {entry.company}
                </h3>
                <div className="xp-role">{entry.role}</div>
              </div>
              <span className="period">{entry.period}</span>
            </div>
            <p className="xp-desc">{entry.desc}</p>
            <ul className="xp-resp">
              {entry.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="xp-tech">
              {entry.tech.split(', ').map((t) => (
                <span className="tech-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
