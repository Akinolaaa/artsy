import {Outlet} from 'react-router-dom';
import isearch from '../assets/search.svg';
import icart from '../assets/cart.svg';
import inotification from '../assets/notification.svg';
import './navigation.styles.scss'
import Logo from './logo.component';


export default function Navigation() {
  //const {pathname} = useLocation();
  //console.log(pathname);
  return(
    <>
      <div className="flex items-center justify-between px-10 py-7 text-gray">
        <Logo />
        <div className='flex flex-row justify-between font-satoshi font-[400] 
          text-base underline cursor-pointer'>
          <p className='px-2'>Home</p>
          <p className='px-2'>Marketplace</p>
          <p className='px-2'>Auctions</p>
          <p className='px-2'>Drop</p>
        </div>
        <div className='flex justify-between cursor-pointer'>
          <div><img alt='search-icon' className='nav-icon px-3 py-1' src={isearch} /></div>
          <div className='notif'><img alt='cart-icon' className='nav-icon px-3 py-1' src={icart} /></div>
          <div className='notif'><img alt='notif-icon'className='nav-icon px-3 py-1' src={inotification} /></div>
        </div>
      </div>
      <Outlet/>
    </>
  )
}