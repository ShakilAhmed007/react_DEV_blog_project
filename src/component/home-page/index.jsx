import React from 'react'
import HomeBanner from '../banner'
import MainLayout from '../layout-grid'
import NavBar from '../nav'

function HomePage() {
  return (
    <div className='bg-gray-100'>
      <NavBar />
      <div className=" pt-20">
      <HomeBanner />
      <MainLayout />
      </div>
    </div>
  )
}

export default HomePage
