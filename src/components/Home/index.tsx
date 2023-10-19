import React from 'react';
import Block from '@components/Block';
import ButtonLink from '@components/Button/ButtonLink';

import { PDF_LINK, GITHUB_REPO_NAME } from '@constants/config';

const Home = () => (
  <Block>
    <div className="md:h-[550px] center-content" role="banner">
      <h1 className="title-decoration text-2xl leading-[2rem]" role="heading">
        Frontend Developer with 10 years of experience
      </h1>
      <p>
        A proficient Staff Frontend Developer with 10 years of experience and a
        rich history of driving project success across a spectrum of tech
        landscapes, I specialize in crafting exceptional frontend features,
        fortifying cloud security in micro-frontend platforms, and boosting SEO
        performance across diverse products. With a technical arsenal
        encompassing JavaScript, TypeScript, Node.js, React.js, and AWS, I
        thrive in collaborative settings, steering projects in sync with client
        blueprints and overcoming complex challenges
      </p>
      <hr className="my-6" />
      <ButtonLink isDownload href={`${GITHUB_REPO_NAME}/${PDF_LINK}`}>
        <span>Download CV</span>
      </ButtonLink>
    </div>
  </Block>
);

export default Home;
