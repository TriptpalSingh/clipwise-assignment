import React from "react";
import './footer.css'

function Footer() {
  return (
    <>
      <div className="footer--outer w-full h-[800px] font-sans relative flex flex-row justify-between items-center ">

        <div className="absolute w-full left-0 bottom-0 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6FB4FF" fill-opacity="1" d="M0,288L60,288C120,288,240,288,360,261.3C480,235,600,181,720,170.7C840,160,960,192,1080,170.7C1200,149,1320,75,1380,37.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>

        <div className="footer--left w-3/5 h-full flex flex-col justify-center items-end ">
          <div className="footer--left-heading w-full min-h-40 pr-2 flex flex-col justify-center items-end ">
            <span className="footer--left-heading-top ">BEST PRICE</span>
            <span className="footer--left-heading-bottom ">Agate Phone Grip</span>
          </div>
          <div className="footer--left-price w-full min-h-32 pr-2 flex flex-row-reverse items-center ">
            <span className="footer--left-price-realprice mx-2 ">19.50$</span>
            <span className="footer--left-price-cutprice  mx-2 mt-2 line-through decoration-2">44.50$</span>
          </div>
          <div className="footer--left-para max-w-md min-h-32 ">
            <div className="footer--left-para-span text-right">These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!</div>
          </div>
          <div className="footer--left-buy">
            <button className="footer--left-buy-btn w-[150px] h-[50px] rounded-2xl text-sm font-semibold">BUY NOW</button>
          </div>
        </div>

        <div className="footer--right h-full ">
          <div className="footer--right-outer-circle center-with-flex w-[750px] h-[750px] rounded-full">
            <div className="footer--right-middle-circle center-with-flex w-[580px] h-[580px] rounded-full">
              <div className="footer--right-inner-circle center-with-flex w-[350px] h-[350px] rounded-full">
                <img className="w-3/4 h-3/4" src="./assets/rock.png" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="bottom-div w-full h-[200px]"></div>
    </>
  )
}

export default Footer;
