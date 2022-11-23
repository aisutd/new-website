import Link from 'next/link';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "@fontsource/montserrat";

/**
 * The default header for the website.
 */
export default function SiteHeader() {
  return (
    <AppBar sx={{backgroundColor: "white", opacity: 0.6}}>
        <Toolbar sx={{width: {md: "100%", lg: "90%", xl: "80%"}}} className='mx-auto max-w-6xl'>
          <Link href="/"><img src="/ais_light.svg" className="h-8 mr-2" /></Link>
          <Typography
            className="text-xl"
            color="black"
            fontFamily="montserrat"
            fontWeight="bold"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link href="/">Artificial Intelligence Society</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: "flex" } }}>
            <Button sx={{color: "black", textTransform: "none"}}> 
              <Typography
                className="text-sm"
                color="black"
                fontFamily="montserrat"
                fontWeight="bold"
              >
                <Link href="/events">Events</Link>
              </Typography>
            </Button>
            <Button sx={{color: "black", textTransform: "none"}}> 
              <Typography
                className="text-sm"
                color="black"
                fontFamily="montserrat"
                fontWeight="bold"
              >
                <Link href="/projects">Projects</Link>
              </Typography>
            </Button>
            <Button sx={{color: "black", textTransform: "none"}}> 
              <Typography
                className="text-sm"
                color="black"
                fontFamily="montserrat"
                fontWeight="bold"
              >
                <Link href="/team">Team</Link>
              </Typography>
            </Button>
            <Button sx={{color: "black", textTransform: "none"}}> 
              <Typography
                className="text-sm"
                color="black"
                fontFamily="montserrat"
                fontWeight="bold"
              >
                <Link href="/about">About</Link>
              </Typography>
            </Button>
            <Button sx={{color: "black", textTransform: "none"}}> 
              <Typography
                className="text-sm"
                color="black"
                fontFamily="montserrat"
                fontWeight="bold"
              >
                <Link href="/join">Join</Link>
              </Typography>
            </Button>
            <IconButton onClick={() => {window.open("/fb", "_blank")}}>
              <FacebookIcon className='h-6 text-ais-black'/>
            </IconButton>
            <IconButton onClick={() => {window.open("/insta", "_blank")}}>
              <InstagramIcon className='h-6 text-ais-black'/>
            </IconButton>
            <IconButton onClick={() => {window.open("/linkedin", "_blank")}}>
              <LinkedInIcon className='h-6 text-ais-black'/>
            </IconButton>
            <IconButton onClick={() => {window.open("/yt", "_blank")}}>
              <YouTubeIcon className='h-6 text-ais-black'/>
            </IconButton>
            <IconButton onClick={() => {window.open("/dc", "_blank")}}>
              <img src="/discord.svg" className="h-6 text-ais-dark-blue" />
            </IconButton>
                  {/* <Link href="/fb">
                    <a>
                      <FacebookIcon />
                    </a>
                  </Link>
                  <Link href="/linkedin">
                    <a>
                      <LinkedInIcon />
                    </a>
                  </Link>
                  <Link href="/yt">
                    <a>
                      <YouTubeIcon style={{ fontSize: 29 }} />
                    </a>
                  </Link>
                  <Link href="/dc">
                    <a>
                      <img src="/discord.svg" className="h-6 text-ais-dark-blue" />
                    </a>
                  </Link> */}
          </Box>
      </Toolbar>
    </AppBar>
  );
}
