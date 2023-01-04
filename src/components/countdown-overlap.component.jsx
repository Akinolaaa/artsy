
import CountdownTimer from './countdown-timer.component';

export default function CountdownOverlap({deadline}) {

  return(
    <div className='absolute top-[65%] left-[0%] w-full px-4'>
      <div className='border border-white rounded-lg py-2 pl-4 text-white font-[400] bg-[#F5F4F43D]'>
        <p className=''>Time remaining</p>
        <CountdownTimer endDate={deadline} />
      </div>
    </div>
  )
}