import AuctionProductCard from "../components/auction-product-card/auction-product-card.component";
import rightarrow from "../assets/right-arrow.svg";
import iimage1 from '../assets/auction/image1.svg'
import iimage2 from '../assets/auction/image2.svg'
import Carousel from "../components/carousel/carousel.component";
import img1 from "../assets/carousel/image1.svg"
import img2 from "../assets/carousel/image2.svg"
import img3 from "../assets/carousel/image3.svg";

export default function Auction() {
  
  return(
    <div> 
      <p className="px-[2rem] sm1:px-[5rem] mt-[2rem] sm1:font-bold">
        Here’s an overview of products actively on auction, explore!
      </p>
      <div className="px-[2rem] sm1:px-[5rem]">
        <Carousel images={[img1,img2,img3]}/>
      </div>
      <p className="px-[2rem] sm1:px-[5rem] mt-[5rem] sm1:mt-[3rem] sm1:font-bold">
        Top bids from popular creators
      </p>

      <div className="flex flex-col sm1:flex-row sm1:px-[5rem]">
        <AuctionProductCard img={iimage1}/>
        <AuctionProductCard img={iimage2}/>
      </div>

      <div className="sm1:hidden">
        <p className='loadmore'>Load more <span><img alt=""src={rightarrow}/></span></p>
      </div>
      <br/>
      <br />
    </div>
  )
}