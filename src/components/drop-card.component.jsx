import CountdownOverlap from './countdown-overlap.component';

export default function DropCard({name, imagesrc, status, deadline, creator}) {

  const showStatus = (stat) => {
    switch (stat) {
      case "live":
        return(
          <div className='absolute top-[5%] right-[3%] bg-[#3EA03B] rounded p-1'>
            <p className='uppercase text-white text-sm'>Live Now</p> 
          </div>
        )
      case "ended":
        return(
          <div className='absolute top-[5%] right-[3%] bg-[#999EA5] rounded p-1'>
            <p className='uppercase text-white text-sm'>{stat}</p> 
          </div>
        )
    
      default:
        return(
          <div className='absolute top-[5%] right-[3%] bg-[#4693ED] rounded p-1'>
            <p className='uppercase text-white text-sm'>{stat}</p> 
          </div>
        )
    }
  }
  return(
    <div className='px-3'>

      <div className='relative'>
        <div className='rounded-[1rem] h-[15rem]' style={{backgroundImage: `url(${imagesrc})`, backgroundPosition: 'center'}} >
        </div>
          {/*---------------Show on HoverHover--------------- */}
          <div className='absolute top-0 right-0 bottom-0 left-0 bg-[#000000]/20 z-10 w-full rounded-[1rem]'>
            {showStatus(status)}
            {status==="ended" ? 
              <div className='absolute top-[65%] left-[0%] w-full px-4'>
                <div className='border border-white rounded-lg py-2 pl-4 text-white font-[400] bg-[#F5F4F43D]'>
                  <p className=''>Auction Ended</p>
                  <p className='font-stix text-xl font-[400]'>
                    5 hours ago
                  </p>
                </div>
              </div> 
              :
              <CountdownOverlap deadline={"Jan 5, 2024 15:37:25"} />
            }
          </div>
          {/* ------------- */}   
        </div>
        <div className='flex flex-col gap-3 mt-[2rem]'>
          <p>November 21 at 11pm WAT</p>
          <p className='font-[500] text-2xl'>{name}</p>
          <p className='text-[#616161]'>Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.</p>
          <p className='font-[500] text-lg'> Creator: <span className='text-blue'>{creator}</span></p>
          {status==='live' && <p className='text-blue underline'>join now</p> }
          {status==='upcoming' && <p className='text-blue underline'>Get notified</p>}
          {status==='ended' && <p className='text-blue underline'>view</p>}
        </div>
        <br/>
        <br/>
    </div>
  )
}