import { useSpring, useChain, useSpringRef, animated } from 'react-spring'
import Link from 'next/link'
import Button from '@mui/material/Button'

function AnimatedJoinBtn(props)
{
  const dur = parseInt(props.duration)
  const ref = [useSpringRef()]

  const body = useSpring
  ({
    ref: ref[0],
    from: { opacity: 0 },
    to: { opacity: 1 },
    config:  { duration: dur }
  })

  useChain(ref, [1], parseInt(props.delay))

  return(
    <animated.div style={{...body}}>
      <Button variant="contained" size="large" className="bg-[#24314D] hover:bg-slate-600 h-[4rem] w-[14rem] rounded-2xl">
        <Link href="/join" className="font-bold text-white text-base tracking-wide">Join us now</Link>
      </Button>
    </animated.div>
  )
}

export default AnimatedJoinBtn;