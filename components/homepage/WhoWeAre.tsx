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
    <div className="grid lg:grid-cols-3 text-ais-navy lg:h-[10rem]">
      <animated.div className="self-center text-center font-bold text-3xl z-10 col-span-2 lg:col-span-1" ref={ref} style={styles}>
        Who we are
      </animated.div>
      <animated.div className="col-span-2 self-center text-center font-semibold text-lg z-10 mt-10 mx-20 lg:ml-0 lg:text-xl xl:text-2xl" ref={ref} style={styles}>
        Student led organization at The University of Texas at Dallas. Discussions, events, and competitions related to artificial intelligence.
      </animated.div>
    </div>
  )
}

export default WhoWeAre;