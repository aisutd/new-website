import Head from 'next/head';
import * as React from 'react';
import OfficerItem from '../components/team/OfficerItem';
import { Officer } from '../lib/types';
import TeamItem from '../components/team/TeamItem';
import { getAllOfficers, getOfficer } from './api/officer';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';

interface TeamPageProps {
  officers: Officer[];
}

/**
 * A page that displays all officers in the organization.
 */
export default function TeamPage({ officers }: TeamPageProps) {
  const techTeam: Officer[] = [];
  const financeTeam: Officer[] = [];
  const industryTeam: Officer[] = [];
  const marketingTeam: Officer[] = [];
  const operationsTeam: Officer[] = [];
  const projectsTeam: Officer[] = [];
  const outreachTeam: Officer[] = [];
  const AIMTeam: Officer[] = [];
  const execTeam: Officer[] = [];
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
  };

  for (const off of officers) {
    if (off['team'] == 'Executive Board') execTeam.push(off);
    else if (off['team'] == 'Industry Committee') industryTeam.push(off);
    else if (off['team'] == 'Marketing Committee') marketingTeam.push(off);
    else if (off['team'] == 'Operations Committee') operationsTeam.push(off);
    else if (off['team'] == 'Finance Committee') financeTeam.push(off);
    else if (off['team'] == 'Projects Team') projectsTeam.push(off);
    else if (off['team'] == 'Technology Team') techTeam.push(off);
    else if (off['team'] == 'AIM') AIMTeam.push(off);
    else if (off['team'] == 'Outreach Team') outreachTeam.push(off);
  }


  return (
    <div>
      <Head>
        <title>Team &ndash; AIS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content="The past and present officers of the Artificial Intelligence Society - the people who make this all possible."
        />
      </Head>
      <main className="min-h-screen bg-ais-light-gray">
        <img src="/hero.svg" width="100%" height="25%" ></img>
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-10 md:py-20 ">
          </div>
        <section id="officers">
          <div className="flex flex-grow flex-wrap -mt-10 mx-20 pb-8 gap-8 justify-around">
            <TabContext value={value}>
              <TabList onChange={handleChange} aria-label="teams" scrollButtons={false} centered>
                <Tab value="All Members" label="All" />
                <Tab value="Executive Members" label="Executive" />
                <Tab value="Operation Members" label="Operations" />
                <Tab value="Finance Members" label="Finance" />
                <Tab value="Technology Members" label="Technology" />
                <Tab value="Marketing Members" label="Marketing" />
                <Tab value="Outreach Members" label="Outreach" />   
                <Tab value="Industry Members" label="Industry" />
                <Tab value="AIM Members" label="AIM" />
              </TabList>
              <TabPanel value="All Members">
                <TeamItem officers={execTeam} team={'Executive'} />
                <TeamItem officers={operationsTeam} team={'Operations'} />
                <TeamItem officers={financeTeam} team={'Finance'} />
                <TeamItem officers={techTeam} team={'Technology'} />
                <TeamItem officers={outreachTeam} team={'Outreach'} />
                <TeamItem officers={marketingTeam} team={'Marketing'} />
                <TeamItem officers={industryTeam} team={'Industry'} />
                {/* <TeamItem officers={projectsTeam} team={'Projects'} /> */}
                <TeamItem officers={AIMTeam} team={'AIM'} />
              </TabPanel>
              <TabPanel value="Executive Members">
                <TeamItem officers={execTeam} team={'Executive'} />
              </TabPanel>
              <TabPanel value="Operation Members">
                <TeamItem officers={operationsTeam} team={'Operations'} />
              </TabPanel>
              <TabPanel value="Finance Members">
                <TeamItem officers={financeTeam} team={'Finance'} />
              </TabPanel>
              <TabPanel value="Technology Members">
                <TeamItem officers={techTeam} team={'Technology'} />
              </TabPanel>
              <TabPanel value="Marketing Members">
                <TeamItem officers={marketingTeam} team={'Marketing'} />
              </TabPanel>
              <TabPanel value="Outreach Members">
                <TeamItem officers={outreachTeam} team={'Outreach'} />
              </TabPanel>
              <TabPanel value="Industry Members">
                <TeamItem officers={industryTeam} team={'Industry'} />
              </TabPanel>
              <TabPanel value="AIM Members">
                <TeamItem officers={AIMTeam} team={'AIM'} />
              </TabPanel>
            </TabContext>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allOfficers = await getAllOfficers();
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
      officers: allOfficers,
    },
  };
}
