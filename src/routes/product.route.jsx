import dropdown from '../assets/dropdown-arrow.png';
import "../components/productpage.styles.scss";
import Products from '../components/product';
import products from '../products';
import rightarrow from "../assets/right-arrow.svg";
import Footer from "../components/footer";
export default function Product() {

  return(
    <div className="container">
      <div>
    <h2>Home/Marketplace/Editorials</h2>
      </div>
      <p>Showing 1-5 of 18 results</p>
      <div className='fandsby'>
        <div className='filter'>
          <p>Filter</p>
          <img src={dropdown} alt=""/>
        </div>
        <div className='sortby'>
          <p>Sort by</p>
          <img src={dropdown} alt=""/>
        </div>
      </div>
      <div>
        {products.map(product => <Products
                                  key={product.id}
                                  name={product.name}
                                  img={product.src}
                                  price={product.price}
                                  /> 
                      )
        }
      </div>
      <div>
      <p className='loadmore'>Load more <span><img alt=""src={rightarrow}/></span></p>
      </div>
      <Footer />
    </div>
  )
}