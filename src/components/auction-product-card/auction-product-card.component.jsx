import "./auction-product-card.styles.scss";
import iredHeart from '../../assets/auction/red-heart.svg';
import Button from "../button/button.component";


export default function AuctionProductCard({ img }){

  return(
    <div className="auction-product-card-container">
      <div className="sub">
        <div className="flex justify-end translate-x-[-0.5rem]">
          <img alt="heart-icon" src={iredHeart} className='border rounded-full p-1' />  
        </div> 
        <div className="flex justify-center mt-1">
          <img alt="auction-item" src={img} />
        </div>
        <div className="flex justify-between mt-1 px-2">
          <p className="font-[700]"> Out of the box </p>
          <p className="font-[700]"> 0.5 ETH</p>
        </div>
      </div>
      <div className="pl-3">
        <table className="w-1/2 sm1:w-[75%] my-[1rem]">
          <tbody>
            <tr > 
              <td className="py-[.5rem] text-gray2">Creator:</td>
              <td><span className="text-[#006CA2]">Jacob Banks</span></td>
            </tr>
            <tr> 
              <td>Date:</td>
              <td className="font-[600]">12/08/22</td>
            </tr>
            <tr className="max-sm1:hidden"> 
              <td className="py-[.5rem]">Highest Bid:</td>
              <td className="font-[600]">0.57 ETH</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-between items-center bg-[#F6F4F4] px-3 rounded">
        <div>
          <p className="pb-3"> Current Bid</p>
          <p className="font-[700]">0.987 ETH</p>
        </div>
        <Button>Place Bid</Button>
      </div>
    </div>
  )
}