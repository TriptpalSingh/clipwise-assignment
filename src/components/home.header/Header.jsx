import React, { useEffect, useState } from 'react';
import './header.css'

import CaroselCard from '../home.card/CaroselCard';

function Header() {

  const arr = new Array(10);
  arr.fill(0)

  const dotBackgroundColor = () => {
    return (
      {
        backgroundColor: "lightblue"
      }
    )
  }


  return (
    <>
      <div className='w-full h-1/2 absolute'>
        <div className='background-outer-div'>
          <img className='w-full h-full -mt-5' src='./assets/image.png' />
          <div className='background-inner-div'>
            <svg className='inner-div-svg mt-px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,288L60,288C120,288,240,288,360,261.3C480,235,600,181,720,170.7C840,160,960,192,1080,170.7C1200,149,1320,75,1380,37.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
          </div>
        </div>
      </div>

      <div className='header-outer-div w-full'>
        <div className='navbar--outer w-full h-28 relative'>
          <div className='navbar--logo-outer mx-10'>
            <div className='logo'>
              <svg width="37" height="64" viewBox="0 0 37 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5219 0C8.29537 0 0 8.44103 0 18.8472V45.1975C0 55.6036 8.29537 64.0447 18.5219 64.0447C28.7485 64.0447 37.0439 55.6036 37.0439 45.1975V18.8472C37 8.44103 28.7046 0 18.5219 0ZM35.5516 45.1975C35.5516 54.7551 27.9146 62.5262 18.5219 62.5262C9.1293 62.5262 1.49229 54.7551 1.49229 45.1975V18.8472C1.49229 9.2896 9.1293 1.51849 18.5219 1.51849C27.9146 1.51849 35.5516 9.2896 35.5516 18.8472V45.1975Z" fill="white" />
                <path d="M12.7725 22.4201L24.7108 36.8904L31.8211 28.2708L26.0275 22.4201H12.7725ZM23.9646 23.8939L19.6195 28.3154L15.9765 23.8939H23.9646ZM24.7108 34.5234L20.5412 29.4766L25.7203 24.2066L29.7582 28.3154L24.7108 34.5234Z" fill="white" />
                <path d="M5.22313 28.2707L18.5221 44.4382L23.5695 38.3196L10.7095 22.688L5.22313 28.2707ZM18.5221 42.0712L7.19822 28.3601L10.5778 24.9211L21.5944 38.3196L18.5221 42.0712Z" fill="white" />
              </svg>
            </div>
            <span className='logo-text font-sans text-white text-lg font-normal -mt-1 mx-4'>Pop Rock Crystal</span>
          </div>
          <div className='navbar--routes-outer absolute mr-72 flex flex-row justify-around text-white'>
            <span className='navbar--routes-span'>Home</span>
            <span className='navbar--routes-span'>Shop</span>
            <span className='navbar--routes-span'>About us</span>
            <span className='navbar--routes-span'>Help</span>
          </div>
          <div className='navbar--cart-outer absolute mr-10 h-full flex flex-row '>
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.8502 8.25H18.0937L12.75 1.125C12.6626 1.00857 12.5494 0.914063 12.4192 0.848974C12.289 0.783886 12.1455 0.75 12 0.75C11.8544 0.75 11.7109 0.783886 11.5807 0.848974C11.4505 0.914063 11.3373 1.00857 11.25 1.125L5.90621 8.25H2.14976C1.64444 8.24922 1.15943 8.44889 0.801117 8.80523C0.442808 9.16156 0.240453 9.64546 0.238436 10.1508C0.237345 10.3294 0.263223 10.5072 0.315194 10.6781L3.02633 20.2371C3.20262 20.8601 3.57755 21.4085 4.09411 21.7989C4.61066 22.1893 5.24057 22.4003 5.88805 22.3998H18.1119C18.7594 22.3978 19.3889 22.1864 19.9064 21.7971C20.4239 21.4079 20.8015 20.8616 20.983 20.24L23.6976 10.6682C23.7101 10.6228 23.7192 10.5766 23.7246 10.5299L23.7556 10.241C23.7591 10.2109 23.7609 10.1805 23.7609 10.1502C23.7587 9.64507 23.5564 9.16141 23.1982 8.80523C22.8401 8.44904 22.3553 8.24937 21.8502 8.25ZM12 3.2502L15.75 8.25H8.24996L12 3.2502ZM12 17.6057C11.5635 17.6036 11.1375 17.4723 10.7756 17.2283C10.4137 16.9843 10.1322 16.6386 9.96666 16.2347C9.80108 15.8309 9.75884 15.3871 9.84526 14.9593C9.93168 14.5315 10.1429 14.1389 10.4522 13.831C10.7616 13.5231 11.1552 13.3138 11.5834 13.2294C12.0116 13.145 12.4552 13.1894 12.8583 13.3569C13.2613 13.5244 13.6057 13.8075 13.8479 14.1705C14.0902 14.5336 14.2195 14.9602 14.2195 15.3967C14.2162 15.9831 13.9809 16.5445 13.565 16.958C13.1491 17.3715 12.5864 17.6035 12 17.6033V17.6057Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className='header--content-outer w-full h-5/6 flex flex-row justify-around '>
          <div className='header--content-left w-3/6 h-full px-5 flex flex-col justify-center'>
            <div className='header--content-welcome w-full min-h-40 text-white font-sans'>
              <span className='header--content-welcome-small text-3xl block'>Welcome to</span>
              <span className='header--content-welcome-big text-6xl font-semibold block'>Pop Rock Crystal Shop!</span>
            </div>
            <div className='header--content-para w-1/2 min-h-36 pb-2 font-sans '>
              <span className='para-span'>Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!</span>
            </div>
            <div className='header--content-buttons w-full h-1/4'>
              <button className='header--welcome-shop-btn text-sm font-semibold'>SHOP NOW</button>
              <span className='header--welcome-aboutus-span ml-10 font-sans font-normal text-md'>about us</span>
            </div>
          </div>
          <div className='header--content-right w-[600px] h-full flex flex-col justify-center items-center relative '>
            <CaroselCard />
            <div className='header--content-carosel-button-div flex flex-row justify-center items-center mt-4 relative'>
              <div className='header--content-carosel-left'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.316071 21.7956 0 21 0L3 0ZM12.531 15.969C12.6718 16.1098 12.7509 16.3008 12.7509 16.5C12.7509 16.6992 12.6718 16.8902 12.531 17.031C12.3902 17.1718 12.1992 17.2509 12 17.2509C11.8008 17.2509 11.6098 17.1718 11.469 17.031L6.969 12.531C6.89916 12.4613 6.84374 12.3786 6.80593 12.2874C6.76812 12.1963 6.74866 12.0987 6.74866 12C6.74866 11.9013 6.76812 11.8037 6.80593 11.7125C6.84374 11.6214 6.89916 11.5387 6.969 11.469L11.469 6.969C11.5387 6.89927 11.6215 6.84395 11.7126 6.80621C11.8037 6.76848 11.9014 6.74905 12 6.74905C12.0986 6.74905 12.1963 6.76848 12.2874 6.80621C12.3785 6.84395 12.4613 6.89927 12.531 6.969C12.6007 7.03873 12.656 7.12152 12.6938 7.21262C12.7315 7.30373 12.7509 7.40138 12.7509 7.5C12.7509 7.59862 12.7315 7.69627 12.6938 7.78738C12.656 7.87848 12.6007 7.96127 12.531 8.031L9.3105 11.25H16.5C16.6989 11.25 16.8897 11.329 17.0303 11.4697C17.171 11.6103 17.25 11.8011 17.25 12C17.25 12.1989 17.171 12.3897 17.0303 12.5303C16.8897 12.671 16.6989 12.75 16.5 12.75H9.3105L12.531 15.969Z" fill="#8A93E5" />
                </svg>
              </div>
              <div className='header--content-carosel-dots w-[120px] flex flex-row justify-between items-center'>
                <div className='w-[10px] h-[10px] rounded-full' style={dotBackgroundColor()}></div>
                <div className='w-[10px] h-[10px] rounded-full' style={dotBackgroundColor()}></div>
                <div className='w-[10px] h-[10px] rounded-full' style={dotBackgroundColor()}></div>
                <div className='w-[10px] h-[10px] rounded-full' style={dotBackgroundColor()}></div>
                <div className='w-[10px] h-[10px] rounded-full' style={dotBackgroundColor()}></div>
                <div className='w-[10px] h-[10px] rounded-full' style={dotBackgroundColor()}></div>
              </div>
              <div className='header--content-carosel-right'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.878681 23.1213C0.316071 22.5587 0 21.7956 0 21V3C0 2.20435 0.316071 1.44129 0.878681 0.87868C1.44129 0.316071 2.20435 0 3 0L21 0ZM11.469 15.969C11.3282 16.1098 11.2491 16.3008 11.2491 16.5C11.2491 16.6992 11.3282 16.8902 11.469 17.031C11.6098 17.1718 11.8008 17.2509 12 17.2509C12.1992 17.2509 12.3902 17.1718 12.531 17.031L17.031 12.531C17.1008 12.4613 17.1563 12.3786 17.1941 12.2874C17.2319 12.1963 17.2513 12.0987 17.2513 12C17.2513 11.9013 17.2319 11.8037 17.1941 11.7125C17.1563 11.6214 17.1008 11.5387 17.031 11.469L12.531 6.969C12.4613 6.89927 12.3785 6.84395 12.2874 6.80621C12.1963 6.76848 12.0986 6.74905 12 6.74905C11.9014 6.74905 11.8037 6.76848 11.7126 6.80621C11.6215 6.84395 11.5387 6.89927 11.469 6.969C11.3993 7.03873 11.344 7.12152 11.3062 7.21262C11.2685 7.30373 11.2491 7.40138 11.2491 7.5C11.2491 7.59862 11.2685 7.69627 11.3062 7.78738C11.344 7.87848 11.3993 7.96127 11.469 8.031L14.6895 11.25H7.5C7.30109 11.25 7.11032 11.329 6.96967 11.4697C6.82902 11.6103 6.75 11.8011 6.75 12C6.75 12.1989 6.82902 12.3897 6.96967 12.5303C7.11032 12.671 7.30109 12.75 7.5 12.75H14.6895L11.469 15.969Z" fill="#8A93E5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='scroll-down-outer w-full h-[60px] flex flex-row justify-center items-center'>
        <div className='mouse-icon w-[40px] h-[40px] mx-2 flex flex-col justify-around items-center'>
          <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.99998 5C8.69056 5 8.39382 5.12291 8.17502 5.3417C7.95623 5.5605 7.83331 5.85724 7.83331 6.16666V8.5C7.83331 8.80941 7.95623 9.10616 8.17502 9.32495C8.39382 9.54375 8.69056 9.66666 8.99998 9.66666C9.3094 9.66666 9.60615 9.54375 9.82494 9.32495C10.0437 9.10616 10.1666 8.80941 10.1666 8.5V6.16666C10.1666 5.85724 10.0437 5.5605 9.82494 5.3417C9.60615 5.12291 9.3094 5 8.99998 5ZM8.99998 0.333328C6.83405 0.333328 4.75682 1.19374 3.22527 2.72529C1.69373 4.25684 0.833313 6.33406 0.833313 8.5V15.5C0.833313 17.6659 1.69373 19.7432 3.22527 21.2747C4.75682 22.8062 6.83405 23.6667 8.99998 23.6667C11.1659 23.6667 13.2431 22.8062 14.7747 21.2747C16.3062 19.7432 17.1666 17.6659 17.1666 15.5V8.5C17.1666 6.33406 16.3062 4.25684 14.7747 2.72529C13.2431 1.19374 11.1659 0.333328 8.99998 0.333328ZM14.8333 15.5C14.8333 17.0471 14.2187 18.5308 13.1248 19.6248C12.0308 20.7187 10.5471 21.3333 8.99998 21.3333C7.45288 21.3333 5.96915 20.7187 4.87519 19.6248C3.78123 18.5308 3.16665 17.0471 3.16665 15.5V8.5C3.16665 6.9529 3.78123 5.46917 4.87519 4.37521C5.96915 3.28124 7.45288 2.66666 8.99998 2.66666C10.5471 2.66666 12.0308 3.28124 13.1248 4.37521C14.2187 5.46917 14.8333 6.9529 14.8333 8.5V15.5Z" fill="#307189" />
          </svg>
          <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.86603 3.5C2.48113 4.16667 1.51887 4.16667 1.13397 3.5L0.267949 2C-0.116951 1.33333 0.364174 0.5 1.13397 0.5L2.86602 0.5C3.63583 0.5 4.11695 1.33333 3.73205 2L2.86603 3.5Z" fill="#307189" />
          </svg>
        </div>
        <span className='scroll-down-span font-semibold font-sans text-base leading-loose'>scroll down</span>
      </div>
    </>
  )
}


export default Header;
