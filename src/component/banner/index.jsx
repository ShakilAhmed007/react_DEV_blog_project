import React from 'react'
import Banner from '../images/banner/headerBanner.png'

function HomeBanner() {
  return (
    <div className='banner px-3 lg:px-0'>
        <a href="" className=''>
          <img src={Banner} alt="" className='mx-auto rounded-lg' />
        </a>
    </div>
  )
}

export default HomeBanner
