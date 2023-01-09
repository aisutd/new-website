import { useSpring, useChain, useSpringRef, animated } from 'react-spring'

function SlideInDescription1(props)
{
  const dur = parseInt(props.duration)
  const ref = [useSpringRef()]

  const body = useSpring
  ({
    ref: ref[0],
    from: { x: -200, opacity: 0 },
    to: { x: 0, opacity: 1 },
    config:  { duration: dur }
  })

  useChain(ref, [1], parseInt(props.delay))

  return(
    <>
    <animated.div style={{...body}}>
      Student led organization at The University of Texas at Dallas. Discussions, events, and competitions related to artificial intelligence.
    </animated.div>
    </>
  )
}

export default SlideInDescription1;