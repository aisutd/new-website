import Link from 'next/link';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';

export default function SiteFooterAlt() {
  return (
    <footer className="bg-ais-black text-white pt-5">
      <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl flex justify-around gap-4 p-4 ">
        <div className="grid grid-col-1 grid-flow-row place-items-center py-5 items-">
          <img src="/ais_dark.svg" className="h-20" />
          <div className="py-5">© Copyright 2021 AIS UTD, All Rights Reserved</div>
        </div>
        <div>
          <div className="text-lg font-bold py-5">Sitemap</div>
          <div>
            <div className="block p-2">
              <Link href="/">Home</Link>
            </div>
            <div className="block p-2">
              <Link href="/events">Events</Link>
            </div>
            <div className="block p-2">
              <Link href="/team">Team</Link>
            </div>
            <div className="block p-2">
              <Link href="/about">About</Link>
            </div>
            <div className="block p-2">
              <Link href="/join">Join</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="text-lg font-bold py-5">Socials</div>
          <ul>
            <div>
              <div>
                <IconButton
                  onClick={() => {
                    window.open('/dc', '_blank');
                  }}
                >
                  <img src="/discord-mark-white.svg" className="h-5 fill-white" />
                </IconButton>
              </div>
              <div>
                <IconButton
                  onClick={() => {
                    window.open('/fb', '_blank');
                  }}
                >
                  <FacebookOutlinedIcon className="h-6 text-white" />
                </IconButton>
              </div>
              <div>
                <IconButton
                  onClick={() => {
                    window.open('/insta', '_blank');
                  }}
                >
                  <InstagramIcon className="h-6 text-white" />
                </IconButton>
              </div>
              <div>
                <IconButton
                  onClick={() => {
                    window.open('/linkedin', '_blank');
                  }}
                >
                  <LinkedInIcon className="h-6 text-white" />
                </IconButton>
              </div>
              <div>
                <IconButton
                  onClick={() => {
                    window.open('/yt', '_blank');
                  }}
                >
                  <YouTubeIcon className="h-6 text-white" />
                </IconButton>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}
