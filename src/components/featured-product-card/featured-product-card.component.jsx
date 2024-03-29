import { useNavigate } from 'react-router-dom';
import irightarrow from '../../assets/right-arrow.svg';
import iimage0 from '../../assets/series/image.svg';
import iimage1 from '../../assets/series/image1.svg';
import iimage2 from '../../assets/series/image2.svg';
import iimage3 from '../../assets/series/image3.svg';
import iimage4 from '../../assets/series/image4.svg';
import './featured-product-card.styles.scss';

export default function FeaturedProductCard({name, image, reverse}){
  const navigate = useNavigate();
  const flexRow = reverse ? 'flex-row-reverse' : ''
  return( 
    <div className='pb-5 pt-7 border-t-[0.5px] border-gray2 cursor-pointer' onClick={() => navigate('/product')}>
      <div className={`flex max-sm1:flex-col max-sm1:items-center ${flexRow}`}>

        <div className='w-[50%] max-sm1:w-full relative '>
          <img alt='image1' className='w-full' src={image}/>
          {/*---------------Show on HoverHover--------------- */}
          <div className='hidden max-sm1:block absolute top-0 right-0 bottom-0 left-0 bg-[#000000]/50 z-10 w-full height-auto'>
            <h1 className='absolute top-[20%] w-full font-stix font-[700] text-[2.5rem] text-white text-center'> {name}</h1>
            <div className='absolute top-[50%] right-[10%] flex items-center border border-white rounded-full px-2 py-4'>
              <img alt='right-arrow' className='w-7' src={irightarrow} />
            </div>
          </div>
          {/* ------------- */}   
        </div>

        <div className='flex flex-col justify-between pl-2 w-1/2 max-sm1:w-full'>
          <h3 className='font-stix font-[700] text-3xl text-gray2 max-sm1:hidden'> {name}</h3>
          <p className='max-sm1:py-[1rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
          <div className='flex items-center pt-3 px-1 justify-between w-full'>
            <div className='flex'>
              <div className='flex w-[5rem]'>
                <img className='h-[25px]' alt='simages' src={iimage0}/>
                <img className='-translate-x-3 h-[25px]' alt='simages' src={iimage1}/>
                <img className='-translate-x-6 h-[25px]' alt='simages' src={iimage2}/>
                <img className='-translate-x-9 h-[25px]' alt='simages' src={iimage3}/>
                <img className='-translate-x-12 h-[25px]' alt='simages' src={iimage4}/>
              </div>
              <div>
                <p>64 major creators</p>
              </div>
            </div>
            <div className='flex items-end justify-end max-sm1:hidden border rounded-full mr-2 px-1 py-2'>
              <img alt='right-arrow' className='w-7' src={irightarrow} />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}