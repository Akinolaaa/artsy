

export default function CheckoutItem({ checkoutItem }) {
  const { id, name, src, price, quantity } = checkoutItem;

  return (
    <div className="flex gap-2 p-2"> 
      <img src={src} className='h-[7rem]' alt={`item-${name}`}/>
      <div className="flex flex-col justify-between w-full">
        <p>Editorials</p>
        <p>{name}</p>
        {/*-------- + quantity - ---------------*/}
        <div className="flex justify-around items-center border rounded-full w-1/2">
          <div className="flex justify-center items-center">
            <p>+</p>
          </div>
          <div className="border-x px-5">
            <p>{quantity}</p>
          </div>
          <div className="flex justify-center items-center">
            <p>-</p>
          </div>
        </div>
        {/*/////-------- + quantity - ---------------*/}
        </div>
      <div className="flex flex-col justify-between items-center">
        <p> X </p>
        {/*-------------- $price  ---------------*/}
        <div className="px-2">
          <p>${price}</p>
        </div>
        {/*/////---------- $price  ---------------*/}
      </div>
    </div>
  )
}