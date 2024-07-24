import React from 'react';
import Block from '@components/Block';
import List from '@components/List';
import './styles.css';

const Experience = () => (
  <Block theme="white">
    <h2 className="title-decoration text-2xl leading-[2rem] mb-12">
      Work Experience
    </h2>
    <div className="timeline">
      <div className="spot">
        <div className="title">
          <p>2024 - Present</p>
        </div>
        <div className="content">
          <h3>Money Forward Inc.</h3>
          <p>Senior Frontend Engineer</p>
          <p>
            Money Forward, Inc. (株式会社マネーフォワード) develops mobile
            application software. The Company produces automatic household
            account book softwares, household account book application
            softwares, and other products. Money Forward also provides personal
            financial management, cloud based accounting solutions, and other
            services.
          </p>
          <h4>Responsibility:</h4>
          <List>
            <li>
              Contribute to migrating the codebase from the legacy service to
              the latest tech stacks.
            </li>
            <li>
              Collaborate with multi-national team members to establish a
              fast-iterate development environment.
            </li>
            <li>
              Utilize User-Driven Development to achieve a competitive B2B
              platform.
            </li>
          </List>
          <p>
            Technologies: Amazon AWS, JavaScript, Typescript, React.js, Next.js,
            Node.js, HTML5, CSS3, Git
          </p>
        </div>
      </div>
      <hr className="my-6" />
      <div className="spot">
        <div className="title">
          <p>2020 - 2024</p>
        </div>
        <div className="content">
          <h3>Trend Micro Inc.</h3>
          <p>Job title: Staff Frontend Developer</p>
          <p>
            Trend Micro Inc. (トレンドマイクロ株式会社) is an American-Japanese
            multinational cyber security software company with global
            headquarters in Tokyo, Japan and Irving, Texas, United States, with
            regional headquarters and R&D centers in Asia, Europe, and North
            America. The company develops enterprise security software for
            servers, containers, cloud computing environments, networks, and end
            points. Its cloud and virtualization security products provide
            automated security for customers of VMware, Amazon AWS, Microsoft
            Azure,and Google Cloud Platform.
          </p>
          <h4>Responsibility:</h4>
          <List>
            <li>
              Spearheaded cross-regional members in developing robust frontend
              applications for growing new services, enhancing product
              scalability and user engagement, and contributing to a better
              conversion rate.
            </li>
            <li>
              Elevated development experience through the design of affordable
              architectures and comprehensive testing regimes, clean and simple
              documentation principles, clean coding practices, and consistent
              code linting, fostering a culture of high-quality, maintainable
              code.
            </li>
            <li>
              Implemented strict security measures within front-end applications
              to fortify against vulnerabilities and potential attacks, ensuring
              successful passage through rigorous security audits and bolstering
              customer trust.
            </li>
            <li>
              Drove project success by comprehending client requirements and
              offering architectural and performance enhancements to meet
              customer demands and address issues.
            </li>
          </List>
          <p>
            Technologies: Amazon AWS, JavaScript, Typescript, React.js,
            Redux.js, Unit Testing, E2E Testing, HTML5, CSS3, Git
          </p>
        </div>
      </div>
      <hr className="my-6" />
      <div className="spot">
        <div className="title">
          <p>2018 - 2020</p>
        </div>
        <div className="content">
          <h3>Anue.com Inc.</h3>
          <p>Job title: Senior Front-End Developer</p>
          <p>
            Anue.com Inc. is the company leading the financial online media
            market in Taiwan. The business covers financial news, real-time
            trading information, etc.
            <br />
            DAU (Daily Active Users): ~450k (All web products) + ~50k (All app
            products).
          </p>

          <h4>Responsibility: </h4>
          <List>
            <li>
              Pioneered SEO improvements across various products, boosting
              visibility and user engagement, leading to higher traffic and
              customer satisfaction.
            </li>
            <li>
              Championed user experience enhancement by progressively optimizing
              performance in alignment with Web Vitals principles, improving
              site speed, and reducing bounce rate with systematic monitoring.
            </li>
            <li>
              Collaborated with external ad vendors for smooth ad feature
              integration within products while maintaining peak performance,
              providing a seamless user experience while maximizing ad revenue.
            </li>
          </List>
          <p>
            Technologies: JavaScript, Typescript, React.js, Next.js, Redux.js,
            SEO, Unit Testing, A/B Testing, HTML5, CSS3, Git
          </p>
        </div>
      </div>
      <hr className="my-6" />
      <div className="spot">
        <div className="title">
          <p>2013 - 2018</p>
        </div>
        <div className="content">
          <h3>Wallace Academic Editing </h3>
          <p>Job title: Web Developer.</p>

          <p>
            Wallace Academic Editing provides many kinds of academic publication
            services and the company heavily relies on the internet to operate
            its service.
            <br />
            DAU (Daily Active Users): ~5k
          </p>

          <h4>Responsibility: </h4>
          <List>
            <li>
              Enhanced SEO performance to maintain top-ranking search keywords,
              leading to increased website traffic and customer engagement.
            </li>
            <li>
              Led fast-paced A/B testing iterations and campaign page
              development, boosting sales from the website and improving the
              bottom line.
            </li>
          </List>
          <p>
            Technologies: SEO, WordPress, PHP, HTML5, CSS3, JavaScript, JQuery,
            React.js, Git
          </p>
        </div>
      </div>
    </div>
  </Block>
);

export default Experience;
