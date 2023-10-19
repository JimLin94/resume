'use client';

import { useEffect, useReducer, useRef } from 'react';
import cx from 'classnames';

import Home from '@components/Home';
import About from '@components/About';
import Skills from '@components/Skills';
import Experience from '@components/Experience';
import Avatar from '@components/Avatar';
import MobileHeader from '@components/Headers/MobileHeader';

import defaultConsole from '@utils/defaultConsole';
import throttle from '@utils/throttle';
import { PROFILE_IMG_PATH } from '@constants/config';

enum ActionTypes {
  toggleMobileSidebar,
  ScrollToBlockId,
}

interface State {
  shouldShowSidebar: boolean;
  activeBlock: number;
}

const initialState: State = {
  shouldShowSidebar: false,
  activeBlock: 0,
};

type Action = {
  type: ActionTypes;
  payload?: any;
};

const SCROLL_MARGIN_TOP = 50;
let nav: JSX.Element[] = [];
let content: JSX.Element[] = [];

const contentNavMap = [
  {
    menu: <span>Home</span>,
    content: <Home />,
  },
  {
    menu: <span>About</span>,
    content: <About />,
  },
  {
    menu: <span>Skills</span>,
    content: <Skills />,
  },
  {
    menu: <span>Work Experience</span>,
    content: <Experience />,
  },
];

contentNavMap.forEach((n, idx) => {
  nav.push(n.menu);
  content.push(
    <div key={idx} id={`${idx}`}>
      {n.content}
    </div>
  );
});

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.toggleMobileSidebar:
      return {
        ...state,
        shouldShowSidebar: !state.shouldShowSidebar,
      };
    case ActionTypes.ScrollToBlockId:
      return {
        ...state,
        activeBlock: action.payload,
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const blockOffset = useRef<{ offsetTop: number; divHeight: number }[]>([]);

  const handleClickNav = (navIdx: number) => (e: React.MouseEvent) => {
    e.preventDefault();

    const targetBlock = document.getElementById('' + navIdx);

    if (targetBlock) {
      window.scrollTo({
        top: targetBlock.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const renderNav = nav.map((n, idx) => (
    <a
      key={idx}
      className={cx(
        { active: state.activeBlock === idx },
        'outline-none decoration-0'
      )}
      onClick={handleClickNav(idx)}
      role="button"
    >
      {n}
    </a>
  ));

  const handleToggleSidebar = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({
      type: ActionTypes.toggleMobileSidebar,
    });
  };

  const handleScroll = throttle(function () {
    for (const idx in blockOffset.current) {
      if (
        window.scrollY >
          blockOffset.current[idx].offsetTop - SCROLL_MARGIN_TOP &&
        blockOffset.current[idx].offsetTop +
          blockOffset.current[idx].divHeight >
          window.scrollY
      ) {
        dispatch({
          type: ActionTypes.ScrollToBlockId,
          payload: +idx,
        });
      }
    }
  }, 1000);

  useEffect(() => {
    const blockOffsetY = [];

    for (const idx in content) {
      const block = document.getElementById('' + idx);

      if (block) {
        blockOffsetY.push({
          offsetTop: block.offsetTop,
          divHeight: block.clientHeight,
        });
      }
    }

    blockOffset.current = blockOffsetY;
    defaultConsole();
  }, []);

  useEffect(() => {
    if (blockOffset.current.length > 1) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [blockOffset.current]);

  return (
    <main className="app">
      <div className={cx('main', { 'offset-right': state.shouldShowSidebar })}>
        <MobileHeader onClick={handleToggleSidebar} />
        {content}
      </div>
      <div
        className={cx('header-wrapper', { mDisplay: state.shouldShowSidebar })}
      >
        <div className="header">
          <div className="close" onClick={handleToggleSidebar} />
          <Avatar link={PROFILE_IMG_PATH} size="m" />
          <h2 className="text-4xl leading-[6rem]">Jim Lin</h2>
          <p className="uppercase">Front-end Developer</p>
          <nav className="nav-content">{renderNav}</nav>
        </div>
      </div>
      <div
        className={cx('content-cover', { mDisplay: state.shouldShowSidebar })}
        onClick={handleToggleSidebar}
      />
    </main>
  );
}
