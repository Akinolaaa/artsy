import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/product/productSelector';
import './product-description.styles.scss';
import love from '../../assets/love.svg';
import { CartContext } from '../../store/cart-context'
import dropdown from '../../assets/dropdown-arrow.png';
import Marketplacenav from '../marketplace-nav/marketplace-nav';
import {  useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ProductDescription() {
    const { addItemToCart } = useContext(CartContext);
    const { artId } = useParams();
    const products = useSelector(selectProducts);
    const art = products.find(art =>  art.id === Number(artId));
    
    const { name, image, price, views } = art;
    
    function addToCart(){
        addItemToCart(art);
        toast.success(`added ${name} to cart`)
    }
    
    return (
    
    <div  className='container2'>
        <div className='firstgrid'>
            <Marketplacenav />
        </div>
        <div className='secondgrid'>
            <div className='productcontainer'>
            <div className='productimage'>
                <img  src={image} alt=""/>
            </div>


            <div>
                <div className='nameandprice'>
                    <h2>{name}</h2> 
                    <p>${price}</p>
                </div>
                <div className='productdetailss'>
                    <div className='productdetails'>
                    <p>Creator: <span>Ali Dawa {}</span></p>
                    <p>Made in Italy</p>
                    <p>Total views: {views}</p>
                    </div>
                    <div className='count'>
                        {/* <button onClick={reduceQuantity}>-</button>
                            <h1>{quantity || 0}</h1>
                        <button onClick={increaseQuantity}>+</button> */}
                    </div>
                    <div className='addtocart'>
                        <button onClick={addToCart}>Add to cart</button>
                        <button><img src={love} alt="love img"/></button>
                    </div>
                </div>

                <div className='moredetails'>
                    <div className='description'><p>Description</p><img src={dropdown} alt="" /></div>
                    <div className='listings'>Listings<p></p><img src={dropdown} alt="" /></div>
                    <div className='status'><p>Status</p><img src={dropdown} alt="" /></div>
                </div>
            </div>
            </div>
            <div></div>
        </div>
    </div>
    )

}