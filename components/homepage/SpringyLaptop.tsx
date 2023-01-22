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
    <animated.div className="absolute top-[8rem] right-[3rem] w-[32rem] hidden lg:block xl:right-[4rem] xl:w-[38rem]" style={{ ...animatedProps }}>
      <img src="start_animation.svg" className="h-full z-0" />
    </animated.div>
  )
}

export default SpringyLaptop;