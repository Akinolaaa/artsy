import dropdown from '../assets/dropdown-arrow.png';
import dropdownup from '../assets/dropdown-up.svg';
import search from '../assets/search.svg';
import filter from '../assets/filter.svg'
import "../components/productpage.styles.scss";
import Products from '../components/product';
import products from '../products';
import rightarrow from "../assets/right-arrow.svg";
import Footer from "../components/footer";
export default function Product() {

  return(
    <div className="container">
       <div className='firstddiv'>
        <h2>Home/Marketplace/Editorials</h2>
        <p>Showing 1-5 of 18 results</p>
      </div>
      <div className='seconddiv'>
            <div className='search1'>
            <img src={search} alt="search"/>
            <input type="search" id="search" name="Search" placeholder={<img src={search} alt="search"/> + "Search"}/>
            
            

            </div>
         
         <div>
            <div className='filter1'>
              <img src={filter} alt="filter"/>
              <p>Filter</p>
            </div>

            <div className='filter2'>
              <div>
                <h3>By category <span><img src={dropdownup} alt=""/></span></h3>
                <div>
                <input type="checkbox" id="Editorials" name="Editorials" value="Editorials" />
                <label for="Editorials">  Editorials</label><br />
                <input type="checkbox" id="Fashion" name="Fashion" value="Fashion" />
                <label for="Fashion">  Fashion</label><br />
                <input type="checkbox" id="Optics" name="Optics" value="Optics" />
                <label for="Optics">  Optics</label><br />
                <input type="checkbox" id="Art and Museum" name="Art and Museum" value="Editorials" />
                <label for="Art and Museum">  Art and Museum</label><br />
                <input type="checkbox" id="Nature" name="Nature" value="Nature" />
                <label for="Nature">  Nature</label><br />
                </div>
              </div>

              <div>
              <h3>By price <span><img src={dropdownup} alt=""/></span></h3>
              <p>$100.00 - $150.00</p>
              <p>Scroller</p>
              </div>

              <div>
              <h3>By artist <span><img src={dropdownup} alt=""/></span></h3>
              <ul>
                <li>All</li>
                <li>Below $100.00</li>
                <li>$100.00 - $150.00</li>
                <li>$150.00 - $200.00</li>
                <li>Above $200.00</li>
              </ul>
              </div>
              <div>
              <h3>Collection year <span><img src={dropdown} alt=""/></span></h3>
              </div>
            </div>
         </div>
      </div>






     
      <div className='thirddiv'>
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
      <div className="search2">
        <p>See 1-6 of 15 results</p>
        <div className='sortby'>
          <p>Sort by</p>
          <img src={dropdown} alt=""/>
        </div>
      </div>
     
      <div className='productmaindiv'>
        {products.map(product => <Products
                                  key={product.id}
                                  name={product.name}
                                  img={product.src}
                                  price={product.price}
                                  /> 
                      )
        }
      </div>
      
      <div >
      <p className='loadmore'>Load more <span><img alt=""src={rightarrow}/></span></p>
      </div>
      </div>
      <div  className='fourthddiv' >
      <Footer/>
      </div>



      {/* <div>
<p>See 1-6 of 15 results</p>
<div>
  <p>Sort by</p>
  <img src={dropdown} alt=""/>
</div>
</div> */}
    </div>
  )
}