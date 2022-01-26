import React from "react";

const WhatTheyAreSaying = () => {
  return (
    <div className='cont w-[750px] mx-auto my-16 p-4 text-center'>
      <h1 className='text-[40px] text-[#022B1A]'>What they are saying</h1>
      <p className='my-4 px-4 text-[18px] leading-[24px]'>Commercial real estate has never been more accessible, thanks to Sonoture’s innovative approach.</p>
      <div className='quote bg-[#FFD233] w-[714px] text-[20px] text-center rounded-md flex items-center p-4 font-normal mt-9'>
        Every one of the Andela engineers I have worked with has been stellar. They are great engineers, really driven to deliver, and they’re just great people.
      </div>
      <div className='img-cont'>
        <div className='outer-border'>
          <span>.</span>
        </div>
         <div className='outer-border active'>
          <span></span>
        </div>
         <div className='outer-border'>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default WhatTheyAreSaying