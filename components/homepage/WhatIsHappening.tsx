import { useInView, useSpring, animated } from 'react-spring'
import { useState } from 'react'
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';

export default WhatIsHappening;

function WhatIsHappening(props)
{
  const [seen, setSeen] = useState(false)
  const tension = parseInt(props.speed)

  const [ref, inView] = useInView
  ({
      rootMargin: '70%'
  })

  if(!seen && inView)
    setSeen(true)

  const head = useSpring
  ({
    from: { y: 350 },
    to: { y: seen ? 0 : 350 }, 
    config: { tension: tension }
  })

  const left = useSpring
  ({
    from: { y: 500, x: -200, scale: 0.1 },
    to: { y: seen ? 0 : 500, x: seen ? 0 : -200, scale: seen ? 1 : 0.1 }, 
    config: { tension: tension }
  })

  const right = useSpring
  ({
    from: { y: 500, x: 200, scale: seen? 1 : 0.1 },
    to: { y: seen ? 0 : 500, x: seen ? 0 : 200, scale: seen ? 1 : 0.1 }, 
    config: { tension: tension }
  })

  const smallScreen = useMediaQuery('(max-width:400px)')

  const small = useSpring
  ({
    from: { y: 1 },
    to: { y: 0 },
    config: { tension: tension }
  })

  return(
    <>
      <div className="relative md:-top-10 lg:-top-14 xl:-top-24 2xl:-top-36">
        <animated.div className="text-ais-navy text-3xl text-center font-bold z-10" ref={ref} style={head}>
          What is happening
        </animated.div>
      </div>
      <div className="grid justify-items-center pt-10 relative gap-20 md:-top-10 lg:-top-14 lg:grid-cols-2 xl:-top-24 2xl:-top-36">
        <animated.div className="w-full px-5 sm:px-0 sm:w-[30rem] lg:justify-self-end lg:pl-10 xl:p-0" ref={ref} style={smallScreen ? small : left}>
          <Paper className="h-full text-center rounded-3xl shadow-lg shadow-ais-light-gray">
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
        </animated.div>
        <animated.div className="w-full px-5 sm:px-0 sm:w-[30rem] lg:justify-self-start lg:pr-10 xl:p-0" ref={ref} style={smallScreen ? small : right}>
          <Paper className="h-full text-center rounded-3xl shadow-lg shadow-ais-light-gray">
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
        </animated.div>
      </div>
    </>
  )
}