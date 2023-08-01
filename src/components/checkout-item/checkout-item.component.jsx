import { useContext } from "react"
import { CartContext } from "../../store/cart-context";


export default function CheckoutItem({ checkoutItem }) {
  const { name, src, price, quantity } = checkoutItem;
  
  const { addItemToCart, deleteItemFromCart, removeItemFromCart } = useContext(CartContext);

  const increamentItem = () => {
    addItemToCart(checkoutItem);
  }

  const decrementItem = () => {
    removeItemFromCart(checkoutItem);
  }

  const deleteItem = () => {
    deleteItemFromCart(checkoutItem);
  }

  return (
    <div className="flex gap-2 border-b border-[#D0BFBF] py-2"> 
      <img src={src} className='h-[7rem]' alt={`item-${name}`}/>
      <div className="flex flex-col justify-between w-full">
        <p>Editorials</p>
        <p>{name}</p>
        {/*-------- + quantity - ---------------*/}
        <div className="flex items-center rounded-full w-1/2 cursor-pointer">
          <div className="flex justify-center items-center border px-3 rounded-tl-lg rounded-bl-lg"
          onClick={decrementItem}>
            <span>-</span>
          </div>
          <div className="border-y px-3">
            <span>{quantity}</span>
          </div>
          <div className="flex justify-center items-center border px-3 rounded-tr-lg rounded-br-lg"
          onClick={increamentItem}>
            <span>+</span>
          </div>
        </div>
        {/*/////-------- + quantity - ---------------*/}
        </div>
      <div className="flex flex-col justify-between items-center"
      onClick={deleteItem}>
        <div className="border rounded-full px-2">
          <p> X </p>
        </div>
        {/*-------------- $price  ---------------*/}
        <div className="px-2">
          <p>${price * quantity}</p>
        </div>
        {/*/////---------- $price  ---------------*/}
      </div>
    </div>
  )
}