import React from 'react';
import './styles.css';

interface Props {
  size?: 'lg' | 'm' | 's';
  link: string;
}

const Avatar = ({ size = 's', link }: Props) => (
  <div
    className={`avatar ${size}`}
    style={{ backgroundImage: `url(${link})` }}
    role="img"
  />
);

export default Avatar;
