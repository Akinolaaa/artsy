import { useCountdown } from '../hooks/useCountdown.js';


export default function CountdownTimer({endDate}) {
  const [days, hrs, mins, secs] = useCountdown(endDate);

  return (
   
      <p className='font-stix text-xl font-[400]'>
        {`${hrs} hrs : ${mins} min : ${secs} s`}
      </p>

  )
}