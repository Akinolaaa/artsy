import { useContext } from "react";
import { Link } from "react-router-dom";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { CartContext } from "../../store/cart-context";
// import PRODUCTS from "../../db/products";

const Cart = ({ switchToShipping }) => {
  const { cartItems, cartCount, cartTotal } = useContext(CartContext);

  return (
    <div className=" flex flex-col justify-between gap-2 h-[75vh]">
      <div className="overflow-auto">
      {
        cartItems.map((item) => <CheckoutItem key={item.id} checkoutItem={item} />)
      }
      </div>

      <div className="flex sm1:flex-cols gap-3 mt-5">
        <div className={`grid grid-rows-2 max-sm1:order-2 w-1/2`}>
          <button className="whitespace-nowrap text-white text-xs bg-[#333333] py-1 px-3 w-full h-full"
            onClick={switchToShipping}>
            Proceed to Checkout
          </button>
          <div className="flex items-end justify-center">
            <Link to={'../product'}> <p className="underline text-center">continue shopping</p> </Link>
          </div>
        </div>

        <div className="w-1/2 max-sm1:order-1">
          <div>
            <div className="flex gap-2 justify-between whitespace-nowrap">
              <p className="">Products in cart:</p>
              <p className="text-right">{cartCount} item(s)</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping:</p>
              <p className="text-right">${500}</p>
            </div>
            <div className="flex justify-between">
              <p>Total:</p>
              <p className="text-right">${cartTotal}</p>
            </div>
            <div className="flex justify-between">
              <p>Grand Total:</p>
              <p className="text-right">${cartTotal + 500}</p>
            </div>
          </div> 
        </div>
          
      </div>
    </div>
  )
}

export default Cart;

//<div className="grid sm1:grid-cols-2 max-sm1:grid-rows-2 gap-7 mt-5">