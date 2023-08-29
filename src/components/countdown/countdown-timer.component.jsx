import { useCountdown } from '../../hooks/useCountdown.js';


export default function CountdownTimer({endDate}) {
  // const [days, hrs, mins, secs] = useCountdown(endDate);
  const time = useCountdown(endDate);

  return (
    <p className='font-stix text-xl font-[400] whitespace-nowrap truncate'>
      {`${time[1]} hrs : ${time[2]} min : ${time[3]} s`}
    </p>
  )
}