import { h } from 'preact';
import { useEffect } from 'preact/compat';
import {PROFILE_IMG_LINK} from 'constants/config';
import './App.scss';

export default function App() {
  useEffect(() => {
    console.log('MOUNTED');
  }, []);

  return (
    <div className="app">
      <div className="main">
        <div className="m-header">
          <button>
            <span />
            <span />
            <span />
          </button>
          <div className="profile" style={{ backgroundImage: `url(${PROFILE_IMG_LINK})`}} />
          <h2>Jim Lin</h2>
        </div>
      </div>
      <div className="header">
        Header
      </div>
    </div>
  );
}