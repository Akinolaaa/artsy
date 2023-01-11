import './product-description.styles.scss';
import love from '../assets/love.svg';

import { useState } from 'react';
import dropdown from '../assets/dropdown-arrow.png';
import Marketplacenav from './Marketplacenav';
import art from '../assets/series/art1.png'

export default function Productdescription() {

    
    const [count, updateCount] = useState(0);
    function increaseCount(){
        return (updateCount(count++));
    }
    function reduceCount(){
        return updateCount(count--);
    }
    return (
    <div  className='container2'>
        <div className='firstgrid'>
            <Marketplacenav />
            
        </div>
        <div className='secondgrid'>
            <div className='productcontainer'>
            <div className='productimage'>
                <img  src={art} alt=""/>
            </div>


            <div>
                <div className='nameandprice'>
                    <h2>art1</h2>
                    <p>5dollars</p>
                </div>
                <div className='productdetailss'>
                    <div className='productdetails'>
                    <p>Creator: <span>Ali Dawa {}</span></p>
                    <p>Made in Italy</p>
                    <p>Total views: 1.7K {}</p>
                    </div>
                    <div className='count'>
                        <button onClick={reduceCount}>-</button>
                        <h1>{count}</h1>
                        <button onClick={increaseCount}>+</button>
                    </div>
                    <div className='addtocart'>
                        <button>Add to cart</button>
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