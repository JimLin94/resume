import { h, Fragment } from 'preact';
import {
  PROFILE_IMG_LINK,
  PDF_LINK,
  WORK_FROM_YEAR_TIME_STAMP,
} from 'constants/config';
import { calcCareerTimestampToYear } from 'utils/time';
import Block from 'components/Block/Block';
import Button from 'components/Button/Button';
import Avatar from 'components/Avatar/Avatar';
import LazyImage from 'components/LazyImage/LazyImage';

import './App.scss';

const NAV = [
  <span>About Me</span>,
  <span>My Skills</span>,
  <span>Experience</span>,
];

const careerTime = calcCareerTimestampToYear(WORK_FROM_YEAR_TIME_STAMP);

export default function App() {
  const handleClickNav = (navIdx: number) => () => {
    console.log(navIdx);
  };

  const renderNav = NAV.map((n, idx) => (
    <a onClick={handleClickNav(idx)}>{n}</a>
  ));

  const downloadPDF = () => {
    const link = document.createElement('a');

    link.href = PDF_LINK;
    link.download = 'jim-resume.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  };

  const goSourceCode = () => {
    location.href = 'https://github.com/JimLin94/resume';
  }

const renderTempBioBlock = (
  <Fragment>
    <p>
      I am Jim, web developer from Taipei, Taiwan. I have {careerTime} years
      experience of web development so far. Specialize in Front-end development.
    </p>
    <p className="margin-s">
      <label>Name:</label> <span>Jim Lin</span>
    </p>
    <p className="margin-s">
      <label>Birthday:</label> <span>4 September, 1987</span>
    </p>
    <p className="margin-s">
      <label>location:</label> <span>Taipei, Taiwan</span>
    </p>
    <p className="margin-s">
      <label>Email:</label> <span>jimlin7694@gmail.com</span>
    </p>
    <hr />
    <Button onClick={downloadPDF}>
      <span>Download CV</span>
    </Button>
  </Fragment>
);  

  return (
    <Fragment>
      <div className="main">
        <Block>
          <div className="tall center-content">
            <h2 className="super-lg">Hi, This is Jim Lin.</h2>
            <p>This is the resume page building by React.js.</p>
            <p>
              You're very welcome to download the source code to build your own
              one.
            </p>
            <hr />
            <Button onClick={goSourceCode}>
              <span>Download the source code</span>
            </Button>
          </div>
        </Block>
        <div className="temp-block">
          <Block theme="white">
            <h2 className="margin-bottom-lg">About Me</h2>
            <Avatar link={PROFILE_IMG_LINK} size="lg" />
            {renderTempBioBlock}
          </Block>
        </div>
        <Block theme="white">
          <h2 className="margin-bottom-lg">My Skills</h2>
          <div className="icons">
            <LazyImage url="/public/Javascript.svg" />
            <LazyImage url="/public/nodejs.svg" />
            <LazyImage url="/public/Typescript.svg" />
            <LazyImage url="/public/React.svg" />
            <LazyImage url="/public/sass.svg" />
            <LazyImage url="/public/Vue.svg" />
          </div>
          <div className="desc">
            <div>
              <p>Frequently used libs/frameworks/tools:</p>
              <ul>
                <li>React.js</li> <li>Redux.js</li> <li>Webpack.js</li>
                <li>Express.js</li> <li>Next.js</li>
                <li>TradingView.js</li> <li>Jest Unit Test</li>
                <li>Enzyme.js</li> <li>Typescript</li>
              </ul>
            </div>
            <div>
              <p>Occasionally used libs/frameworks:</p>
              <ul>
                <li>Vue.js</li>
                <li>React Native</li>
                <li>Storybook.js</li>
                <li>Web3.js</li>
              </ul>
            </div>
          </div>
        </Block>
        <Block theme="white">
          <h2 className="margin-bottom-lg">Experience</h2>
          <div className="timeline">
            <div className="spot">
              <div className="title">
                <p>2018 - Present</p>
              </div>
              <div className="content">
                <h3>Anue.com Inc.</h3>
                <p>Job title: Senior Front-End Developer.</p>

                <p>
                  DAU (Daily Active Users): ~450k (All web products) + ~50k (All
                  app products).
                </p>

                <h4>Main Products: </h4>

                <ul>
                  <li>https://www.cnyes.com</li>
                  <li>https://invest.cnyes.com</li>
                  <li>https://fund.cnyes.com </li>
                  <li>https://stock.cnyes.com</li>
                  <li>https://news.cnyes.com</li>
                  <li>https://www.cnyes.com/video</li>
                </ul>

                <h4>Services: </h4>
                <ul>
                  <li>Financial news web applications and apps.</li>
                  <li>Fund investment social web applications.</li>
                  <li>Forex exchange information web application.</li>
                  <li>Stock real-time information web application.</li>
                </ul>

                <h4>Responsibility: </h4>
                <ul>
                  <li>
                    Develop new web applications and maintain current web
                    applications.
                  </li>
                  <li>Maintain a React-Native App (1 year).</li>
                  <li>Maintain the products using React.js and Redux.</li>
                  <li>Update the products by adopting React.js v16 Hooks.</li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="spot">
              <div className="title">
                <p>2013 - 2018</p>
              </div>
              <div className="content">
                <h3>Wallace Academic Editing </h3>
                <p>Job title: Web Developer.</p>

                <p>DAU (Daily Active Users): ~5k</p>

                <h4>Main Products: </h4>

                <ul>
                  <li>https://www.editing.tw</li>
                </ul>

                <h4>Services: </h4>
                <ul>
                  <li>Thesis Editing</li>
                  <li>Thesis Translation</li>
                  <li>Publication.</li>
                </ul>

                <h4>Responsibility: </h4>
                <ul>
                  <li>Server maintenance.</li>
                  <li>Web development and maintenance.</li>
                  <li>Util development and maintenance.</li>
                </ul>
              </div>
            </div>
          </div>
        </Block>
      </div>
      <div className="header-wrapper temp-header-block">
        <div className="header">
          <Avatar link={PROFILE_IMG_LINK} size="m" />
          <h1>Jim Lin</h1>
          <p className="uppercase">Front-end Developer</p>
          {renderTempBioBlock}
        </div>
      </div>
    </Fragment>
  );
}
