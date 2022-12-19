import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { getDemos } from './api/projects';
import { ProjectDemo } from '../lib/types';

interface DemoPageProps {
  demos: ProjectDemo[];
}

/**
 * A list of demoable projects.
 */
export default function ProjectsPage({ demos }: DemoPageProps) {
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
      <main className="flex flex-col justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-50">
        <div className="text-center font-bold w-9/12 h-full p-10 rounded-3xl shadow-lg shadow-slate-500 m-auto mt-auto">
          <p className="text-center pt-10 h-9/12 leading-10 text-3xl translate-y-20 text-gray-700 font-semibold">
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
