import { useContext } from "react";
import CheckoutItem from "../components/checkout-item.component";
import { CartContext } from "../store/cart-context";

export default function Checkout() {
  const { cartItems, total, cartCount } = useContext(CartContext);
  return(
    <div>
      {
        cartItems.length ? 
        cartItems.map(item => <CheckoutItem checkoutItem={item} />)
        :
        <div className="flex items-center justify-center">
          <p className="font-bold text-2xl">No Art in Cart</p>
        </div>
      }
      <br />
      <br />
      <br />
    <table className="w-full">
      <tbody>
        <tr className="px-4">
          <td>Products in cart:</td>
          <td className="text-right">{cartCount} items</td>
        </tr>
        <tr>
          <td>Shipping:</td>
          <td className="text-right">${500}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td className="text-right">${total}</td>
        </tr>
        <tr>------------------------------------------------</tr>
        <tr>
          <td>Grand Total:</td>
          <td className="text-right">${total + 500}</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}