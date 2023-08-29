import { useContext } from 'react';
import './product-description.styles.scss';
import love from '../../assets/love.svg';
import { CartContext } from '../../store/cart-context'
import dropdown from '../../assets/dropdown-arrow.png';
import Marketplacenav from '../marketplace-nav/marketplace-nav';
import PRODUCTS from '../../db/products';
import {  useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function ProductDescription() {
    const { addItemToCart } = useContext(CartContext);
    const { artId } = useParams();
    const art = PRODUCTS.find(art =>  art.id === artId);
    
    const { name, src,price } = art;
    
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
                <img  src={src} alt=""/>
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
                    <p>Total views: 1.7K {}</p>
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