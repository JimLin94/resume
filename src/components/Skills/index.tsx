import React from 'react';
import Image from 'next/image';
import Block from '@components/Block';
import List from '@components/List';

import './style.css';

const Skills = () => (
  <Block theme="white">
    <h2 className="title-decoration text-2xl leading-[2rem] mb-12">Skills</h2>
    <div className="icons">
      <Image
        src="/Javascript.svg"
        alt="Javascript Logo"
        width={128}
        height={128}
      />
      <Image src="/nodejs.svg" alt="Node.js Logo" width={128} height={128} />
      <Image
        src="/Typescript.svg"
        alt="Typescript Logo"
        width={128}
        height={128}
      />
      <Image src="/React.svg" alt="React.js Logo" width={128} height={128} />
    </div>
    <div className="desc">
      <div>
        <p className="mb-4">Languages:</p>
        <List>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </List>
      </div>
      <div>
        <p className="mb-4">Technologies:</p>
        <List>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Redux.js</li>
          <li>Micro Frontend</li>
          <li>Amazon AWS</li>
          <li>Unit Testing</li>
          <li>E2E Testing</li>
          <li>Git</li>
        </List>
      </div>
    </div>
  </Block>
);

export default Skills;
