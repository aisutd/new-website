import { useSpring, animated } from 'react-spring'

function SpringyLaptop()
{
  const animatedProps = useSpring
  ({
    from: { marginTop: 0 },
    to: { marginTop: 7 },
    config: { mass: 10, tension: 100, friction: 0 }
  })

  return(
    <animated.div className="absolute top-[6rem] right-[6rem]" style={{ ...animatedProps }}>
      <img src="start_animation.svg" className="h-[36rem] z-0" />
    </animated.div>
  )
}

export default SpringyLaptop;