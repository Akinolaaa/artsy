import './top-creators.styles.scss';

export default function TopCreators(){

  return (
    <div className="relative px-[3rem] py-[2rem] max-sm1:p-2 bg-[#E2E2E2] ">
      <div className='flex justify-between'>
        <p className="uppercase font-clash font-[600] text-3xl w-[40%]">Top Creators of the week</p>
        <div className='category-list'>
          <div>
            <p>Editorials</p>
            <p>Fashion</p>
            <p>Lifestyle</p>
            <p>Bluepoint</p>
          </div>
        </div>
      </div>
      <p className="font-clash font-[200] mr-[3.5rem]">“Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden</p>
      <div className="flex justify-end">
        <p className='line-through font-clash font-[700] text-[5rem]'>1985</p>
      </div>
      <div className="top-creator-imgs">
        {/* <img alt='creator2' className="top-creators-imgs" />
        <img alt='creator3' className="top-creators-imgs" /> */}
      </div>
    </div>
  )
}
