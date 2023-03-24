import { NavLink } from 'react-router-dom';
import iX from '../../assets/iX.svg';
import ichat from '../../assets/chat-icon.svg';
import Logo from '../logo.component';
import './navigation.styles.scss';

const NavPopUp = ({ effectOnClick }) => {
  return (
    <>
      <div className='absolute bg-white z-30 w-[90%] h-[75%] px-[2rem]'>
        <div className='flex justify-between items-center py-[2rem]'>
          <Logo />
          <img onClick={effectOnClick} alt='x-icon' src={iX} className='pb-1' />
        </div>
        <div className='flex flex-col justify-between font-[400] 
          text-[1.5rem] cursor-pointer mt-[1.5rem] h-[40%]' onClick={effectOnClick}>
          <NavLink to='/'> <p className='px-2'>Home</p> </NavLink>
          <NavLink to='/product'> <p className='px-2'>Marketplace</p> </NavLink>
          <NavLink to='/auction'> <p className='px-2'>Auctions</p> </NavLink>
          <NavLink to='/drop'> <p className='px-2'>Drop</p> </NavLink>
        </div>
        <div className='absolute bottom-[10%] right-[10%] border rounded-full p-5 bg-[#3341C1]'>
          <img alt='chat-icon' src={ichat} className='' />
        </div>
      </div>
      <div className='absolute h-full w-full bg-black opacity-50 z-20'></div>
    </>
  )
}

export default NavPopUp;