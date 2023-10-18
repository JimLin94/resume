import Image from 'next/image';
import Block from '@components/Block';
import ButtonLink from '@components/Button/ButtonLink';
import { GITHUB_URL, LINKEDIN_URL } from '@constants/config';

const About = () => (
  <Block theme="white">
    <h2 className="title-decoration text-2xl leading-[2rem] mb-12">About</h2>
    <p className="my-1">
      <label>Name:</label> <span>Jim Lin</span>
    </p>
    <p className="my-1">
      <label>Birthday:</label> <span>4 September, 1987</span>
    </p>
    <p className="my-1">
      <label>location:</label> <span>Taipei, Taiwan</span>
    </p>
    <p className="my-1">
      <label>Email:</label> <span>jimlin7694@gmail.com</span>
    </p>
    <hr className="my-6" />
    <div className="flex flex-col text-center md:flex-row md:text-left">
      <ButtonLink href={LINKEDIN_URL}>
        <span className="align-middle text-lg">
          <Image
            src="/linkedin.svg"
            alt="Linkedin Icon"
            width={20}
            height={20}
            className="inline-block mr-1 pb-1"
          />
          Linkedin
        </span>
      </ButtonLink>
    </div>
    <span className="mx-4 hidden md:visible">|</span>
    <div className="flex flex-col text-center md:flex-row md:text-left">
      <ButtonLink href={GITHUB_URL}>
        <span className="align-middle text-lg">
          <Image
            src="/github.svg"
            alt="GitHub Icon"
            width={20}
            height={20}
            className="inline-block mr-1 pb-1"
          />
          GitHub
        </span>
      </ButtonLink>
    </div>
  </Block>
);

export default About;
