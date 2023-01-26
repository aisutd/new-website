import { useInView, useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';

export default Events;

function margin()
{
  const lg = useMediaQuery('(min-width:1024px)')
  return lg ? '80%' : '5000% 5000% 5000% 5000%'
}

function Events(props)
{
  const [seen, setSeen] = useState(false)
  const tension = parseInt(props.speed)

  const [ref, inView] = useInView
  ({
    rootMargin: margin()
  })

  if(!seen && inView)
    setSeen(true)

  const headOpacity = useSpring
  ({
    from: { opacity: 0 },
    to: { opacity: seen ? 1 : 0 }, 
    config: { duration: 50 }
  })

  const head = useSpring
  ({
    from: { y: -350, scale: 0.1 },
    to: { y: seen ? 0 : -350, scale: seen ? 1 : 0.1 }, 
    config: { tension: tension }
  })

  const left = useSpring
  ({
    from: { y: 500, x: 0, scale: 0.1 },
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
    from: { y: 500, x: 0, scale: seen? 1 : 0.1 },
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
    <animated.div ref={ref} style={smallScreen ? small : headOpacity}>
      <animated.div ref={ref} style={smallScreen ? small : head}>
        <div className="text-ais-navy text-3xl font-bold">Events</div>
        <div className="text-ais-dark-blue-gray mt-5 mb-10 mx-10 font-bold text-base sm:text-xl lg:text-2xl">
          AIS hosts many events to expand your knowledge and to keep you connected to the field.
        </div>
      </animated.div>
    </animated.div>
    <div className="grid gap-6 justify-items-center lg:grid-cols-3 lg:px-5">
      <animated.div className="w-full px-5 max-w-[30rem] lg:max-w-[24rem] lg:px-0 lg:h-full lg:justify-self-end" ref={ref} style={smallScreen ? small : left}>
        <Paper className="text-left rounded-3xl shadow-xl shadow-ais-gray h-full relative">
          <div className="grid justify-items-center pt-6">
            <img src="hack_ai_img.svg" className="w-full px-6 lg:h-[15rem]"/>
          </div>
          <div className="text-ais-navy text-2xl font-bold my-4 px-8">HackAI</div>
          <div className="text-ais-dark-gray text-lg font-medium px-8">
            The largest AI hackathon in North Texas.
          </div>
          <div className="text-ais-dark-gray text-sm font-medium underline px-8 pt-4 p-4 lg:absolute lg:bottom-0">
            <Link href="/projects">Learn more</Link>
          </div>
        </Paper>
      </animated.div>
      <animated.div className="w-full px-5 max-w-[30rem] lg:max-w-[24rem] lg:px-0 lg:h-full" ref={ref} style={smallScreen ? small : middle}>
        <Paper className="text-left rounded-3xl shadow-xl shadow-ais-gray h-full relative">
          <div className="grid justify-items-center pt-6">
            <img src="workshop_img.svg" className="w-full px-6 lg:h-[15rem]"/>
          </div>
          <div className="text-ais-navy text-2xl font-bold my-4 px-8">Workshops</div>
          <div className="text-ais-dark-gray text-lg font-medium px-8">
            Guided talks where we teach you AI fundamentals and more.
          </div>
          <div className="text-ais-dark-gray text-sm font-medium underline px-8 pt-4 pb-4 lg:absolute lg:bottom-0">
            <Link href="/projects">Learn more</Link>
          </div>
        </Paper>
      </animated.div>
      <animated.div className="w-full px-5 max-w-[30rem] lg:max-w-[24rem] lg:px-0 lg:h-full lg:justify-self-start" ref={ref} style={smallScreen ? small : right}>
        <Paper className="text-left rounded-3xl shadow-xl shadow-ais-gray h-full relative">
          <div className="grid justify-items-center pt-6">
            <img src="workshop_img.svg" className="w-full px-6 lg:h-[15rem]"/>
          </div>
          <div className="text-ais-navy text-2xl font-bold my-4 px-8">Socials & Seminars</div>
          <div className="text-ais-dark-gray text-lg font-medium px-8">
            Fun times and great discussions with students and faculty.
          </div>
          <div className="text-ais-dark-gray text-sm font-medium underline px-8 pt-4 pb-4 lg:absoulte lg:bottom-0">
            <Link href="/projects">Learn more</Link>
          </div>
        </Paper>
      </animated.div>
    </div>
    </>
  )
}