import CountdownOverlap from '../countdown/countdown-overlap.component';

export default function DropCard({name, imagesrc, status, deadline, creator}) {

  const statusBg = {
    live: 'bg-[#3EA03B]',
    ended: 'bg-[#999EA5]',
    upcoming: 'bg-[#4693ED]',
  }

  return(
    <div className='px-3 sm1:flex sm1:gap-3 sm1:items-center'>
      <div className='relative rounded-lg h-[15rem] sm1:h-[17rem] lg:h-[16rem] w-full sm1:my-[2rem]' 
        style={{backgroundImage: `url(${imagesrc})`, backgroundPosition: 'center'}}>
        <div className='h-full w-full bg-black/20 z-10 rounded-lg'>
          <div className={`absolute sm1:hidden top-[5%] right-[3%] ${statusBg[status]} rounded-md w-[7rem] py-1`}>
            <p className='uppercase text-white text-sm text-center'>{status}</p> 
          </div>
          {
            status==="ended" ? 
            <div className='absolute top-[65%] left-[0%] w-full px-4'>
              <div className='border border-white rounded-lg py-2 pl-4 text-white font-[400] bg-[#F5F4F43D]'>
                <p className=''>Auction Ended</p>
                <p className='font-stix text-xl font-[400]'>
                  5 hours ago
                </p>
              </div>
            </div> 
            :
            <CountdownOverlap deadline={"Jan 5, 2026 15:37:25"} />
          }
        </div>
      </div>

      <div className='flex flex-col gap-3 my-[2rem]'>
        <div className={`hidden sm1:block ${statusBg[status]} rounded-md w-[7rem] py-1`}>
          <p className='uppercase text-white text-sm text-center'>{status}</p> 
        </div>
        <p>November 21 at 11pm WAT</p>
        <p className='font-[500] text-2xl'>{name}</p>
        <p className='text-[#616161]'>Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.</p>
        <p className='font-[500] text-lg'> Creator: <span className='text-blue'>{creator}</span></p>
        {status==='live' && <p className='text-blue underline'>join now</p> }
        {status==='upcoming' && <p className='text-blue underline'>Get notified</p>}
        {status==='ended' && <p className='text-blue underline'>view</p>}
      </div>
    </div>
  )
}