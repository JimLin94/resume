import './styles.css';

export default function Hero() {
  return (
    <div className="hero">
      <span className="eyebrow">Frontend Engineering</span>
      <h1>
        Frontend Developer with <span className="hl">10 years</span> of building
        products people rely on.
      </h1>
      <p className="lead">
        A Staff Frontend Developer with a decade of experience driving project
        success across diverse tech landscapes. I specialize in crafting
        exceptional frontend features, fortifying cloud security in
        micro-frontend platforms, and boosting SEO performance — working in
        JavaScript, TypeScript, Node.js, React.js and AWS.
      </p>
      <div className="hero-actions">
        <a className="btn btn-solid" href="#experience">
          View experience
        </a>
        <a className="btn btn-line" href="mailto:jimlin7694@gmail.com">
          Get in touch
        </a>
      </div>
      <div className="stats">
        <div className="stat">
          <div className="num">
            10<span className="u">+</span>
          </div>
          <div className="lbl">Years of experience</div>
        </div>
        <div className="stat">
          <div className="num">4</div>
          <div className="lbl">Companies across TW &amp; JP</div>
        </div>
        <div className="stat">
          <div className="num">
            450<span className="u">k</span>
          </div>
          <div className="lbl">Peak daily active users served</div>
        </div>
      </div>
    </div>
  );
}
