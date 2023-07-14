
import FeaturedProducts from "../sections/featured-products.component";
import UpcomingExhibitions from "../sections/upcoming-exhibitions.component";
import TopCreators from "../sections/top-creators.component";
import ibluearrowR from '../assets/blue-arrow-right.svg';
import Button from "../components/button/button.component";
import Footer from "../components/footer/footer.component";

export default function Home() {

  return(
    <div className="xl:px-[23rem] lg1:px-[15rem] lg:px-[6rem] md:px-[2rem] ">
      <div className="px-[5rem] max-sm1:px-[2rem]">
        <h1 className='flex justify-center font-clash text-5xl max-sm1:text-3xl leading-[4rem] text-gray font-[500] '> 
          Photography is poetry & beautiful untold stories
        </h1>
      </div>
      <p className="px-[5rem] max-sm1:px-[2rem] mt-[2rem] max-sm1:text-center">
        Flip through more than 10,000 vintage shots, old photograghs, historic images and captures seamlessly in one place. Register to get top access.
      </p>

      <FeaturedProducts />

      <UpcomingExhibitions />
  
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

      <TopCreators />
      <br />
      <br />

       {/*--------------Footer------------ */}
      <div className="flex flex-col items-center justify-between max-sm1:items-start mt-[3rem] max-sm1:mt-0 border max-sm1:border-none py-[2rem] max-sm1:py-0 mx-[2rem] font-basker font-gray2">
        <p className="text-xl">Newsletter</p>
        <p className="font-satoshi py-2">Subscribe to get daily updates on new drops & exciting deals </p>
        <div className="flex max-sm1:flex-col gap-4 items-center max-sm1:items-start pt-1 max-sm1:w-full">
          <input className="border p-1 max-sm1:w-full" type='email' placeholder='Enter your email' />
          <Button>Subscribe</Button>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  )
}