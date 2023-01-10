import Head from 'next/head';
import Link from 'next/link';
import Subscribe from '../components/join/Subscribe';
import KickoffModal from '../components/events/KickoffModal';
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
import Events from '../components/homepage/Events'

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
      <main className="min-h-screen bg-ais-white text-hind subpixel-antialiased">
        <section id="intro" className="bg-[url('/bg_rec.svg')] bg-no-repeat bg-cover h-[40rem] w-full flex mb-20">
          <div className="grid grid-cols-2 self-center py-20">
            <div className="container mx-auto text-center">
              <div className="font-[1000] font-cairo flex justify-center">
                <span className="text-ais-navy text-5xl mt-5 p-2 p-sm-3 p-md-5">
                  we are the
                </span>
                <span className="text-black text-7xl mx-sm-auto p-2 p-sm-3 p-md-5">
                  <SlideInAIS duration="300"/>
                </span>
              </div>
              <div className="text-ais-dark-gray font-cairo text-2xl font-thin py-5 px-10 m-2">
                <SlideInDescription duration="400" delay="900"/>
              </div>
              <div className="pt-16">
                <AnimatedJoinBtn duration="500" delay="1300"/>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0">
            <img src="ellipse.svg" className="h-[48rem]"></img>
          </div>
          <SpringyLaptop />
        </section>
        <section id="who-we-are" className="bg-ais-white mb-8">
          <WhoWeAre duration="400"/>
        </section>
        <section id="what-is-happening" className="relative bg-[url('/bg_rec.svg')] bg-no-repeat bg-cover h-[42rem] mb-0">
          <div className="absolute -top-32 w-full z-0">
            <img src="white_blob_1.svg" className="bg-no-repeat bg-cover w-full" />
          </div>
          <div className="absolute top-10">
            <img src="toroid.svg" className="h-48"/>
          </div>
          <div className="absolute bottom-20 right-0">
            <img src="round_cube.svg" className="h-60"/>
          </div>
          <WhatIsHappening speed="100"/>
          <div className="relative top-14 z-0">
            <img src="white_blob_2.svg" className="w-full bg-no-repeat bg-cover"></img>
          </div>
        </section>
        <section id="events" className="relative inset-y-10 h-[50rem]">
          <div className="bg-ais-white text-center">
            <Events speed="100"/>
          </div>
        </section>
        <section id="callToAction" className="relative grid bg-ais-black h-[13rem] mt-20 py-10 px-2">
          <Paper className="absolute grid text-left rounded-3xl shadow-ais-black -inset-y-[7.5rem] h-[15rem] w-3/4 justify-self-center" elevation={24}>
            <div className="px-16 flex gap-16 self-center">
              <div className="max-w-[22rem]">
                <div className="text-ais-navy text-3xl font-bold pb-2">Want to get involved?</div>
                <div className="text-ais-dark-gray text-lg">
                  Join our mailing list to get email reminders about our upcoming events.
                </div>
              </div>
              <div className="flex grow justify-self-right">
                <Button variant="contained" size="large" className="grow self-center bg-ais-navy min-w-[13rem] min-h-[3rem] hover:bg-slate-600">
                  <Link href="/join" className="normal-case font-semibold tracking-wide">Subscribe Now</Link>
                </Button>
                <div className="text-ais-dark-gray font-semibold text-center self-center justify-self-center px-10">or</div>
                <Button variant="outlined" size="large" className="grow self-center border-ais-navy min-w-[13rem] min-h-[3rem] hover:border-ais-navy hover:bg-slate-100">
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
