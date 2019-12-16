import { h } from 'preact';
import { useEffect } from 'preact/compat';

export default function App() {
  useEffect(() => {
    console.log('MOUNTED');
  }, []);

  return <div>App</div>;
}