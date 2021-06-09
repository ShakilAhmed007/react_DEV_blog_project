import React from 'react'

function FlexCard() {
    return (
        <div className='bg-white p-3 rounded-lg'>

            <div className=' grid grid-cols-3 p-2 my-2 rounded-lg border border-gray-300 gap-2 bg-white'>
                <div className=" col-span-1">
                    <img className='rounded-lg' src="/assets/images/left-ad.png" alt="" />
                </div>
                <div className="col-span-2">
                    <h4 className='text-base font-bold'>deploy conference by DigitalOcean</h4>
                </div>
            </div>
      

            <div className=' grid grid-cols-3 p-2 my-2 rounded-lg border border-gray-300 gap-2 bg-white'>
                <div className=" col-span-1">
                    <img className='rounded-lg' src="/assets/images/left-ad.png" alt="" />
                </div>
                <div className="col-span-2">
                    <h4 className='text-base font-bold'>deploy conference by DigitalOcean</h4>
                </div>
            </div>
        </div>
    )
}

export default FlexCard
