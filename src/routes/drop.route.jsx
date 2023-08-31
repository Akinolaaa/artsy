import dropdown from '../assets/dropdown-arrow.png';
import DropCard from '../components/drop-card/drop-card.component';
import drops from '../db/drops';
import Button, { buttonTypes } from '../components/button/button.component';
import { getAllProducts } from '../api/api';
import { useEffect } from 'react';

export default function Drop() {

  useEffect(()=> {
    const fetch = async() => {
      try {
        const resp = await getAllProducts({name: ''})
        console.log(resp)
        
      } catch (error) {
        console.log('comething went wrong')
      }
    }
    fetch()
  })

  return (
    <div className='md:px-[2rem] relative left-1/2 -translate-x-1/2 max-w-screen-md'> 
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
          const { id } = drop;
          return(
            <DropCard key={id} drop={drop} 
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