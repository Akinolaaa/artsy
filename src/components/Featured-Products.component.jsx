import FeaturedProductCard from "./featured-product-card.component";
import iimage0 from '../assets/product-imgs/image.svg';
import iimage1 from '../assets/product-imgs/image1.svg';
import iimage2 from '../assets/product-imgs/image2.svg';


export default function FeaturedProducts(){

  return(
    <div className="p-5 mt-5">
    <h2 className="font-[500] text-3xl">Featured Products</h2>
      <FeaturedProductCard image={iimage0} />
      <FeaturedProductCard image={iimage1} reverse/>
      <FeaturedProductCard image={iimage2}/>
    </div>
  )
}