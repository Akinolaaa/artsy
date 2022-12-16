import irightarrow from '../assets/right-arrow.svg';
import iimage0 from '../assets/series/image.svg';
import iimage1 from '../assets/series/image1.svg';
import iimage2 from '../assets/series/image2.svg';
import iimage3 from '../assets/series/image3.svg';
import iimage4 from '../assets/series/image4.svg';
import './Featured-product-card.styles.scss';

export default function FeaturedProductCard({image, reverse}){
  const flexRow = reverse ? 'flex-row-reverse' : ''
  return( 
    <div className='pb-5 pt-7 border-t-[0.5px] border-gray2'>
      <div className={`flex ${flexRow}`}>
        <img alt='image1' className='w-1/2' src={image}/>
        <div className='flex flex-col justify-between pl-2 w-1/2'>
          <h3 className='font-stix font-[700] text-3xl text-gray2'> The Boolean Egyptian</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
          <div className='flex justify-between items-center pt-3 px-1'>
            <div className='img-thumbnails'>
              <img className='img-thumbnail' alt='simages' src={iimage0}/>
              <img className='img-thumbnail' alt='simages' src={iimage1}/>
              <img className='img-thumbnail' alt='simages' src={iimage2}/>
              <img className='img-thumbnail' alt='simages' src={iimage3}/>
              <img className='img-thumbnail' alt='simages' src={iimage4}/>
            </div>
            <p>64 major creators</p>
            <div className='flex items-center border rounded-full px-1 py-2'>
              <img alt='right-arrow' className='w-7' src={irightarrow} />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}