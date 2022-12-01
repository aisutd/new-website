import Head from 'next/head';
import Link from 'next/link';
import Subscribe from '../components/join/Subscribe';
import KickoffModal from '../components/events/KickoffModal';
import * as React from 'react';
import Button from '@mui/material/Button';

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
      <main className="min-h-screen bg-ais-white">
        <section id="intro" className="h-[40rem] mb-20">
          <div className="bg-[url('/bg_rec.svg')] bg-no-repeat bg-cover h-[40rem] w-full flex">
            <div className="grid grid-cols-2 self-center py-20">
              <div className="container mx-auto text-center">
                <div className="font-[1000] font-cairo">
                  <span className="text-ais-navy text-5xl mx-sm-auto p-2 p-sm-3 p-md-5">
                    we are the
                  </span>
                  <span className="text-black text-7xl tracking-widest mx-sm-auto p-2 p-sm-3 p-md-5">
                    AIS
                  </span>
                </div>
                <div className="text-ais-dark-gray font-cairo text-2xl font-thin py-5 px-10 m-2">
                  Student led organization at The University of Texas at Dallas. Discussions, events, and competitions related to artificial intelligence.
                </div>
                <div className="pt-16">
                  <Button variant="contained" size="large" className="bg-[#24314D] hover:bg-slate-400 h-[4rem] w-[14rem] rounded-2xl">
                    <Link href="/join" className="font-[Hind Siliguri] font-bold text-white text-base tracking-wide">Join us now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0">
            <img src="ellipse.svg" className="h-[44rem] z-10"></img>
          </div>
          <div className="absolute top-[6rem] right-[6rem]">
            <img src="start_animation.svg" className="h-[36rem] z-0"></img>
          </div>
        </section>
        <section id="who-we-are" className="bg-ais-white pb-5 mb-5">
          <div className="h-[10rem] grid grid-cols-3 font-[Hind Siliguri] text-ais-navy">
            <div className="self-center text-center font-bold text-3xl px-10 ml-20">
              Who we are
            </div>
            <div className="col-span-2 self-center text-center font-semibold text-2xl px-10 mx-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </section>
        <section id="what-is-happening" className="bg-ais-white">
          <div className="mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-20 md:py-40 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            <div className="mx-5">
              <div className="text-4xl font-medium">Projects</div>
              <div className="text-l font-bold py-2">
                AIS is an incubator for cool self-guided AI projects.
              </div>
              <div>Know a bit about the field and want to apply your knowledge?</div>
              <div>
                The Projects Team organizes technical workshops and showcases their projects.
              </div>
              <div className="text-ais-black font-bold underline pt-4">
                {'>'} <Link href="/projects"> See projects</Link>
              </div>
              <div className="text-ais-light-blue font-bold underline pt-2">
                {'>'} <Link href="/join"> Join the team</Link>
              </div>
            </div>
            <div className="mx-5">
              <div className="text-4xl font-medium">Mentorship</div>
              <div className="text-l font-bold py-2">
                AIM is our semester-long guided AI mentorship experience.
              </div>
              <div>
                Over the course of a semester, our AI bootcamp will teach you the fundamentals of
                the field and help you apply your skills with a project.
              </div>
              <div>
                Have a project idea? Have motivation? We’ll match you with a mentor who can help.
              </div>
              <div className="text-ais-light-blue font-bold underline pt-4">
                {'>'} <Link href="/join"> Learn More</Link>
              </div>
            </div>
          </div>
        </section>
        <section id="events" className="">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl bg-transparent">
            <div className="bg-ais-white -mt-10 rounded-lg px-10 py-5 shadow-2xl">
              <div className="text-4xl font-medium">Events</div>
              <div className="text-l font-bold py-2">
                AIS hosts many events to expand your knowledge and to keep you connected to the
                field.
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-2">
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-md shadow-xl">
                  <img src="/hackai-3.jpg" className="rounded-t-md" />
                  <div className="text-white text-3xl font-semibold px-4 py-4">HackAI</div>
                  <div className="font-light text-white text-l px-4 ">
                    The largest AI hackathon in North Texas.
                  </div>
                  <div className="underline text-sm text-white px-4 py-2 rounded-b-md">
                    <Link href="https://hackai.org/">Learn More</Link>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-700 to-indigo-600 rounded-md shadow-xl">
                  <img src="/workshops.jpg" className="rounded-t-md" />
                  <div className="text-white text-3xl font-semibold px-4 py-4">Workshops</div>
                  <div className="font-light text-white text-l px-4 ">
                    Guided talks where we teach you AI fundamentals and more.
                  </div>
                  <div className="underline text-sm text-white px-4 py-2">
                    <Link href="/events">Learn More</Link>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-700 to-purple-600 rounded-md shadow-xl">
                  <img src="/socials.jpg" className="rounded-t-md" />
                  <div className="text-white text-3xl font-semibold px-4 py-4">
                    Socials {'&'} Seminars
                  </div>
                  <div className="font-light text-white text-l px-4 ">
                    Fun times and great discussions with students and faculty.
                  </div>
                  <div className="underline text-sm text-white px-4 py-2">
                    <Link href="/events">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="callToAction" className=" bg-ais-dark-gray text-white mt-16 py-10 px-2">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl">
            <div className="text-4xl font-medium ">Get Involved</div>
            <div className="py-2 flex gap-16 justify-between items-start">
              <div className="w-full max-w-2xl">
                <div className="text-lg py-4">
                  Join our mailing list to get email reminders about our upcoming events
                </div>
                {Subscribe()}
              </div>
              <div className="text-2xl font-semibold">
                Join the team
                <div className="flex justify-end">
                  <button className="transition duration-400 mx-auto ease-in-out bg-blue-400 hover:bg-ais-dark-blue my-4 px-6 py-4 rounded-full text-lg font-semibold">
                    <Link href="/join">Join</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
