import { useState, useContext } from 'react';
import { CartContext } from '../../store/cart-context'
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import isearch from '../../assets/search.svg';
import icart from '../../assets/cart.svg';
import isandwich from '../../assets/sandwich.svg';
import inotification from '../../assets/notification.svg';
import Logo from '../logo.component';
import NavPopUp from './navpopup.component';
import './navigation.styles.scss';

const getBaseDir = (path) => {
  let base = "";
  if(path.length > 0 ){
    for(let i=1; i<path.length; i++) {
      if(path.charAt(i) === "/") {
        break;
      }
      base = base + path.charAt(i);
    }
    return base.toLocaleLowerCase();
  }
}
const Navigation = ()  => {
  const [showNavPopUp, setShowNavPopUp] = useState(false);
  const { cartItems } = useContext(CartContext);
  const {pathname} = useLocation();

  const handleNavPopUp = () => {
    setShowNavPopUp(!showNavPopUp);
  }
  
  const currentBasePath = getBaseDir(pathname);
  return(
    <>
      { showNavPopUp && <NavPopUp effectOnClick={handleNavPopUp} /> }
      <div className="flex items-center min-w-max max-sm1:items-start justify-between px-10 max-sm1:px-4 py-7 max-sm1:mt-[1rem] text-gray lg1:px-[8rem]">
        <div className='hidden max-sm1:block max-sm1:w-[33%]'>
          <img alt='sandwich-icon' className='nav-icon px-3 py-1' src={isandwich} onClick={handleNavPopUp} />
        </div>
        <div className='max-sm1:w-[33%] flex justify-center items-end'>
        <NavLink to='/'> <Logo /> </NavLink>
        </div> 
        <div className='flex justify-between max-sm1:hidden font-satoshi font-[400] 
          text-base cursor-pointer '>
          <NavLink to='/'> <p className={`px-2 ${pathname==='/'? 'underline':''}` }>Home</p> </NavLink>
          <NavLink to='/product'> <p className={`px-2 ${currentBasePath==='product'? 'underline':''}`}>Marketplace</p> </NavLink>
          <NavLink to='/auction'> <p className={`px-2 ${currentBasePath==='auction'? 'underline':''}`}>Auctions</p> </NavLink>
          <NavLink to='/drop'> <p className={`px-2 ${currentBasePath==='drop'? 'underline':''}`}>Drop</p> </NavLink>
        </div>
        <div className='flex justify-end cursor-pointer max-sm1:w-[33%]'>
          <div><img alt='search-icon' className='nav-icon px-3 py-1' src={isearch} /></div>
          <div className='notif'>
          <img alt='cart-icon' className='nav-icon px-3 py-1 max-sm1:hidden' src={icart} />
          </div>
          <div className={`${!cartItems.length ? '': 'notif'}`}>
            <NavLink to='/checkout'>
              <img alt='notif-icon' className='nav-icon px-3 py-1'  src={inotification} />
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  )
}
export default Navigation;