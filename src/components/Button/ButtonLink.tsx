import React from 'react';
import './styles.css';

interface Props {
  href: string;
  children: JSX.Element[] | JSX.Element;
  theme?: 'red' | 'white';
  isDownload?: boolean;
}

const ButtonLink = ({ theme = 'red', children, isDownload, href }: Props) => (
  <a
    className={`border-none btn ${theme}`}
    download={isDownload}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default ButtonLink;
