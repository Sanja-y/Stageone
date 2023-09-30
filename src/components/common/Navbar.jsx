import React, { useState } from 'react';
import logo from '../../assets/opnturf-logo.png'

function Navbar() {

  return (

    <div className="flex justify-between">
      <div className="w-1/4">
        {/* Leftmost content */}
        <img src={logo} alt="" className='mt-[30px] ml-[59px] w-[130px] h-[70px]' />
      </div>

      <div className="w-1/4 text-right mt-[30px]">
        <p className="text-right flex flex-col  mr-[70px]">
          <span className='text-[28px] font-extrabold text-#595656'>Stage One</span>
          <span className='text-#595656 text-center italic text-lg font-normal leading-normal'>Your Journey to success begins here</span>
        </p>
      </div>
    </div>

  );
}

export default Navbar;
