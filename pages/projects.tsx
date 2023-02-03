import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { getDemos } from './api/projects';
import { ProjectDemo } from '../lib/types';
import { transform } from 'typescript';
import { useTransition, animated } from '@react-spring/web';
import styles from '../style/projects.module.css';
import { AlignHorizontalCenterOutlined } from '@mui/icons-material';

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) => `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;

interface DemoPageProps {
  demos: ProjectDemo[]; 
}

/**
 * A list of demoable projects.
 */
export default function ProjectsPage({ demos }: DemoPageProps) {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, set] = useState<string[]>([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(['Coming']), 1000));
    ref.current.push(setTimeout(() => set(['Soon']), 2000));
    ref.current.push(setTimeout(() => set(['Coming', 'Soon']), 3000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);
  return (
    <div>
      <Head>
        <title>Projects &ndash; AIS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content="An overview of all our AI/ML projects, including explanations and interactive demos."
        />
      </Head>

      {/*reacg-spring gooey effect */}
      <main className="flex flex-col justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="text-center font-bold w-9/12 h-full p-10 rounded-3xl shadow-lg shadow-slate-500 m-auto mt-auto">
          <p className="text-4xl font-bold text-slate-700 sm:visible lg:invisible text-center justify-center content-center sm:pt-9 mt-[100px]">
            Coming Soon
          </p>
          <img
            src="images/RoundCube-Blue-Glossy.png"
            className="w-30 float-right translate-x-20 translate-y-20 opacity-80 invisible lg:visible"
          />
          <img
            src="images/SuperToroid-2.png"
            className="w-30 float-left -translate-x-3/4 -translate-y-12 opacity-90 invisible lg:visible"
          />
          <div className={(styles.container, 'sm:invisible')}>
            <div className={(styles.main, 'sm:invisble')}>
              {transitions(({ innerHeight, ...rest }, item) => (
                <animated.div
                  className={
                    (styles.transitionsItem,
                    'flex flex-col justify-center items-center text-5xl invisible lg:visible sm:invisible')
                  }
                  style={rest}
                  onClick={reset}
                >
                  <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
                    {item}
                  </animated.div>
                </animated.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const demos = getDemos();

  return {
    props: {
      demos,
    },
  };
};
