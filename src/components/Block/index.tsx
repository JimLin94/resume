import React from 'react';
import './styles.css';

interface Props {
  theme?: 'white' | 'blue';
  children: React.ReactNode;
}

const Block = ({ theme = 'blue', children }: Props) => (
  <div className={`block ${theme}`} role="article">
    {children}
  </div>
);

export default Block;
