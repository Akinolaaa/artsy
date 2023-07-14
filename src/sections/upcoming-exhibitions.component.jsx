import itinyarrowL from '../assets/tiny-left-arrow.svg';
import itinyarrowR from '../assets/tiny-right-arrow.svg';
import "./upcoming-exhibitions.styles.scss";

export default function UpcomingExhibitions(){

  return(
    <div className="upcoming text-white tracking-wider">
      <p className="border-b w-auto text-xl">See Upcoming Auctions and Exhibitions</p>

      <div className="upcoming-sub-div">
        <div className="flex items-center p-4">
          <h1 className="font-bellefair text-3xl">01</h1>
          <div className="flex flex-col justify-between pl-4">
            <h1 className="font-bellefair">MONALISA REDEFINED IN STYLE.</h1>
            <p className="text-xs py-3">Start on : 08:00 GTS . Monday </p>
            <div className="flex max-sm1:flex-col justify-between items-center max-sm1:items-end">
              <p className="w-1/2 max-sm1:w-full h-1/4 text-[.6rem] leading-tight">GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
              <div className="flex pt-2">
                <p className="mr-3 underline font-[400]">See more</p>
                <p>Set a reminder</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between mt-2'>
        <p>Sliderrrrrrrrrrrr</p>
        <div className="flex ">
          <img className="flex justify-center border px-3 py-2 rounded-full mr-2" alt='left-arrow' src={itinyarrowL}/>
          <img className="flex justify-center border px-3 py-2 rounded-full" alt='right-arrow' src={itinyarrowR}/>
        </div>
      </div>
    </div>
  )
}