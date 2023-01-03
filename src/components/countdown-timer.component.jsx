import { useCountdown } from '../hooks/useCountdown.js';


export default function CountdownTimer({endDate}) {
  const [days, hrs, mins, secs] = useCountdown(endDate);

  return (
    <div>
      <p className='font-stix text-2xl'>
        {`${days} days ${hrs} hours ${mins} minutes ${secs} seconds`}
      </p>
    </div>
  )
}