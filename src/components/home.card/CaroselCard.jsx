import React from 'react';
import './card.css'

function CaroselCard() {
  return (
    <>
      <div className='card--outer w-[500px] h-[500px] flex flex-col justify-center items-center bg-white font-sans'>
        <span className='newlot-span absolute bg-blue text-white w-1/6 h-[40px] font-semibold rounded-r-lg'>New Lot</span>
        <div className='crystal-img-div'>
          <img src='./assets/rock.png' />
        </div>
        <div className='border-div rounded-full'></div>
        <div className='details-div flex flex-row justify-center items-center font-sans'>
          <span className='text-base font-normal leading-loose'>CRYSTAL AGATE PHONE GRIP</span><span className='text-xl font-semibold px-1 leading-loose'> - 18.99$</span>
        </div>
      </div>
    </>
  )
}


export default CaroselCard;
