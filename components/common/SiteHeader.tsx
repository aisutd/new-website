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
import { AccountCircle } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';

/**
 * The default header for the website.
 */
export default function SiteHeader() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{backgroundColor: 'white'}}>
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
          <Box sx={{display: {md: "none"} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{color: "white", ml:10}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link href="/events">Events</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/projects">Projects</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/team">Team</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/about">About</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/join">Join</Link>
              </MenuItem>
            </Menu>
          </Box>
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
            <Button sx={{color: "white", textTransform: "none"}}> 
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
              <FacebookIcon className='h-6 text-ais-black '/>
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
              <img src="/discord.svg" className="h-5" />
            </IconButton>
          </Box>
      </Toolbar>
    </AppBar>
  );
}
