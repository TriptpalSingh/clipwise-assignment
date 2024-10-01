import React from 'react';
import './productCard.css'

function ProductCard(props) {

  const index = props.index;

  // const buttonStyle = () => {
  //   console.log(index)
  //   if (index === 0) {
  //     return (
  //       {
  //         background: "linear-gradient(90deg, #75CCEB 0%, #6FB4FF 100%)",
  //         color: "white"
  //       }
  //     )
  //   }
  //   return (
  //     {
  //       border: "2px solid #6FB4FF",
  //       color: "#6FB4FF"
  //     }
  //   )
  // }


  return (
    <>
      <div className='productcard--outer w-[320px] h-[410px] m-10 font-sans rounded-3xl flex flex-col justify-around items-center'>
        <div className='productcard--image w-full h-[200px] '>
          <img className='w-[200px] h-[200px] mx-auto' src='./assets/rock.png' />
        </div>
        <div className='productCard--info w-full h-12 flex flex-col justify-center items-center '>
          <span className='text-lg font-normal'>CRYSTAL AGATE PHONE GRIP</span>
          <span className='text-lg font-bold'>18.99$</span>
        </div>
        <div className='productCard--buy w-full h-20 flex flex-row justify-center'>
          <button className='productCard--buy-btn w-[150px] h-[50px] rounded-2xl font-semibold text-sm'>BUY NOW</button>
        </div>
      </div>
    </>
  )
}

export default ProductCard;
