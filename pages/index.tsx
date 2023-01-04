import Head from 'next/head';
import Link from 'next/link';
import Subscribe from '../components/join/Subscribe';
import KickoffModal from '../components/events/KickoffModal';
import * as React from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
                  <Link href="/join" className="font-bold text-white text-base tracking-wide">Join us now</Link>
                </Button>
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
        <section id="who-we-are" className="bg-ais-white mb-8">
          <div className="h-[10rem] grid grid-cols-3 text-ais-navy">
            <div className="self-center text-center font-bold text-3xl z-10">
              Who we are
            </div>
            <div className="col-span-2 self-center text-center font-semibold text-2xl mr-20 z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
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
          <div className="text-ais-navy text-3xl text-center font-bold pt-32 pb-12 z-10">
            What is happening
          </div>
          <div className="grid grid-cols-2 gap-20">
            <Paper className="text-center rounded-3xl shadow-lg shadow-ais-light-gray w-[30rem] justify-self-end">
              <div className="grid justify-items-center pt-10">
                <img src="bulb_head.svg" className="h-[50px]"/>
              </div>
              <div className="text-ais-navy text-3xl font-bold my-4">Projects</div>
              <div className="text-ais-dark-gray text-lg font-semibold px-5">
                Know a bit about the field and want to apply your knowledge? AIS is an incubator for cool self-guided AI projects. The Projects Team organizes technical workshops and showcases their projects.
              </div>
              <div className="text-ais-dark-gray text-right font-medium px-4 pt-8 pb-4">
                <Link href="/projects">Learn more <ArrowForwardIosIcon sx={{fontSize:17}} /></Link>
              </div>
            </Paper>
            <Paper className="text-center rounded-3xl shadow-lg shadow-ais-light-gray w-[30rem] justify-self-start">
              <div className="grid justify-items-center pt-10">
                <img src="friends.svg" className="h-[50px]"/>
              </div>
              <div className="text-ais-navy text-3xl font-bold my-4">Mentorship</div>
              <div className="text-ais-dark-gray text-lg font-semibold px-5">
                AIM is our semester-long guided AI mentorship. over the course of a semester, our AI bootcamp will teach you the fundamentals of the field and help you apply your skills with a project. Have a project idea? Have motivation?...
              </div>
              <div className="text-ais-dark-gray text-right font-medium px-4 pt-8 pb-4">
                <Link href="/projects">Learn more <ArrowForwardIosIcon sx={{fontSize:17}} /></Link>

                {/*not sure about above link, please correct if it is directed to the wrong place*/}

              </div>
            </Paper>
          </div>
          <div className="relative top-14 z-0">
            <img src="white_blob_2.svg" className="w-full bg-no-repeat bg-cover"></img>
          </div>
        </section>
        <section id="events" className="relative inset-y-10 h-[50rem]">
          <div className="bg-ais-white text-center">
            <div className="text-ais-navy text-3xl font-bold">Events</div>
            <div className="text-ais-dark-blue-gray text-2xl font-bold mt-5 mb-10">
              AIS hosts many events to expand your knowledge and to keep you connected to the field.
            </div>
            <div className="grid grid-cols-3 gap-6">
              <Paper className="text-left rounded-3xl shadow-xl shadow-ais-gray w-[24rem] justify-self-end">
                <div className="grid justify-items-center pt-6">
                  <img src="hack_ai_img.svg" className="h-[15rem]"/>
                </div>
                <div className="text-ais-navy text-2xl font-bold my-4 px-8">HackAI</div>
                <div className="text-ais-dark-gray text-lg font-medium px-8">
                  The largest AI hackathon in North Texas.
                </div>
                <div className="text-ais-dark-gray text-sm font-medium underline px-8 pt-8 pb-4">
                  <Link href="/projects">Learn more</Link>
                </div>
              </Paper>
              <Paper className="text-left rounded-3xl shadow-xl shadow-ais-gray w-[24rem] justify-self-center">
                <div className="grid justify-items-center pt-6">
                  <img src="workshop_img.svg" className="h-[15rem]"/>
                </div>
                <div className="text-ais-navy text-2xl font-bold my-4 px-8">Workshops</div>
                <div className="text-ais-dark-gray text-lg font-medium px-8">
                  Guided talks where we teach you AI fundamentals and more.
                </div>
                <div className="text-ais-dark-gray text-sm font-medium underline px-8 pt-8 pb-4">
                  <Link href="/projects">Learn more</Link>
                </div>
              </Paper>
              <Paper className="text-left rounded-3xl shadow-xl shadow-ais-gray w-[24rem] justify-self-start">
                <div className="grid justify-items-center pt-6">
                  <img src="workshop_img.svg" className="h-[15rem]"/>
                </div>
                <div className="text-ais-navy text-2xl font-bold my-4 px-8">Socials & Seminars</div>
                <div className="text-ais-dark-gray text-lg font-medium px-8">
                  Fun times and great discussions with students and faculty.
                </div>
                <div className="text-ais-dark-gray text-sm font-medium underline px-8 pt-8 pb-4">
                  <Link href="/projects">Learn more</Link>
                </div>
              </Paper>
            </div>
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
                <Button variant="contained" size="large" className="grow self-center bg-ais-navy min-w-[13rem] min-h-[3rem]">
                  <Link href="/join" className="normal-case font-semibold tracking-wide">Subscribe Now</Link>
                </Button>
                <div className="text-ais-dark-gray font-semibold text-center self-center justify-self-center px-10">or</div>
                <Button variant="outlined" size="large" className="grow self-center border-ais-navy min-w-[13rem] min-h-[3rem]">
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
