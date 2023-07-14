import { useContext } from "react";
import CheckoutItem from "../components/checkout-item/checkout-item.component";
import { CartContext } from "../store/cart-context";
import { Link } from "react-router-dom";
import  Button  from "../components/button/button.component"

export default function Checkout() {
  const { cartItems, cartTotal, cartCount } = useContext(CartContext);

  return(
    
      !cartCount ? 
      (<div className="flex flex-col gap-3 items-center justify-center mt-8">
        <p className="font-bold text-2xl">No Art in Cart</p>
        <Link to={'../product'}> <p className="underline text-blue">shop for items</p> </Link>
      </div>)
      :
      <div className="px-[2rem] xl:px-[23rem] lg1:px-[15rem] lg:px-[10rem] md:px-[2rem] min-width-min">
        {
          cartItems.map((item) => <CheckoutItem key={item.id} checkoutItem={item} />)
        }
        <br />
        <br />
        <br />
        <table className="w-full">
          <tbody>
            <tr>
              <td>Products in cart:</td>
              <td className="text-right">{cartCount} item(s)</td>
            </tr>
            <tr>
              <td>Shipping:</td>
              <td className="text-right">${500}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td className="text-right">${cartTotal}</td>
            </tr>
            <tr className="border-t border-dashed">
              <td>Grand Total:</td>
              <td className="text-right">${cartTotal + 500}</td>
            </tr>
          </tbody> 
        </table>
        <div>
          <Button> Proceed to Checkout </Button>
          <Link to={'../product'}> <p className="underline text-blue">continue shopping</p> </Link>
        </div>
        
      </div>
    
  )
}