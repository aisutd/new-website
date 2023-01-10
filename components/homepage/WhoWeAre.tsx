import { useInView, useSpring, animated } from 'react-spring'
import { useState } from 'react'

function WhoWeAre(props)
{
  const dur = parseInt(props.duration)
  const [seen, setSeen] = useState(false)

  const [ref, inView] = useInView
  ({
      rootMargin: '-20%'
  })

  if(!seen && inView)
    setSeen(true)

  const styles = useSpring
  ({
    from: { opacity: 0 },
    to: { opacity: seen ? 1 : 0 }, 
    config: {duration: dur}
  })

  return(
    <div className="h-[10rem] grid grid-cols-3 text-ais-navy">
      <animated.div className="self-center text-center font-bold text-3xl z-10" ref={ref} style={styles}>
        Who we are
      </animated.div>
      <animated.div className="col-span-2 self-center text-center font-semibold text-2xl mr-20 z-10" ref={ref} style={styles}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </animated.div>
    </div>
  )
}

export default WhoWeAre;