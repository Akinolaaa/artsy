import { useContext, useEffect, useState } from "react";
import Cart from "../components/cart/cart.component";
import ShippingDetails from "../components/shipping-details/shipping-details.component";
import { CartContext } from "../store/cart-context";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cartCount } = useContext(CartContext);
  const [ currentPg, setCurrentPg ] = useState("cart");
  const [showShipping, setShowShipping ] = useState(false);

  useEffect( () => {
    if(currentPg === "shipping"){
      setShowShipping(true);
      return;
    }
    setShowShipping(false)
  }, [currentPg])

  const switchToShipping = () => setCurrentPg("shipping");

  const switchToCart = () => setCurrentPg("cart");

  return(
    
      !cartCount ? 
      (<div className="flex flex-col gap-5 items-center justify-center mt-8">
        <p className="font-bold text-2xl">No Art in Cart</p>
        <Link to={'../product'}> <p className="underline text-blue">shop for items</p> </Link>
      </div>)
      :

      <div className="relative left-1/2 -translate-x-1/2 max-w-screen-sm1 px-[1rem] min-width-min mb-3" >
        <div className="flex justify-center mb-3">
          <div className="flex justify-between whitespace-nowrap gap-4 w-3/5 max-sm1:w-full  border-b border-[#D0BFBF] mb-4 text-xs cursor-pointer">
            <p className={`px-1 py-2 ${!showShipping ? "border-b-2 text-black": "border-0 text-[#D0BFBF]"}`} onClick={switchToCart}> Shopping cart </p>
            <p className={`px-1 py-2 ${showShipping ? "border-b-2 text-black": "border-0 text-[#D0BFBF]"}`}> Shipping details </p>
            <p className={`px-1 py-2 border-0 text-[#D0BFBF]`}> Payment details </p>
          </div>
        </div>
        {
          showShipping ?
          <ShippingDetails show={showShipping} />
          :
          <Cart switchToShipping={switchToShipping} showShipping={showShipping} />
        }
      </div>
    
  )
}