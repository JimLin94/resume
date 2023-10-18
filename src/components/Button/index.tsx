import React from 'react';
import './styles.css';

interface Props {
  theme?: 'red' | 'white';
  onClick: () => void;
  children: JSX.Element[] | JSX.Element;
}

const Button = ({ theme = 'red', onClick, children }: Props) => (
  <button
    className={`border-none btn ${theme}`}
    onClick={onClick}
    role="button"
  >
    {children}
  </button>
);

export default Button;
