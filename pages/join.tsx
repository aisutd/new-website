import Head from 'next/head';
import Link from 'next/link';
import Subscribe from '../components/join/Subscribe';
import DescriptionIcon from '@mui/icons-material/Description';

/**
 * The root page for the organization website.
 *
 * This page contains an overview of the organization and links to our programs
 * and events.
 */

export default function JoinPage() {
  const appDivs = (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-2 pt-8 pb-20 px-8">
      <div className="rounded-3xl h-80 bg-white bg-opacity-60 border-white border-2	shadow-md text-center py-8 px-2 xl:mx-1 2xl:mx-3">
        <div className="text-ais-indigo text-xl font-semibold px-4 pt-4">AI Mentorship</div>
        <div className="leading-loose font-light text-stone-700 text-sm px-4 py-4">
          Apply as a mentee and get a chance to learn foundational concepts in ML and to work on AI
          projects of your interest, guided by experienced mentors.
        </div>
        <div className="flex flex-wrap justify-center underline text-md text-ais-indigo md:pt-6 xl:pt-2 2xl:pt-6 gap-4 px-4">
          <div className="">
            <a
              target="_blank"
              href="https://coda.io/form/AIM-Mentee-Application_ddszWO_e7r4"
              rel="noreferrer"
            >
              <button className="hover:shadow-lg border-ais-indigo border-2 bg-ais-indigo text-white font-bold py-2 rounded-lg text-xs w-20 2xl:w-28">
                Apply
              </button>
            </a>
          </div>
          <div className="">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1i4GJzsLaxLYvmLwQsQOwaa5H3KxIqfvprCpW9cSw-JQ/edit?usp=sharing"
              rel="noreferrer"
            >
              <button className="hover:shadow-lg border-ais-indigo border-2 text-ais-indigo font-bold py-2 rounded-lg text-xs w-20 2xl:w-28">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-3xl h-80 bg-white bg-opacity-60 border-white border-2 shadow-md text-center px-2 py-8 xl:mx-1 2xl:mx-3">
        <div className="text-ais-indigo text-xl font-semibold px-4 pt-4">Membership</div>
        <div className="leading-loose font-light text-stone-700 text-sm px-4 py-4">
          Apply to be an official AIS member. Perks include member-only networks, access to
          one-on-ones, and an invite to join an AIS committee.
        </div>
        <div className="flex flex-wrap justify-center underline text-md text-ais-indigo md:pt-6 xl:pt-2 2xl:pt-6 gap-4 px-4">
          <div className="">
            <a
              target="_blank"
              href="https://coda.io/form/AIS-Membership-Application_dNezXZc0_Z1"
              rel="noreferrer"
            >
              <button className="hover:shadow-lg border-ais-indigo border-2 bg-ais-indigo text-white font-bold py-2 rounded-lg text-xs w-20 2xl:w-28">
                Apply
              </button>
            </a>
          </div>
          <div className="">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1nHS3CIcXueuZG8hyNEQH4hkFkdmpL9WY2Q_RfiOXBO4/edit?usp=sharing"
              rel="noreferrer"
            >
              <button className="hover:shadow-lg border-ais-indigo border-2 text-ais-indigo font-bold py-2 rounded-lg text-xs w-20 2xl:w-28">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-3xl h-80 bg-white bg-opacity-60 border-white border-2 shadow-md text-center px-2 py-8 xl:mx-1 2xl:mx-3">
        <div className="text-ais-indigo text-xl font-semibold px-4 pt-4 ">Officer Apps</div>
        <div className="leading-loose font-light text-stone-700 text-sm px-4 pt-4 pb-16">
          Apply to the team. Get an opportunity to organize events, network and more.
        </div>
        <div className="flex flex-wrap justify-center underline text-md text-ais-indigo md:pt-8 xl:pt-4 2xl:pt-8 gap-4 px-4">
          <div className="">
            <a
              target="_blank"
              href="https://coda.io/form/Untitled-Form_d6uISJI-Cx0"
              rel="noreferrer"
            >
              <button className="hover:shadow-lg border-ais-indigo border-2 bg-ais-indigo text-white font-bold py-2 rounded-lg text-xs w-20 2xl:w-28">
                Apply
              </button>
            </a>
          </div>
          <div className="">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1RZRlCcmGRv19IZ5MP1_rltm9TeEZJa20uhEavVNzXDU/edit?usp=sharing"
              rel="noreferrer"
            >
              <button className="hover:shadow-lg border-ais-indigo border-2 text-ais-indigo font-bold py-2 rounded-lg text-xs w-20 2xl:w-28">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Head>
        <title>Join &ndash; AIS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content="Get involved in AIS by joining our mailing list and applying to our various programs."
        />
      </Head>
      <main className="min-h-screen">
        <section className="h-64 bg-cover bg-center w-full bg-[url('../../public/top.png')] text-center">
          {/* Hero */}
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-8 px-2 text-white">
            <div className="mt-9 md:mt-14 mb-2 text-xl md:text-3xl font-bold">JOIN US</div>
            <div className="text-sm md:text-lg">
              We host workshops, seminars, and social events to help students learn about artificial
              intelligence.
            </div>
            <div className="text-sm md:text-lg">
              Consider subscribing to our mailing list or joining the AIS team
            </div>
          </div>
        </section>
        <section className="h-auto bg-[url('../../public/background.png')] bg-cover bg-center w-full">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-2">
            <div className="text-2xl font-bold text-center pt-10 pb-4"><DescriptionIcon className="text-5xl pb-2"/>Applications</div>
            <div>{appDivs}</div>
            <img className="md:py-4 md:w-30 md:float-left md:-translate-x-4 md:-translate-y-32 hidden md:block" src="/supertoroid.png" alt="supertoroid" width="150"/>
          </div>
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl pb-20 text-center justify-center">
            <div className="md:pr-40 text-2xl font-bold">Want to get involved?</div>
            <div className="text-sm pt-3 pb-5 md:pr-40">
              Join our mailing list to get email reminders about our upcoming events
            </div>
            <div className="justify-center items-center content-center md:mr-40">
              {Subscribe()}
            </div>
            <img className="md:py-8 md:w-30 md:float-right md:-translate-y-40 hidden md:block" src="/cube.png" alt="cube" width="170"/>
          </div>
        </section>
      </main>
    </div>
  );
}
