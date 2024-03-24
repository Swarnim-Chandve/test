import React from 'react'

function Earlybird() {
  return (
    <>
    <div className='flex justify-around items-center  mt-12'>
        
        <div>
            <h1 className='text-4xl'>Grab the Early bird Pass Today !!</h1>
            <h3 className='text-3xl'>Limited Time Offer</h3>
            <h3 className='text-3xl'>₹499✅ </h3>
            <button class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
             <span class="relative z-10">Get Early Bird !!</span>
            </button>
        </div>

        <div className='md:w-1/3 '>
            <img className='rounded-lg' src="https://gifdb.com/images/high/man-stealing-ticket-xbxljpyfciwquvs4.gif" alt="" />
        </div>
    </div>

    {/* <div className="">
        <h1>Inclusions</h1>
        <ul>
            <li>Swags and Goodies</li>
            <li>Food and Beverages</li>
            <li>Keynote Sessions</li>
            <li>Panel Discussions</li>
            <li>p1</li>
            <li>p2</li>
        </ul>
    </div>
     */}


    </>
  )
}

export default Earlybird