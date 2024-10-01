import React from 'react';
import ProductCard from '../home.productCard/ProductCard';
import './main.css'

function Main() {

  const arr = new Array(8);
  arr.fill(0);

  return (
    <>
      <div className='main--outer w-full pb-2 font-sans mt-14 '>

        <div className='main--heading-outer w-full flex flex-col justify-center items-center'>
          <div className='main--heading-text py-6 text-5xl font-semibold'>All Products</div>
          <div className='main--divider w-14 h-0 border-2 border-[rgba(0,0,0,0.1)] rounded-full'></div>
        </div>

        <div className='main--arrangement w-full h-12 flex flex-row-reverse items-center'>
          {/* deviating from the design because "Yugha S" said to put the filters in a rectangle. */}
          <div className='main--arrangement-rectangle w-[400px] h-[40px] mx-5 flex flex-row-reverse justify-center items-center'>
            <div className='main--arrangement-filter w-[170px] h-[30px] mx-5 flex flex-row justify-around items-center'>
              <span className='main--arrangement-filter-text-left font-semibold'>Filter:</span>
              <span className='main--arrangement-filter-text-right font-semibold'>All Products</span>
              <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.86603 6.5C4.48113 7.16667 3.51887 7.16667 3.13397 6.5L0.535898 2C0.150998 1.33333 0.632122 0.500001 1.40192 0.500001L6.59807 0.5C7.36788 0.5 7.849 1.33333 7.4641 2L4.86603 6.5Z" fill="#31546D" />
              </svg>
            </div>
            <div className='main--arrangement-sort w-[170px] h-[30px] mx-5 flex flex-row justify-around items-center'>
              <span className='main--arrangement-sort-text-left font-semibold'>Sort:</span>
              <span className='main--arrangement-sort-text-right font-semibold'>Best Selling</span>
              <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.86603 6.5C4.48113 7.16667 3.51887 7.16667 3.13397 6.5L0.535898 2C0.150998 1.33333 0.632122 0.500001 1.40192 0.500001L6.59807 0.5C7.36788 0.5 7.849 1.33333 7.4641 2L4.86603 6.5Z" fill="#31546D" />
              </svg>
            </div>
          </div>
        </div>

        <div className='main--products-outer w-full p-5 flex flex-row flex-wrap justify-around items-center '>
          {
            arr.map((item, index) => (<ProductCard index={index} />))
          }
        </div>

        <div className='main--viewall-outer w-full h-24 flex flex-row justify-center items-center'>
          <button className='main--viewall-btn w-28 h-10 text-sm rounded-xl font-semibold'>View All</button>
        </div>
      </div>
    </>
  )
}


export default Main;


