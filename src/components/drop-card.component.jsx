import image1 from '../assets/drop/image1.svg';
import CountdownTimer from './countdown-timer.component';

export default function DropCard() {

  return(
    <div className='px-3'>

      <div className='relative'>
        <div className='rounded-[1rem] h-[15rem]' style={{backgroundImage: `url(${image1})`, backgroundPosition: 'center'}} >
        </div>
          {/*---------------Show on HoverHover--------------- */}
          <div className='absolute top-0 right-0 bottom-0 left-0 bg-[#000000]/20 z-10 w-full rounded-[1rem]'>
            <div className='absolute top-[5%] right-[3%] bg-[#4693ED] rounded p-1'>
              <p className='uppercase text-white text-sm'>upcoming</p> 
            </div>
            <div className='absolute top-[60%] left-[0%] w-full px-3'>
              <div className='border border-white rounded px-2 py-4 text-white'>
                <p className=''>Time Remaining</p>
                <CountdownTimer endDate={"Jan 5, 2024 15:37:25"} />
              </div>
            </div>
            
          </div>
          {/* ------------- */}   
        </div>
        <div>
          <p>November 21 at 11pm WAT</p>
          <p>Eyo Eko for Show</p>
          <p>Lorem ipsum dolor sit amet consectetur. Amet odio a aenean quis vitae tempus. Sed nunc tempus aliquet lectus ut vulputate.</p>
          <p> Creator: Aliyah Munirat</p>
        </div>
        <a>view</a>
    </div>
  )
}