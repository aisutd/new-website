import { useInView, useSpring, animated } from 'react-spring'
import { useState } from 'react'
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default Events;

function Events(props)
{
  return(
    <>
      <Head tension={`${props.speed}`}/>
      <Body tension={`${props.speed}`}/>
    </>
  )
}

function Head(props)
{
  const [seen, setSeen] = useState(false)
  const tension = parseInt(props.tension)

  const [ref, inView] = useInView
  ({
      rootMargin: '-40%'
  })

  if(!seen && inView)
    setSeen(true)

  const opacity = useSpring
  ({
    from: { opacity: 0 },
    to: { opacity: seen ? 1 : 0 }, 
    config: { duration: 50 }
  })

  const styles = useSpring
  ({
    from: { y: -350, scale: 0.1 },
    to: { y: seen ? 0 : -350, scale: seen ? 1 : 0.1 }, 
    config: { tension: tension }
  })

  return(
    <animated.div ref={ref} style={opacity}>
      <animated.div ref={ref} style={styles}>
        <div className="text-ais-navy text-3xl font-bold">Events</div>
        <div className="text-ais-dark-blue-gray text-2xl font-bold mt-5 mb-10">
          AIS hosts many events to expand your knowledge and to keep you connected to the field.
        </div>
      </animated.div>
    </animated.div>
  )
}

function Body(props)
{
  const [seen, setSeen] = useState(false)
  const tension = parseInt(props.tension)

  const [ref, inView] = useInView
  ({
      rootMargin: '50%'
  })

  if(!seen && inView)
    setSeen(true)

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

  return(
    <>
      <div className="grid grid-cols-3 gap-6">
        <animated.div className="w-[24rem] justify-self-end" ref={ref} style={left}>
          <Paper className="text-left rounded-3xl shadow-xl shadow-ais-gray">
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
        </animated.div>
        <animated.div className="w-[24rem] justify-self-center" ref={ref} style={middle}>
          <Paper className="text-left rounded-3xl shadow-xl shadow-ais-gray">
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
        </animated.div>
        <animated.div className="w-[24rem] justify-self-start" ref={ref} style={right}>
          <Paper className="text-left rounded-3xl shadow-xl shadow-ais-gray">
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
        </animated.div>
      </div>
    </>
  )
}