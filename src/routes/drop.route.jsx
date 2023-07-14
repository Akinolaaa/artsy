import dropdown from '../assets/dropdown-arrow.png';
import DropCard from '../components/drop-card.component';
import drops from '../db/drops';
import Button, { buttonTypes } from '../components/button/button.component';

export default function Drop() {

  return (
    <div className='sm1:px-[2rem] md:px-[5rem] lg:px-[9rem] xl:px-[23rem] '> 
      <div className="flex flex-col items-center justify-between gap-3 px-[3rem]">
        <h2 className="font-[700] text-3xl">Upcoming Drops</h2>
        <p className="text-center font-[400] text-[#616161]"> You may turn on notifications so that no drops will miss you</p>
        <Button className='py-[.5rem]' btnType={buttonTypes.white}> Notify me </Button>
      </div>
      <div className='flex justify-end items-center my-[2rem]'>
        <p>Sort by</p>
        <img className='h-[.5rem] px-2' src={dropdown} alt=""/>
      </div>
      {
        drops.map(drop => {
          const {name,status,id,creator,deadline,imagesrc} = drop;
          return(
            <DropCard key={id} name={name} status={status}
              deadline={deadline} creator={creator} imagesrc={imagesrc}
            />
          )
        })
      }
      <br />
      <br />
      <br />
    </div>
  )
}