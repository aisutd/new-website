import { useSpring, useChain, useSpringRef, animated } from 'react-spring'

function SlideInAIS(props)
{
  const dur = parseInt(props.duration)
  const refs = [useSpringRef(), useSpringRef(), useSpringRef()]

  const a = useSpring
  ({
    ref: refs[0],
    from: { y: 40, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config:  { duration: dur }
  })

  const i = useSpring
  ({
    ref: refs[1],
    from: { y: 40, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config:  { duration: dur }
  })

  const s = useSpring
  ({
    ref: refs[2],
    from: { y: 40, opacity: 0 },
    to: { y: 0, opacity: 1 },
    config:  { duration: dur }
  })

  useChain(refs)

  return(
    <div className="flex gap-2 justify-center">
    <animated.div style={{...a}}>A</animated.div>
    <animated.div style={{...i}}>I</animated.div>
    <animated.div style={{...s}}>S</animated.div>
    </div>
  )
}

export default SlideInAIS;