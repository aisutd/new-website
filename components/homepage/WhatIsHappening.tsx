import { useInView, useSpring, animated } from 'react-spring'
import { useState } from 'react'
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';

export default WhatIsHappening;

function margin()
{
  const lg = useMediaQuery('(min-width:1024px)')
  return lg ? '70%' : '200%'
}

function WhatIsHappening(props)
{
  const [seen, setSeen] = useState(false)
  const tension = parseInt(props.speed)

  const [ref, inView] = useInView
  ({
      rootMargin: margin()
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

  const middle = useSpring
  ({
    from: { y: 500, scale: seen? 1 : 0.1 },
    to: { y: seen ? 0 : 500, scale: seen ? 1 : 0.1 }, 
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
      <div className="grid justify-items-center pt-10 relative gap-6 md:-top-10 lg:-top-14 lg:grid-cols-3 lg:px-5 xl:-top-24 2xl:-top-36">
        <animated.div className="w-full px-5 sm:px-0 sm:max-w-[30rem] lg:justify-self-end lg:max-w-[24rem] xl:p-0" ref={ref} style={smallScreen ? small : left}>
          <Paper className="relative h-full text-center rounded-3xl shadow-lg shadow-ais-light-gray">
            <div className="grid justify-items-center pt-10">
              <img src="friends.svg" className="h-[50px]"/>
            </div>
            <div className="text-ais-navy text-3xl font-bold my-4">AI Mentorship</div>
            <div className="text-ais-dark-gray text-lg font-semibold px-5">
              AIM Projects is our semester-long guided AI mentorship initiative. Over the course of a semester, our AI bootcamp will teach you the fundamentals of the field and help you apply your skills with a project.
            </div>
            <div className="absolute bottom-0 w-full text-ais-dark-gray text-right font-medium px-4 pt-8 pb-4">
              <Link href="/projects">Learn more <ArrowForwardIosIcon sx={{fontSize:17}} /></Link>
            </div>
            <div className="h-[4rem]"/>
          </Paper>
        </animated.div>
        <animated.div className="w-full px-5 sm:px-0 sm:max-w-[30rem] lg:justify-self-center lg:max-w-[24rem] xl:p-0" ref={ref} style={smallScreen ? small : middle}>
          <Paper className="relative h-full text-center rounded-3xl shadow-lg shadow-ais-light-gray">
            <div className="grid justify-items-center pt-10">
              <img src="ai_brain.svg" className="h-[50px]"/>
            </div>
            <div className="text-ais-navy text-3xl font-bold my-4">HackAI</div>
            <div className="text-ais-dark-gray text-lg font-semibold px-5">
              The largest AI hackathon in North Texas. A fun time of learning, hacking, and making memories. No experience required.
            </div>
            <div className="absolute bottom-0 w-full text-ais-dark-gray text-right font-medium px-4 pt-8 pb-4">
              <Link href="/projects">Learn more <ArrowForwardIosIcon sx={{fontSize:17}} /></Link>
            </div>
            <div className="h-[4rem]"/>
          </Paper>
        </animated.div>
        <animated.div className="w-full px-5 sm:px-0 sm:max-w-[30rem] lg:justify-self-start lg:max-w-[24rem] xl:p-0" ref={ref} style={smallScreen ? small : right}>
          <Paper className="relative h-full text-center rounded-3xl shadow-lg shadow-ais-light-gray">
              <div className="grid justify-items-center pt-10">
                <img src="bulb_head.svg" className="h-[50px]"/>
              </div>
              <div className="text-ais-navy text-3xl font-bold my-4">Projects</div>
              <div className="text-ais-dark-gray text-lg font-semibold px-5">
                Know a bit about the field and want to apply your knowledge? AIS is an incubator for cool self-guided AI projects. The Projects Team organizes technical workshops and showcases. Factions coming soon.
              </div>
              <div className="absolute bottom-0 w-full text-ais-dark-gray text-right font-medium px-4 pt-8 pb-4">
                <Link href="/projects">Learn more <ArrowForwardIosIcon sx={{fontSize:17}} /></Link>
              </div>
            <div className="h-[4rem]"/>
          </Paper>
        </animated.div>
      </div>
    </>
  )
}