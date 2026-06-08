import './styles.css';

export default function About() {
  return (
    <div>
      <div className="sec-head">
        <h2>About</h2>
        <span className="meta">Who you&apos;d be working with</span>
      </div>
      <div className="about-card">
        <p className="about-text">
          I thrive in collaborative, multi-national settings — steering projects
          in sync with client blueprints and turning complex challenges into
          shipped features. My work spans{' '}
          <strong>cloud security in micro-frontend platforms</strong>,{' '}
          <strong>performance &amp; Web Vitals</strong>, and{' '}
          <strong>SEO-driven growth</strong>. I care about clean architecture,
          comprehensive testing, and simple documentation that keeps teams fast.
        </p>
        <div className="chips" style={{ marginTop: '22px' }}>
          <span className="chip">Micro-frontends</span>
          <span className="chip">Cloud security</span>
          <span className="chip">Performance</span>
          <span className="chip">SEO</span>
          <span className="chip">B2B platforms</span>
          <span className="chip">User-Driven Development</span>
        </div>
      </div>
    </div>
  );
}
