import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import SpringyLaptop from '../components/homepage/SpringyLaptop';
import SlideInAIS from '../components/homepage/SlideInAIS';
import SlideInDescription from '../components/homepage/SlideInDescription';
import AnimatedJoinBtn from '../components/homepage/AnimatedJoinBtn';
import WhoWeAre from '../components/homepage/WhoWeAre';
import WhatIsHappening from '../components/homepage/WhatIsHappening';
import Events from '../components/homepage/Events';
import Subscribe from '../components/join/Subscribe';
import KickoffModal from '../components/events/KickoffModal';

/**
 * The root page for the organization website.
 *
 * This page contains an overview of the organization and links to our programs
 * and events.
 */
export default function HomePage() {
  return (
    <div>
      {/*<KickoffModal />*/}
      <Head>
        <title>Home &ndash; AIS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content="Welcome to the Artificial Intelligence Society at UTD. We make AI understandable and accessible to everyone"
        />
      </Head>
      <main className="min-h-screen bg-ais-white text-hind subpixel-antialiased overflow-x-hidden">
        <section id="intro" className="bg-[url('/bg_rec.svg')] bg-no-repeat bg-cover h-[24rem] w-full mb-10 lg:mb-20 sm:h-[34rem] sm:flex xl:h-[40rem]">
          <div className="grid w-full self-center lg:grid-cols-2 lg:pb-20 2xl:grid-cols-3">
            <div className="text-center 2xl:col-span-2">
              <div className="font-[1000] font-cairo sm:flex sm:justify-center">
                <div className="text-ais-navy text-5xl mt-5 p-2">
                  we are the
                </div>
                <div className="text-black text-7xl p-2">
                  <SlideInAIS duration="300"/>
                </div>
              </div>
              <div className="text-ais-dark-gray font-cairo text-2xl font-thin py-10 px-10 hidden sm:block lg:text-xl xl:text-2xl 2xl:mx-20">
                <SlideInDescription duration="400" delay="900"/>
              </div>
              <div className="pt-16 sm:pt-10">
                <AnimatedJoinBtn duration="500" delay="1300"/>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 h-[42rem] hidden lg:block  xl:h-[49rem]">
            <img src="ellipse.svg" className="h-full"/>
          </div>
          <SpringyLaptop />
        </section>
        <section id="who-we-are" className="bg-ais-white">
          <WhoWeAre duration="400"/>
        </section>
        <section id="what-is-happening" className="relative bg-[url('/bg_rec.svg')] bg-no-repeat bg-cover lg:h-[44rem]">
          <div className="relative w-full z-0 -top-8 sm:-top-10 md:-top-16 lg:-top-20 xl:-top-32 2xl:-top-40">
            <img src="white_blob_1.svg" className="bg-no-repeat bg-cover w-full"/>
          </div>
          <div className="absolute top-8 w-[11%] hidden xl:block">
            <img src="toroid.svg" className="w-full"/>
          </div>
          <div className="absolute bottom-20 right-0 hidden xl:block">
            <img src="round_cube.svg" className="h-60"/>
          </div>
          <WhatIsHappening speed="100"/>
          <div className="relative z-0 top-14 sm:top-16 md:top-20 lg:-top-2 xl:-top-10 2xl:-top-20">
            <img src="white_blob_2.svg" className="w-full bg-no-repeat bg-cover"></img>
          </div>
        </section>
        <section id="events" className="relative py-10">
          <div className="bg-ais-white text-center">
            <Events speed="100"/>
          </div>
        </section>
        <section id="callToAction" className="relative grid bg-ais-black h-[13rem] mt-[12rem]">
          <Paper className="absolute grid text-left rounded-3xl shadow-ais-black justify-self-center -top-[7.5rem] h-[15rem]" elevation={24}>
            <div className="justify-self-center self-center gap-16 px-16 lg:flex">
              <div className="max-w-[22rem] text-center md:text-left">
                <div className="text-ais-navy text-3xl font-bold pb-5 lg:pb-2">Want to get involved?</div>
                <div className="text-ais-dark-gray text-lg hidden xl:block">
                  Join our mailing list to get email reminders about our upcoming events.
                </div>
              </div>
              <div className="grid grow items-center justify-center md:flex lg:justify-self-right">
                <div>
                  {Subscribe()}
                </div>
                <div className="text-ais-dark-gray font-semibold text-center px-10 py-1">or</div>
                <Button variant="outlined" size="medium" style={{borderColor: "#24314D", borderRadius: "9px"}} className="grow w-[13rem] h-[3rem] hover:bg-slate-600">
                  <Link href="/join" className="text-ais-navy normal-case font-semibold tracking-wide">Join the Team</Link>
                </Button>
              </div>
            </div>
          </Paper>
        </section>
      </main>
    </div>
  );
}
