import { h } from 'preact';
import './Button.scss';

interface Props {
  theme?: 'red' | 'white';
  onClick: () => void;
  children: JSX.Element[] | JSX.Element;
}

export default function Button({ theme = 'red', onClick, children }: Props) {
  return <button onClick={onClick}>{children}</button>;
}
