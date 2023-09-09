/*import Head from 'next/head';
import Link from 'next/link';
import Search from '@mui/icons-material/Search';
import EventItem from '../../components/events/EventItem';
import FeatureEvent from '../../components/events/FeatureEvent';
import { Event } from '../../lib/types';
import { getAllEvents } from '../api/events';
import { GetServerSideProps } from 'next';

interface EventsPageProps {
  events: Event[];
}

/**
 * A page that shows a searchable list of past events.
 /
export default function EventsPage({ events }: EventsPageProps) {
  const futureEvents: Event[] = [];
  const onGoingEvents: Event[] = [];
  const pastEvents: Event[] = [];
  const pastEventsCols = [[], [], []];

  events.forEach(function (eachEvent) {
    const startTime = new Date(eachEvent.startDate);
    const endTime = new Date(eachEvent.endDate);
    const timeNow = new Date();
    if (endTime < timeNow) pastEvents.push(eachEvent);
    else if (timeNow < startTime) futureEvents.push(eachEvent);
    else onGoingEvents.push(eachEvent);
  });

  const pastEventCards = pastEvents.map((event) => {
    return (
      <div key={event.id} className="">
        <FeatureEvent key={event.id} event={event} />
      </div>
    );
  });

  for (let i = 0; i < pastEventCards.length; i++) {
    pastEventsCols[i % 3].push(pastEventCards[i]);
  }
  const futureEventCards = futureEvents.map((event) => {
    return <FeatureEvent key={event.id} event={event} />;
  });

  const onGoingEventCards = onGoingEvents.map((event) => {
    return <FeatureEvent key={event.id} event={event} onGoing={true} />;
  });

  let pastEventsDiv;
  if (pastEvents.length == 0) {
    pastEventsDiv = <div>There are no past events</div>;
  } else {
    pastEventsDiv = (
      <div className="flex flex-row flex-wrap">
        <div className="flex flex-col w-1/3 min-w-full xl:min-w-0">{pastEventsCols[0]}</div>
        <div className="flex flex-col w-1/3 min-w-full xl:min-w-0">{pastEventsCols[1]}</div>
        <div className="flex flex-col w-1/3 min-w-full xl:min-w-0">{pastEventsCols[2]}</div>
      </div>
    );
  }

  let upComingEventDiv;
  if (futureEvents.length == 0) {
    upComingEventDiv = <div>No upcoming events as of yet, Please check back again!</div>;
  } else {
    upComingEventDiv = (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start">
        {futureEventCards.reverse()}
      </div>
    );
  }

  let onGoingEventDiv;
  if (onGoingEvents.length != 0) {
    onGoingEventDiv = (
      <section className="bg-ais-light-gray py-8">
        <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-2">
          <div className="text-3xl font-bold mb-4">Ongoing Events</div>
          {onGoingEventCards}
        </div>
      </section>
    );
  }

  return (
    <div>
      <Head>
        <title>Events &ndash; AIS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content=" We host workshops, seminars, and social events to help students learn about artificial
          intelligence. Take a look at our past, on-going or future events. "
        />
      </Head>
      <main className="min-h-screen bg-ais-light-gray">
        <section className="py-8 bg-ais-blue-gray">
          {/* Hero /}
          <div className="mx-auto max-w-sm sm:max-w-md md:max-wgetStaticProps-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-8 px-2">
            <div className="mt-2 mb-8 text-5xl font-bold">Events</div>
            <div className="text-xl">
              We host workshops, seminars, and social events to help students learn about artificial
              intelligence.
            </div>
            <div className="text-xl">See upcoming events and look through event archives here.</div>
            {/* TODO: SEARCH
          
          <div className="flex rounded-md shadow-md bg-white">
            <input
              className="inline-block flex-1 p-4 rounded-l-md focus:outline-none"
              type="search"
              name="search"
              placeholder="Search for an event"
            />
            <button className="inline-block mr-4 my-4">
              <Search />
            </button>
          </div> /}
          </div>
        </section>
        {onGoingEventDiv}
        <section className="bg-ais-light-gray py-8 px-2">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-2">
            <div className="text-3xl font-bold mb-4">Upcoming Events</div>
            {upComingEventDiv}
          </div>
        </section>
        <section className="bg-ais-light-gray py-8 px-2">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-2">
            <div className="text-3xl font-bold mb-4">Event Archive</div>
            {pastEventsDiv}
          </div>
        </section>
      </main>
    </div>
  );
}

/**
 * Fetch event information for the EventsPage.
 /
export async function getServerSideProps() {
  const allEvents = await getAllEvents();
  //   [
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'coverImage',
  //   'excerpt',
  // ]

  return {
    props: {
      events: allEvents,
    },
  };
}*/

import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { getDemos } from '../api/projects';
import { ProjectDemo } from '../../lib/types';
import { transform } from 'typescript';
import { useTransition, animated } from '@react-spring/web';
import styles from '../../style/projects.module.css';
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
export default function EventsPage({ demos }: DemoPageProps) {
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
