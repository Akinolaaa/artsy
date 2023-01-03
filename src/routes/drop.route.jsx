import dropdown from '../assets/dropdown-arrow.png';
import DropCard from '../components/drop-card.component';

export default function Drop() {

  return (
    <div> 
      <div className="flex flex-col items-center justify-between px-[3rem]">
        <h2 className="font-[700] text-3xl">Upcoming Drops</h2>
        <p className="text-center"> You may turn on notifications so that no drops will miss you</p>
        <p> Notify me</p>
      </div>
      <div className='flex justify-end items-center'>
        <p>Sort by</p>
        <img className='h-[.5rem] px-2' src={dropdown} alt=""/>
      </div>
      <DropCard />
    </div>
  )
}