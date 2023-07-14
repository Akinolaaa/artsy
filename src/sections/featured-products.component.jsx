import FeaturedProductCard from "../components/featured-product-card/featured-product-card.component";
import iimage0 from '../assets/product-imgs/image.svg';
import iimage1 from '../assets/product-imgs/image1.svg';
import iimage2 from '../assets/product-imgs/image2.svg';


export default function FeaturedProducts(){

  return(
    <div className="p-5 mt-5">
    <h2 className="font-[500] text-3xl">Featured Products</h2>
      <FeaturedProductCard name='The Boolean Egyptian' image={iimage0} />
      <FeaturedProductCard name='Are We There Yet?' image={iimage1} reverse/>
      <FeaturedProductCard name='Oloibiri 1997' image={iimage2}/>
    </div>
  )
}