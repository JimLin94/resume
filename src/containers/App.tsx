import { h, Fragment } from 'preact';
import { useEffect, useMemo } from 'preact/compat';
import { PROFILE_IMG_LINK } from 'constants/config';
import Block from 'components/Block/Block';

import './App.scss';

const NAV = [
  <span>About Me</span>,
  <span>Skills</span>,
  <span>Work Experience</span>,
];

export default function App() {
  useEffect(() => {
    console.log('MOUNTED');
  }, []);

  const handleClickNav = (navIdx: number) => () => {
    console.log(navIdx);
  };

  const renderProfile = (
    <div className="profile">
      <div
        className="avatar"
        style={{ backgroundImage: `url(${PROFILE_IMG_LINK})` }}
      />
      <h2>Jim Lin</h2>
    </div>
  );

  const renderNav = NAV.map((n, idx) => <a onClick={handleClickNav(idx)}>{n}</a>);

  return (
    <Fragment>
      <div className="main">
        <div className="m-header">
          <button>
            <span />
            <span />
            <span />
          </button>
          {renderProfile}
        </div>
        <Block>
          <div className="tall center-content">
            <h2>Hi, This is Jim Lin.</h2>
            <p>
              Working as a senior Front-end developer currently.
            </p>
          </div>
        </Block>
      </div>
      <div className="header">
        {renderProfile}
        <p className="uppercase">Front-end Developer</p>
        <nav>{renderNav}</nav>
      </div>
    </Fragment>
  );
}
