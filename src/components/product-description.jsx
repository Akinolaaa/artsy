import { useState, useContext } from 'react';
import './product-description.styles.scss';
import love from '../assets/love.svg';
import { CartContext } from '../store/cart-context'
import dropdown from '../assets/dropdown-arrow.png';
import Marketplacenav from './Marketplacenav';
import products from '../db/products';
import {  useParams } from 'react-router-dom';

export default function Productdescription() {
    const [ quantity, setQuantity  ] = useState(0);
    const { artId } = useParams();
    const art = products.find(art =>  art.id === artId);
    
    const {name, src,price} = art;
    
    
    const { addItemToCart } = useContext(CartContext);
    function increaseQuantity(){
        setQuantity(quantity+1);
        //console.log(cartItems)
    }
    function reduceQuantity(){
        setQuantity(quantity>0 ? quantity-1 : 0);
    }
    function addToCart(){
        if(quantity){
            addItemToCart({...art, quantity:quantity});
            alert("added " + quantity + " item(s) to cart")
            setQuantity(0);
        }
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
                        <button onClick={reduceQuantity}>-</button>
                        <h1>{quantity ?? 0}</h1>
                        <button onClick={increaseQuantity}>+</button>
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