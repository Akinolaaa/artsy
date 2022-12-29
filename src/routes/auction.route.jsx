import AuctionProductCard from "../components/auction-product-card.component";
import rightarrow from "../assets/right-arrow.svg";
import iimage1 from '../assets/auction/image1.svg'
import iimage2 from '../assets/auction/image2.svg'


export default function Auction() {

  return(
    <div> 
      <p className="px-[5rem] max-sm1:px-[2rem] mt-[2rem]">
        Here’s an overview of products actively on auction, explore!
      </p>
      <div> Pocture stuff</div>
      <p className="px-[5rem] max-sm1:px-[2rem] mt-[2rem]">
        Top bids from popular creators
      </p>
      <AuctionProductCard img={iimage1}/>
      <AuctionProductCard img={iimage2}/>

      <div>
        <p className='loadmore'>Load more <span><img alt=""src={rightarrow}/></span></p>
      </div>
    </div>
  )
}