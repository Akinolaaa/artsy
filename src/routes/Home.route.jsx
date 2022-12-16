import FeaturedProducts from "../components/featured-products.component";
import itinyarrowL from '../assets/tiny-left-arrow.svg';
import itinyarrowR from '../assets/tiny-right-arrow.svg';
import ibluearrowR from '../assets/blue-arrow-right.svg';
import iemailIcon from '../assets/iemail-icon.svg';
import ilocationIcon from '../assets/ilocation-icon.svg';

// import icreator2 from '../assets/guy1-img.svg';
// import icreator3 from '../assets/guy2-img.svg';
import './home.styles.scss';
import Logo from "../components/logo.component";

export default function Home() {

  return(
    <>
      <div className="px-10 mx-auto">
        <h1 className='flex justify-center font-clash text-5xl leading-[4rem] text-gray font-[600] mx-auto'> 
          Photography is poetry & beautiful untold stories
        </h1>
      </div>
      <p className="px-10 mx-auto mt-[2rem]">
        Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.
      </p>

      <FeaturedProducts />
 
      {/*---Start-Upcoming----------*/}
      <div className="upcoming text-[#FFFFFF]">
        <p className="border-b w-auto text-xl">See Upcoming Auctions and Exhibitions</p>

        <div className="upcoming-sub-div">
          <div className="flex items-center p-4">
            <h1 className="font-bellefair text-3xl">01</h1>
            <div className="flex flex-col justify-between pl-4">
              <h1 className="font-bellefair">MONALISA REDEFINED IN STYLE.</h1>
              <p className="text-xs py-3">Start on : 08:00 GTS . Monday </p>
              <div className="flex justify-between items-center">
                <p className="w-1/2 h-1/4 text-[.6rem] leading-tight">GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.</p>
                <div className="flex">
                  <p className="mr-3 underline font-[400]">See more</p>
                  <p >Set a reminder</p>
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
      {/*---End-Upcoming----------*/}

      <div className="my-[4rem]">
        <div className="border-y border-gray2 py-4 px-[4rem] flex justify-between items-center">
          <p>Explore marketplace</p>
          <img className="w-[2rem]" alt='blue-right-arrow' src={ibluearrowR} />
        </div>
        <div className="border-b border-gray2 py-4 px-[4rem] flex justify-between items-center">
          <p>See auctions</p>
          <img className="w-[2rem]" alt='blue-right-arrow' src={ibluearrowR} />
        </div>
      </div>
      


      {/*---Another Section----------*/}
      <div className="relative px-[3rem] py-[2rem] bg-[#E2E2E2]">
        <div className='flex justify-between'>
          <p className="uppercase font-clash font-[600] text-3xl w-[40%]">Top Creators of the week</p>
          <div className='category-list'>
            <div>
              <p>Editorials</p>
              <p>Fashion</p>
              <p>Lifestyle</p>
              <p>Bluepoint</p>
            </div>
          </div>
        </div>
        <p className="font-clash font-[200] mr-[3.5rem]">“Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden</p>
        <div className="flex justify-end">
          <p className='line-through font-clash font-[700] text-[5rem]'>1985</p>
        </div>
        <div className="top-creator-imgs">
          {/* <img alt='creator2' className="top-creators-imgs" />
          <img alt='creator3' className="top-creators-imgs" /> */}
        </div>
      </div>

      
      <div className="flex flex-col items-center justify-between mt-[3rem] border p-3 font-basker font-gray2">
        <p>Newsletter</p>
        <p className="font-satoshi py-2">Subscribe to get daily updates on new drops & exciting deals </p>
        <div className="flex items-center pt-1">
          <input className="border p-1" type='email' placeholder='Enter your email' />
          <p>A button</p>
        </div>
      </div>

      {/*--------------Footer------------ */}
      <div className="flex items-center justify-between px-[5rem] mt-[1rem]">
        <Logo />
        <div className="flex flex-col">
          <p>Home</p>
          <p>Marketplace</p>
          <p>Auction</p>
          <p>Drops</p>
        </div>
        <div className="flex flex-col">
          <p>Blog</p>
          <p>Wallet</p>
          <p>Rates</p>
          <p>High Bids</p>
        </div>
        <div className="flex flex-col h-[4rem] justify-between">
          <div className='flex items-center' >
            <img className="w-[1rem] h-[1rem] mr-2" alt='icon' src={iemailIcon} />
            <p>atrsystudios@gmail.com</p>
          </div>
          <div className='flex items-center' >
            <img className="w-[1rem] h-[1rem] mr-2" alt='icon' src={ilocationIcon} />
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-[1rem]">
        <p className=" text-gray1 text-sm">Artsystudios © 2022. All Rights Reserved.</p>
      </div>
    </>
  )
}