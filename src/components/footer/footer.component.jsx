import iemailIcon from '../../assets/iemail-icon.svg';
import ilocationIcon from '../../assets/ilocation-icon.svg';
import Logo from "../../components/logo/logo.component";

const Footer = () => {

  return(
    <div>
      <div className="flex items-center justify-between px-[5rem] max-sm1:px-[2rem] sm1:mt-[2rem]">
        <div className="max-sm1:hidden">
          <Logo />
        </div>
        
        <div className="flex flex-col max-sm1:hidden">
          <p>Home</p>
          <p>Marketplace</p>
          <p>Auction</p>
          <p>Drops</p>
        </div>
        <div className="flex flex-col max-sm1:hidden">
          <p>Blog</p>
          <p>Wallet</p>
          <p>Rates</p>
          <p>High Bids</p>
        </div>
        <div className="flex flex-col h-[4rem] justify-between max-sm1:py-[1.5rem]">
          <h2 className="hidden max-sm1:block uppercase">Reach Us</h2>
          <div className='flex items-center' >
            <img className="w-[1rem] h-[1rem] mr-2" alt='icon' src={iemailIcon} />
            <p>atrsystudios@gmail.com</p>
          </div>
          <div className='flex items-center' >
            <img className="w-[1rem] h-[1rem] mr-2" alt='icon' src={ilocationIcon} />
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-[1rem] mt-[1.5rem]">
        <p className=" text-gray1 text-sm">Artsystudios © 2022. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;